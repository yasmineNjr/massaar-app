function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }
  


/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: 'true',
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
		
		boxShadow: {
			customGray: '0 4px 10px rgba(50, 50, 50, 0.8)', // dark gray shadow
		},
		backgroundImage: {
			'custom-gray-gradient': 'linear-gradient(to right, #D1D5DB, #FFFFFF)', // gray-300 to white
		  },
  		bottom: {
  			'5p': '5%'
  		},
  		colors: {
			customGray: '#6d6d6d',
			customBlue: '#3498db',
        	customGreen: '#2ecc71',
			customLightGreen: '#b3e6b3',
			customSecondary: '#292D32',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			dimWhite: 'rgba(255, 255, 255, 0.7)',
  			dimBlue: 'rgba(9, 151, 124, 0.1)',
			gold: '#ffd700',
			customGold: '#b89f00',
  			green: {
  				'500': '#24AE7C',
  				'600': '#0D2A1F'
  			},
  			blue: {
  				'500': '#79B5EC',
  				'600': '#152432'
  			},
  			red: {
  				'500': '#F37877',
  				'600': '#3E1716',
  				'700': '#F24E43'
  			},
  			light: {
  				'200': '#E8E9E9'
  			},
  			dark: {
  				'200': '#0D0F10',
  				'300': '#131619',
  				'400': '#1A1D21',
  				'500': '#363A3D',
  				'600': '#76828D',
  				'700': '#ABB8C4'
  			},
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
  		fontFamily: {
  			sans: ["var(--font-sans)", ...fontFamily.sans]
  		},
		  backgroundImage: {
			appointments: "url('/assets/appointments-bg.png')",
			pending: "url('/assets/pending-bg.png')",
			cancelled: "url('/assets/cancelled-bg.png')",
		  },
  		keyframes: {
			circularShake: {
				'0%': { transform: 'translate(0, 0)' },
				'25%': { transform: 'translate(2px, -2px)' },
				'50%': { transform: 'translate(0, -4px)' },
				'75%': { transform: 'translate(-2px, -2px)' },
				'100%': { transform: 'translate(0, 0)' },
			  },
			shake: {
				'0%, 100%': { transform: 'translateX(0)' },
				'25%': { transform: 'translateX(-5px)' },
				'50%': { transform: 'translateX(5px)' },
				'75%': { transform: 'translateX(-5px)' },
			  },
			bounceText: {
				'0%, 100%': { transform: 'translateY(0)' },
				'50%': { transform: 'translateY(-10px)' },
			  },
			fadeIn: {
				'0%': { opacity: '0' },
				'100%': { opacity: '1' },
			  },
			typewriter: {
				'0%': { width: '0%' },
				'100%': { width: '100%' },
			},
			blink: {
				'50%': { borderColor: 'transparent' },
			},
			slide: {
				'0%': { transform: 'translateX(0%)' }, // Start fully visible
				'100%': { transform: 'translateX(-100%)' }, // Slide out completely
			},
			scroll: {
				to: {
				  transform: "translate(calc(-50% - 0.5rem))",
				},
			  },
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'caret-blink': {
  				'0%,70%,100%': {
  					opacity: '1'
  				},
  				'20%,50%': {
  					opacity: '0'
  				}
  			}
  		},
  		animation: {
			circularShake: 'circularShake 0.8s ease-in-out infinite',
			shake: 'shake 0.5s ease-in-out',
			bounceText: 'bounceText 1s infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'caret-blink': 'caret-blink 1.25s ease-out infinite',
			scroll:
          		"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
		  	slide: 'slide 60s linear infinite',
			typewriter: 'typewriter 4s steps(20) 1s forwards',
			blink: 'blink 1s step-end infinite',
			fadeIn: 'fadeIn 2s ease-in-out',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	screens: {
  		xs: '480px',
  		ss: '620px',
  		sm: '768px',
  		md: '1060px',
  		lg: '1200px',
  		xl: '1700px'
  	}
  },
  plugins: [require("tailwindcss-animate")],
  
	// plugins: [addVariablesForColors],
} ;


export default config;


