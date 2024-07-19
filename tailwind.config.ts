import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import typography from "@tailwindcss/typography";

export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	plugins: [
		typography,
		plugin(({ addUtilities }) => {
			addUtilities({
				".debug-border": {
					border: "1px solid red",
				},
			});
		}),
	],
	theme: {
		extend: {
			colors: {
				black: {
					100: "#020100",
					200: "#040200",
					300: "#060300",
					400: "#080400",
					500: "#0b0500",
					600: "#6e3200",
					700: "#d25f00",
					800: "#ff9137",
					900: "#ffc89b",
					DEFAULT: "#0b0500",
				},
				lime: {
					100: "#364d01",
					200: "#6c9902",
					300: "#a2e602",
					400: "#c2fd39",
					500: "#dbfe87",
					600: "#e1fe9e",
					700: "#e9feb6",
					800: "#f0ffcf",
					900: "#f8ffe7",
					DEFAULT: "#dbfe87",
				},
				purple: {
					100: "#141232",
					200: "#282564",
					300: "#3c3796",
					400: "#5852bf",
					500: "#8783d1",
					600: "#a09ddb",
					700: "#b8b5e4",
					800: "#cfceed",
					900: "#e7e6f6",
					DEFAULT: "#8783d1",
				},
				red: {
					100: "#34090e",
					200: "#68121c",
					300: "#9c1c2b",
					400: "#d02539",
					500: "#e05263",
					600: "#e77482",
					700: "#ed97a1",
					800: "#f3bac0",
					900: "#f9dce0",
					contrast: "#B34D5A",
					DEFAULT: "#e05263",
				},
				teal: {
					100: "#012422",
					200: "#014844",
					300: "#026d65",
					400: "#029187",
					500: "#03b5aa",
					600: "#04f5e5",
					700: "#3efcef",
					800: "#7efdf5",
					900: "#bffefa",
					DEFAULT: "#03b5aa",
				},
			},
			fontFamily: {
				plex: ["IBM Plex Sans", "sans-serif"],
				"plex-mono": ["IBM Plex Mono", "monospace"],
			},
			letterSpacing: {
				"plex-mono": "-0.0125em",
			},
		},
	},
} satisfies Config;
