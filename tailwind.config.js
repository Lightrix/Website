const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./public/**/*.html",
		"./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
	],
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
				"lightrix": "#FF2323",
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
