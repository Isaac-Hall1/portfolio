/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        animation: {
          'text-slide': 'text-slide 25s cubic-bezier(0.83, 0, 0.17, 1) infinite',
          'fadeIn': 'fadeIn 2s ease-in forwards',
        },
        keyframes : {
            'fadeIn': {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            },
            "borderSlide": {
              '0%, 100%': { borderWidth: '.5px', borderColor: 'transparent' },
              '50%': { borderWidth: '2px', borderColor: 'rgba(255, 255, 255, 0.7)' },
            },
            'text-slide': {
              '0%, 8%': {
                  transform: 'translateY(0%)',
              },
              '10%, 18%': {
                  transform: 'translateY(-10%)',
              },
              '20%, 28%': {
                  transform: 'translateY(-20%)',
              },
              '30%, 38%': {
                  transform: 'translateY(-30%)',
              },
              '40%, 48%': {
                  transform: 'translateY(-40%)',
              },
              '50%, 58%': {
                  transform: 'translateY(-50%)',
              },
              '60%, 68%': {
                  transform: 'translateY(-60%)',
              },
              '70%, 78%': {
                  transform: 'translateY(-70%)',
              },
              '80%, 89%': {
                  transform: 'translateY(-80%)',
              },
              '91%, 100%': {
                  transform: 'translateY(-90%)',
              },
          },                  
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
    },
    plugins: [],
  }
}

