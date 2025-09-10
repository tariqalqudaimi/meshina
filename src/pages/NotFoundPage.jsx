import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full py-20">
      <h1 className="text-9xl font-extrabold text-green-600">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mt-4 mb-2">الصفحة غير موجودة</h2>
      <p className="text-gray-500 mb-8">
        عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.
      </p>
      <Link 
        to="/"
        className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition duration-300"
      >
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
};
export default NotFoundPage;