import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
	useToast,
	Link as ChakraLink,
} from "@chakra-ui/react";
import axios from "axios";
import { isBasicName } from "config/validation/name";
import { Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import Link from "next/link";
import { convertSnakeCaseToHumanReadable } from "utils/string";
import { yup } from "utils/yup";

import { Header } from "../../components/header";

import {
	DataSection,
	Main,
	CustomButton,
	ButtonSection,
	ButtonLabel,
} from "./styles";

export const Home: NextPage = () => {
	const { isOpen, onClose: closeForm, onOpen: openForm } = useDisclosure();

	const toast = useToast({
		duration: 5000,
		containerStyle: {
			fontFamily: "Poppins",
		},
		isClosable: true,
		position: "top-right",
	});

	const validationSchema = yup.object().shape({
		nome: isBasicName,
	});

	const formatValues = (values: Record<string, string>) => {
		return Object.entries(values).map(([title, answer]) => {
			return {
				title: convertSnakeCaseToHumanReadable(title),
				answer,
			};
		});
	};

	return (
		<>
			<Header />
			<Main>
				<DataSection>
					<h2>Uma empresa sustentável, feita para você!</h2>
					<p>
						A HortaSua tem como proposta pomover uma maior sustentabilidade,
						permitindo ao consumidor uma horta auto-regulável em sua própria
						casa ou apartamento.
					</p>
				</DataSection>
				<DataSection>
					<h2>Gostou do que leu? Então nos dê sua opinião!</h2>
					<p>
						Responda ao formulário abaixo para nos dizer um pouco mais sobre a
						sua experiência com a nossa empresa!
					</p>
					<ButtonSection>
						<CustomButton onClick={openForm}>
							Responder ao formulário
						</CustomButton>
						<ButtonLabel>
							É um administrador?{" "}
							<Link href="/login" passHref>
								<ChakraLink color="teal.500">Faça o login</ChakraLink>
							</Link>
							!
						</ButtonLabel>
					</ButtonSection>
				</DataSection>
			</Main>

			<Modal
				isOpen={isOpen}
				onClose={closeForm}
				motionPreset="slideInBottom"
				isCentered
			>
				<ModalOverlay />
				<ModalContent
					style={{
						width: "90vw",
					}}
				>
					<ModalHeader>Formulário</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Formik
							initialValues={{
								nome: "",
							}}
							onSubmit={async (values, actions) => {
								try {
									await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/forms`, {
										questions: formatValues(values),
									});

									toast({
										title: "Formulário enviado",
										description: "Seu formulário foi enviado com sucesso!",
										status: "success",
									});

									actions.setSubmitting(false);
									actions.resetForm();
									closeForm();
								} catch {
									toast({
										title: "Ocorreu um erro",
										description: "Seu formulário não pode ser enviado.",
										status: "error",
									});
								}
							}}
							validationSchema={validationSchema}
						>
							{({ isSubmitting }) => (
								<Form>
									<Field name="nome">
										{({ field, form }: any) => (
											<FormControl
												isInvalid={form.errors.nome && form.touched.nome}
											>
												<FormLabel htmlFor="nome">Nome</FormLabel>
												<Input {...field} placeholder="Ex: João Pedro" />
												<FormErrorMessage>{form.errors.nome}</FormErrorMessage>
											</FormControl>
										)}
									</Field>
									<Button
										mt={4}
										mb={4}
										colorScheme="teal"
										isLoading={isSubmitting}
										type="submit"
									>
										Enviar
									</Button>
								</Form>
							)}
						</Formik>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
