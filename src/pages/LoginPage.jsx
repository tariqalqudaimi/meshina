import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../components/common/InputField'; // استيراد مكون حقل الإدخال

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // مسح أي أخطاء سابقة

    // 1. التحقق من صحة المدخلات (Client-side validation)
    if (!email || !password) {
      setError('الرجاء إدخال البريد الإلكتروني وكلمة المرور.');
      return;
    }
    // يمكن إضافة تحقق من تنسيق البريد الإلكتروني هنا

    // 2. محاكاة عملية تسجيل الدخول (API call)
    console.log('بيانات تسجيل الدخول:', { email, password });

    // في مشروع حقيقي، هنا ستجري طلب API:
    // try {
    //   const response = await api.login(email, password);
    //   // If success:
    //   localStorage.setItem('token', response.token); // تخزين رمز المصادقة
    //   navigate('/'); // التوجيه إلى الصفحة الرئيسية
    // } catch (err) {
    //   setError(err.message || 'فشل تسجيل الدخول. يرجى التحقق من بياناتك.');
    // }

    // محاكاة نجاح تسجيل الدخول بعد ثواني قليلة
    setTimeout(() => {
      alert('تم تسجيل الدخول بنجاح! (محاكاة)');
      navigate('/'); // التوجيه إلى الصفحة الرئيسية
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-160px)] px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 md:p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">تسجيل الدخول</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <InputField
            label="البريد الإلكتروني"
            id="email"
            name="email"
            type="email"
            placeholder="ادخل بريدك الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="كلمة المرور"
            id="password"
            name="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-6" // مسافة إضافية قبل الزر
          />

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="ml-2 rounded text-green-500 focus:ring-green-500" />
              تذكرني
            </label>
            <Link to="/forgot-password" className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800">
              نسيت كلمة المرور؟
            </Link>
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg w-full transition duration-300 focus:outline-none focus:shadow-outline"
          >
            تسجيل الدخول
          </button>
        </form>

        <div className="text-center mt-6 text-gray-600 text-sm">
          ليس لديك حساب؟ <Link to="/register" className="font-bold text-green-600 hover:text-green-800">سجل الآن</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;