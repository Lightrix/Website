const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./public/**/*.html",
		"./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
	],
	dark: "media",
	theme: {
		container: {
			center: true,
		},
		extend: {
			transitionTimingFunction: {
				apple: "cubic-bezier(0.25, 0.1, 0.25, 1)",
			},
			fontFamily: {
				sans: ["Albert Sans", ...defaultTheme.fontFamily.sans],
			},
			// @ts-ignore
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						a: {
							"font-weight": "400",
						},
					},
				},
				lightrix: {
					css: {
						"--tw-prose-body": theme("colors.lightrix[700]"),
						"--tw-prose-headings": theme("colors.lightrix[900]"),
						"--tw-prose-lead": theme("colors.lightrix[600]"),
						"--tw-prose-links": theme("colors.lightrix[900]"),
						"--tw-prose-bold": theme("colors.lightrix[900]"),
						"--tw-prose-counters": theme("colors.lightrix[500]"),
						"--tw-prose-bullets": theme("colors.lightrix[300]"),
						"--tw-prose-hr": theme("colors.lightrix[200]"),
						"--tw-prose-quotes": theme("colors.lightrix[900]"),
						"--tw-prose-quote-borders": theme("colors.lightrix[200]"),
						"--tw-prose-captions": theme("colors.lightrix[500]"),
						"--tw-prose-code": theme("colors.lightrix[900]"),
						"--tw-prose-pre-code": theme("colors.lightrix[200]"),
						"--tw-prose-pre-bg": theme("colors.lightrix[800]"),
						"--tw-prose-th-borders": theme("colors.lightrix[300]"),
						"--tw-prose-td-borders": theme("colors.lightrix[200]"),
						"--tw-prose-invert-body": theme("colors.lightrix[900]"),
						"--tw-prose-invert-headings": theme("colors.white"),
						"--tw-prose-invert-lead": theme("colors.lightrix[400]"),
						"--tw-prose-invert-links": theme("colors.white"),
						"--tw-prose-invert-bold": theme("colors.white"),
						"--tw-prose-invert-counters": theme("colors.lightrix[400]"),
						"--tw-prose-invert-bullets": theme("colors.lightrix[600]"),
						"--tw-prose-invert-hr": theme("colors.lightrix[700]"),
						"--tw-prose-invert-quotes": theme("colors.lightrix[100]"),
						"--tw-prose-invert-quote-borders": theme("colors.lightrix[700]"),
						"--tw-prose-invert-captions": theme("colors.lightrix[400]"),
						"--tw-prose-invert-code": theme("colors.white"),
						"--tw-prose-invert-pre-code": theme("colors.lightrix[300]"),
						"--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
						"--tw-prose-invert-th-borders": theme("colors.lightrix[600]"),
						"--tw-prose-invert-td-borders": theme("colors.lightrix[700]"),
					},
				},
			}),
			colors: {
				lightrix: {
					50: "#fff1f1",
					100: "#ffdfdf",
					200: "#ffc5c5",
					300: "#ff9d9d",
					400: "#ff6464",
					500: "#ff2323",
					600: "#ed1515",
					700: "#c80d0d",
					800: "#a50f0f",
					900: "#881414",
				},
			},
			ringWidth: {
				5: "5px",
			},
		},
	},
	variants: {},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
};
