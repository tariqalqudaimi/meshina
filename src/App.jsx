import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import BrowseCourtsPage from './pages/BrowseCourtsPage';
import CourtDetailsPage from './pages/CourtDetailsPage';
import LoginPage from './pages/LoginPage';       // <--- استيراد صفحة تسجيل الدخول
import RegisterPage from './pages/RegisterPage'; // <--- استيراد صفحة التسجيل
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courts" element={<BrowseCourtsPage />} />
          <Route path="/court/:courtId" element={<CourtDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />       {/* <--- المسار الجديد */}
          <Route path="/register" element={<RegisterPage />} /> {/* <--- المسار الجديد */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;