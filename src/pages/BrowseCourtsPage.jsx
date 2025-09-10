import React, { useState, useEffect } from 'react';
import { getAllCourts } from '../api/mockApi';
import CourtCard from '../components/ui/CourtCard';

const BrowseCourtsPage = () => {
  const [courts, setCourts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourts = async () => {
      setLoading(true);
      const data = await getAllCourts();
      setCourts(data);
      setLoading(false);
    };
    fetchCourts();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">تصفح جميع الملاعب</h1>
      <p className="text-center text-gray-500 mb-10">ابحث عن الملعب المثالي لمباراتك القادمة.</p>
      
      {loading ? (
        <p className="text-center">جاري تحميل الملاعب...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courts.map(court => (
            <CourtCard key={court.id} court={court} />
          ))}
        </div>
      )}
    </div>
  );
};
export default BrowseCourtsPage;