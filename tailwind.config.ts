import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
	"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
		cursor: {
			default: 'url("/assets/custom_cursor.png")'
		},
		backgroundSize: {
			"120%": "120%"
		},
		screens: {
			'xsm': '500px',
			'xxsm': '350px',
		},
		colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			}
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
		letterSpacing: {
			"extra-widest": "0.5em",
			"super-widest": "1em",   
		},
		animation: {
			"shimmer-slide": "shimmer-slide var(--speed) ease-in-out infinite alternate",
			"spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
		},
		keyframes: {
			"spin-around": {
				"0%": {
					transform: "translateZ(0) rotate(0)",
				},
				"15%, 35%": {
					transform: "translateZ(0) rotate(90deg)",
				},
				"65%, 85%": {
					transform: "translateZ(0) rotate(270deg)",
				},
				"100%": {
					transform: "translateZ(0) rotate(360deg)",
				},
			},
			"shimmer-slide": {
				to: {
					transform: "translate(calc(100cqw - 100%), 0)",
				},
			},
		},
	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;