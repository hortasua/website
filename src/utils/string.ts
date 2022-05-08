export const convertSnakeCaseToHumanReadable = (text: string): string => {
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	const capitalizedText = text[0].toUpperCase() + text.slice(1, text.length);
	const humanReadableText = capitalizedText.replaceAll("_", " ");

	return humanReadableText;
};
