/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        animation: {
          'text-slide': 'text-slide 25s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        },
        keyframes : {
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

