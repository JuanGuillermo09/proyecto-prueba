/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/**/*.{html,ts}",  // Rutas de los archivos de tu aplicación Angular
    "./libs/**/*.{html,ts}",  // Rutas de las librerías si las tienes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}