export interface AnsweredQuestion {
	title: string;
	answer: string;
}

export interface Form {
	id: string;
	questions: Array<AnsweredQuestion>;
}
