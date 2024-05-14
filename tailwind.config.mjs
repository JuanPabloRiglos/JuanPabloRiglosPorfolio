/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

	theme: {
		extend: {
			textColors: {
				default: "#d0d2d7",
			},
		},
	},
	plugins: [],
};
