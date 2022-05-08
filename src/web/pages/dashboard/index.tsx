import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header } from "web/components/header";

import {
	Main,
	FormData,
	NumericStats,
	StatsLabel,
	FormsSection,
	FormSection,
} from "./styles";

import type { Form } from "types/form";

export const Dashboard: NextPage = () => {
	const router = useRouter();
	const [forms, setForms] = useState<Array<Form>>([]);

	useEffect(() => {
		const userData = localStorage.getItem("user");
		if (!userData) {
			router.push("/login");

			return;
		}

		axios.get(`${process.env.NEXT_PUBLIC_API_URL}/forms`).then(({ data }) => {
			setForms(data);
		});
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			<Header />
			<Main>
				<FormData>
					<NumericStats>{forms.length}</NumericStats>
					<StatsLabel>Quantidade de formulários</StatsLabel>
				</FormData>
				<FormsSection>
					{forms.map(form => {
						const { id, questions } = form;

						return (
							<FormSection key={id}>
								<FormControl>
									{questions.map(question => {
										const { title, answer } = question;

										return (
											<div key={title}>
												<FormLabel htmlFor={title}>{title}</FormLabel>
												<Input value={answer} readOnly={true} />
											</div>
										);
									})}
								</FormControl>
							</FormSection>
						);
					})}
				</FormsSection>
			</Main>
		</>
	);
};
