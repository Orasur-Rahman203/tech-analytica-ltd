/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // Configure your color palette here
      'Neutral':'#f3f4f6',
      'original': '#5f687b',
      'teal': '#143943',
      'slate': '#f8fafc',
      'green': '#22595f',
      'slate1': '#64748b',
      'cayn': '#d1cfcf',
      'White': '#fff',
      'WhiteF': '#5f687b',
      'Slate': '#f8fafc',
      'solutionCart': '#0c4a6e',
      'IconColor': '#F4F6F4',
      'contact':'#f8fafc',
      'logo':'#f0fdf4',
      'our':'#dcfce7'
    }
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes: ["#155e75"]
  } 
}
