/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-require-imports */
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
			screens: {
				"pre-md": {
					max: "379px",
				},
				"1/2md": {
					min: "380px",
					max: "466px",
				},
				"767": {
					max: "767px",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
