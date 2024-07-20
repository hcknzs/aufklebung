import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				plex: ["IBM Plex Sans", "sans-serif"],
				"plex-mono": ["IBM Plex Mono", "monospace"],
			},
			letterSpacing: {
				"plex-mono": "-0.0125em",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "#5852bf",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},

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
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		animate,
		typography,
		plugin(({ addUtilities }) => {
			addUtilities({
				".debug-border": {
					border: "1px solid red",
				},
			});
		}),
	],
} satisfies Config;

export default config;
