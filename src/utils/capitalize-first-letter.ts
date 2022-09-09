export const capitalizeFirstLetter = (s: string) => {
	const FIRST_LETTER_INDEX = 0;
	const SECOND_LETTER_INDEX = 1;

	const newString =
		s[FIRST_LETTER_INDEX].toUpperCase() + s.slice(SECOND_LETTER_INDEX);

	return newString;
};
