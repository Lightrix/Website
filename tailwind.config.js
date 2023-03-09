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
			typography: {
				DEFAULT: {
					css: {
						a: {
							"font-weight": "400",
						},
					},
				},
			},
			colors: {
				"lightrix": {
					"50": "#fff1f1",
					"100": "#ffdfdf",
					"200": "#ffc5c5",
					"300": "#ff9d9d",
					"400": "#ff6464",
					"500": "#ff2323",
					"600": "#ed1515",
					"700": "#c80d0d",
					"800": "#a50f0f",
					"900": "#881414",
				},
			},
			ringWidth: {
				"5": "5px",
			},
		},
	},
	variants: {},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/aspect-ratio"),
	],
};
