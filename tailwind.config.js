/* eslint-disable @typescript-eslint/naming-convention */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				brown: "#b75236",
				blue: {
					600: "#12aaaf",
				},
				beige: "#f9e7cf",
			},
			fontFamily: {
				sans: ["Poppins", "Proxima Nova"],
			},
		},
	},
	plugins: [],
};
