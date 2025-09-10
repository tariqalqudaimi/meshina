import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-600">
          MESHINA<span className="text-gray-800">.com</span>
        </Link>
        <ul className="hidden md:flex items-center space-x-8">
          <li><Link to="/" className="text-gray-600 hover:text-green-600 font-medium">الرئيسية</Link></li>
          <li><Link to="/courts" className="text-gray-600 hover:text-green-600 font-medium">تصفح الملاعب</Link></li>
          <li><a href="#" className="text-gray-600 hover:text-green-600 font-medium">حجوزاتي</a></li>
        </ul>
        {/* تغيير الزر ليكون Link يوجه لصفحة تسجيل الدخول */}
        <Link 
          to="/login" 
          className="bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-600 transition duration-300"
        >
          تسجيل الدخول
        </Link>
      </nav>
    </header>
  );
};
export default Header;