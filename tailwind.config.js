/** @type {import('tailwindcss').Config} */
export default {
  // تحديد الملفات التي سيبحث فيها Tailwind عن أسماء الفئات
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // يشمل جميع ملفات JavaScript و JSX في مجلد src
  ],
  theme: {
    extend: {
      // هنا يمكنك توسيع سمة التصميم الافتراضية
      // على سبيل المثال، إضافة خط مخصص
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      // أو إضافة ألوان مخصصة
      colors: {
        'primary-green': '#22c55e', // مثال على لون أساسي
        'dark-text': '#1f2937',
      },
    },
  },
  plugins: [],
}