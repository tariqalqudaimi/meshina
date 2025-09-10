import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../components/common/InputField'; // استيراد مكون حقل الإدخال

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // مسح أي أخطاء سابقة

    // 1. التحقق من صحة المدخلات (Client-side validation)
    if (!name || !email || !password || !confirmPassword) {
      setError('الرجاء ملء جميع الحقول.');
      return;
    }
    if (password.length < 6) {
      setError('يجب أن تكون كلمة المرور 6 أحرف على الأقل.');
      return;
    }
    if (password !== confirmPassword) {
      setError('كلمتا المرور غير متطابقتين.');
      return;
    }
    // يمكن إضافة تحقق من تنسيق البريد الإلكتروني هنا

    // 2. محاكاة عملية التسجيل (API call)
    console.log('بيانات التسجيل:', { name, email, password });

    // في مشروع حقيقي، هنا ستجري طلب API:
    // try {
    //   const response = await api.register(name, email, password);
    //   // If success:
    //   localStorage.setItem('token', response.token); 
    //   navigate('/'); // التوجيه إلى الصفحة الرئيسية أو صفحة تأكيد التسجيل
    // } catch (err) {
    //   setError(err.message || 'فشل التسجيل. يرجى المحاولة مرة أخرى.');
    // }

    // محاكاة نجاح التسجيل
    setTimeout(() => {
      alert('تم التسجيل بنجاح! (محاكاة)');
      navigate('/login'); // التوجيه إلى صفحة تسجيل الدخول
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-160px)] px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 md:p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">إنشاء حساب جديد</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <InputField
            label="الاسم الكامل"
            id="name"
            name="name"
            type="text"
            placeholder="ادخل اسمك الكامل"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          />
          <InputField
            label="تأكيد كلمة المرور"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mb-6"
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg w-full transition duration-300 focus:outline-none focus:shadow-outline"
          >
            إنشاء حساب
          </button>
        </form>

        <div className="text-center mt-6 text-gray-600 text-sm">
          لديك حساب بالفعل؟ <Link to="/login" className="font-bold text-green-600 hover:text-green-800">سجل الدخول</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
