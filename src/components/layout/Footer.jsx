import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // لجلب السنة الحالية تلقائيًا

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* القسم الأول: معلومات عن الموقع */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-2xl font-bold text-white mb-4">
              Mala3eb<span className="text-green-500">.com</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              منصتك الأولى لإيجاد وحجز الملاعب الرياضية في منطقتك. مهمتنا هي تسهيل الوصول إلى الرياضة للجميع.
            </p>
          </div>

          {/* القسم الثاني: روابط سريعة */}
          <div>
            <h4 className="text-lg font-semibold text-white uppercase tracking-wider mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">تصفح الملاعب</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">كيف يعمل الموقع؟</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">انضم كمستضيف</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* القسم الثالث: قانوني */}
          <div>
            <h4 className="text-lg font-semibold text-white uppercase tracking-wider mb-4">قانوني</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">شروط الاستخدام</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">اتصل بنا</a></li>
            </ul>
          </div>

          {/* القسم الرابع: تابعنا */}
          <div>
            <h4 className="text-lg font-semibold text-white uppercase tracking-wider mb-4">تابعنا</h4>
            <div className="flex space-x-4">
              {/* أيقونة فيسبوك */}
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
                </svg>
              </a>
              {/* أيقونة تويتر */}
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.296 1.634 4.208 3.803 4.649-.6.164-1.242.223-1.879.182.614 1.951 2.423 3.37 4.604 3.417-1.733 1.354-3.918 2.165-6.29 2.165-.41 0-.814-.024-1.21-.073 2.24 1.448 4.903 2.294 7.733 2.294 9.27 0 14.344-7.69 14.344-14.344 0-.218-.005-.435-.014-.652.984-.71 1.835-1.598 2.52-2.625z" />
                </svg>
              </a>
              {/* أيقونة انستغرام */}
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.667 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.667-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* شريط الحقوق السفلي */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {currentYear} Malaeb.com. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;