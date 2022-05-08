import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { isAdminName } from "config/validation/name";
import { isPassword } from "config/validation/password";
import { Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { yup } from "utils/yup";
import { Header } from "web/components/header";

import { CustomButton, Main } from "./styles";

export const Login: NextPage = () => {
	const [isButtonDisabled, setButtonDisabled] = useState(false);
	const router = useRouter();
	const toast = useToast({
		duration: 5000,
		containerStyle: {
			fontFamily: "Poppins",
		},
		isClosable: true,
		position: "top-right",
		status: "error",
		title: "Ocorreu um erro",
		description: "As credenciais estão incorretas",
		onCloseComplete: () => {
			setButtonDisabled(false);
		},
	});

	useEffect(() => {
		const userData = localStorage.getItem("user");
		if (userData) {
			router.push("/dashboard");
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const validationSchema = yup.object().shape({
		username: isAdminName,
		password: isPassword,
	});

	return (
		<>
			<Header />
			<Main>
				<Formik
					initialValues={{
						username: "",
						password: "",
					}}
					onSubmit={async (values, actions) => {
						setButtonDisabled(true);

						try {
							const { data } = await axios.post(
								`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
								values,
							);

							localStorage.setItem("user", JSON.stringify(data));

							router.push("/dashboard");
						} catch {
							toast();

							return;
						}

						actions.setSubmitting(false);
					}}
					validationSchema={validationSchema}
				>
					{({ isSubmitting }) => (
						<Form
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "column",
								gap: "1rem",
							}}
						>
							<Field name="username">
								{({ field, form }: any) => (
									<FormControl
										isInvalid={form.errors.username && form.touched.username}
									>
										<FormLabel htmlFor="username">Nome de usuário</FormLabel>
										<Input
											{...field}
											id="username"
											placeholder="Ex: João Pedro"
										/>
										<FormErrorMessage>{form.errors.username}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name="password">
								{({ field, form }: any) => (
									<FormControl
										isInvalid={form.errors.password && form.touched.password}
									>
										<FormLabel htmlFor="password">Senha</FormLabel>
										<Input {...field} id="password" placeholder="Senha" />
										<FormErrorMessage>{form.errors.password}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Button
								colorScheme="teal"
								isLoading={isSubmitting}
								type="submit"
								disabled={isButtonDisabled}
								as={CustomButton}
							>
								Login
							</Button>
						</Form>
					)}
				</Formik>
			</Main>
		</>
	);
};
