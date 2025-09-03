/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'philosopher': ['Philosopher', 'serif']
            },
            colors: {
                'brand-primary': '#0E184F',
                'accent-blue': '#2563eb',
                'accent-blue-dark': '#60a5fa',
                'text-light-theme': '#0E184F',
                'text-light-theme-muted': '#374151',
                'bg-light-theme': '#ffffff',
                'bg-light-theme-alt': '#f9fafb',
                'text-dark-theme': '#ffffff',
                'text-dark-theme-muted': '#d1d5db',
                'bg-dark-theme': '#0E184F',
                'bg-dark-theme-card': '#1f2937',
                'border-dark-theme': '#4b5563'
            },
            animation: {
                'marquee': 'marquee 30s linear infinite'
            },
            keyframes: {
                marquee: {
                    '0%': {
                        transform: 'translateX(0%)'
                    },
                    '100%': {
                        transform: 'translateX(-50%)'
                    }
                }
            }
        }
    },
    plugins: []
}
