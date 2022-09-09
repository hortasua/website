import type { ChangeEventHandler, FC, FormEventHandler } from "react";
import { useState } from "react";
import { capitalizeFirstLetter } from "utils/capitalize-first-letter";
import { Button } from "web/components/button";

interface FormField<T> {
	value: T;
	discriminant: (form: Form) => void;
}

class Form {
	public punctuations = {
		alphacota: 0,
		terracota: 0,
		babycota: 0,
	};

	public questions: Record<string, FormField<any>>;

	public constructor(questions: Record<string, FormField<any>>) {
		this.questions = questions;
	}
}

interface HomeModalFormProps {
	setQuizResult: (value: string) => void;
}

export const HomeModalForm: FC<HomeModalFormProps> = ({
	setQuizResult,
}: HomeModalFormProps) => {
	const formQuestions = {
		livesInHouseOrApartment: {
			value: "house",
			discriminant: (form: Form) => {
				if (form.questions.livesInHouseOrApartment.value === "apartment") {
					form.punctuations.babycota += 1;
				} else {
					form.punctuations.terracota += 1;
					form.punctuations.alphacota += 1;
				}
			},
		},
		quantityOfPeopleLivingTogether: {
			value: 1,
			discriminant: (form: Form) => {
				const QUANTITY_OF_MEMBERS_IN_A_SMALL_FAMILY = 2;

				if (
					form.questions.quantityOfPeopleLivingTogether.value <=
					QUANTITY_OF_MEMBERS_IN_A_SMALL_FAMILY
				) {
					form.punctuations.babycota += 1;
					form.punctuations.terracota += 1;
					form.punctuations.alphacota -= 2;
				} else {
					form.punctuations.terracota += 1;
					form.punctuations.alphacota += 2;
				}
			},
		},
		doesHomeHaveBalcony: {
			value: 0,
			discriminant: (form: Form) => {
				if (
					form.questions.livesInHouseOrApartment.value === "apartment" &&
					form.questions.doesHomeHaveBalcony.value
				) {
					form.punctuations.terracota += 1;
				} else if (form.questions.livesInHouseOrApartment.value) {
					form.punctuations.alphacota += 2;
				}
			},
		},
	};

	const emptyForm = new Form(formQuestions);
	const [form, setForm] = useState<Form>(emptyForm);

	const toggleBetweenHourOrApartment: ChangeEventHandler<
		HTMLSelectElement
	> = event => {
		setForm({
			...form,
			questions: {
				...form.questions,
				livesInHouseOrApartment: {
					...form.questions.livesInHouseOrApartment,
					value: event.target.value as "apartment" | "house",
				},
			},
		});
	};

	const toggleBetweenHavingOrNotHavingABalcony: ChangeEventHandler<
		HTMLSelectElement
	> = event => {
		setForm({
			...form,
			questions: {
				...form.questions,
				doesHomeHaveBalcony: {
					...form.questions.doesHomeHaveBalcony,
					value: Number(event.target.value),
				},
			},
		});
	};

	const changeQuantityOfPeopleThatLiveTogether: ChangeEventHandler<
		HTMLInputElement
	> = event => {
		setForm({
			...form,
			questions: {
				...form.questions,
				quantityOfPeopleLivingTogether: {
					...form.questions.quantityOfPeopleLivingTogether,
					value: Number(event.target.value),
				},
			},
		});
	};

	const onFormSubmit: FormEventHandler<HTMLFormElement> = event => {
		event.preventDefault();

		const { questions } = form;
		const rawQuestions = Object.entries(questions);

		rawQuestions.forEach(([_, item]) => {
			item.discriminant(form);
			console.log(form.punctuations); // eslint-disable-line
		});

		const GREATEST_PUNCTUATION_INDEX = 0;
		const PRODUCT_INDEX = 0;
		const PUNCTUATION_INDEX = 1;

		const punctuations = Object.entries(form.punctuations);
		const sortedPunctuations = punctuations.sort(
			(a, b) => b[PUNCTUATION_INDEX] - a[PUNCTUATION_INDEX],
		);

		const result =
			sortedPunctuations[GREATEST_PUNCTUATION_INDEX][PRODUCT_INDEX];
		const formattedResult = capitalizeFirstLetter(result);

		setQuizResult(formattedResult);
	};

	return (
		<form className="flex flex-col gap-8" onSubmit={onFormSubmit}>
			<div className="flex flex-col">
				<label htmlFor="house-or-apartment">
					Você mora em casa ou apartamento?
				</label>
				<select
					name="house-or-apartment"
					id="house-or-apartment"
					className="max-w-md transition-all focus:outline-none"
					onChange={toggleBetweenHourOrApartment}
				>
					<option value="house">Casa</option>
					<option value="apartment">Apartamento</option>
				</select>
			</div>
			<div className="flex flex-col">
				<label htmlFor="people-living-together">
					Quantas pessoas vivem com você?
				</label>
				<input
					type="number"
					name="people-living-together"
					id="people-living-together"
					className="max-w-md"
					min={1}
					max={15}
					value={form.questions.quantityOfPeopleLivingTogether.value}
					onChange={changeQuantityOfPeopleThatLiveTogether}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="does-house-have-balcony">
					{form.questions.livesInHouseOrApartment.value === "house"
						? "Sua casa"
						: "Seu apartamento"}{" "}
					tem varanda?
				</label>
				<select
					name="does-house-have-balcony"
					id="does-house-have-balcony"
					className="max-w-md"
					onChange={toggleBetweenHavingOrNotHavingABalcony}
				>
					<option value={1}>Sim</option>
					<option value={0}>Não</option>
				</select>
			</div>
			<div className="flex justify-center mt-10 md:mr-10 md:justify-end">
				<Button type="submit" className="py-3 px-2">
					Enviar formulário
				</Button>
			</div>
		</form>
	);
};
