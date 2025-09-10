import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCourtById } from '../api/mockApi';

const CourtDetailsPage = () => {
  const { courtId } = useParams(); // للحصول على ID من الرابط
  const [court, setCourt] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourt = async () => {
      setLoading(true);
      const data = await getCourtById(courtId);
      setCourt(data);
      setLoading(false);
    };
    fetchCourt();
  }, [courtId]);

  if (loading) {
    return <p className="text-center py-20">جاري تحميل تفاصيل الملعب...</p>;
  }

  if (!court) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">الملعب غير موجود</h2>
        <Link to="/courts" className="text-green-600 hover:underline">العودة إلى قائمة الملاعب</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <img src={court.image} alt={court.name} className="w-full h-96 object-cover" />
        <div className="p-8 md:p-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{court.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{court.location}</p>
          <p className="text-gray-700 leading-relaxed mb-8">{court.description}</p>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">المميزات</h3>
            <ul className="flex flex-wrap gap-4">
              {court.amenities.map((amenity, index) => (
                <li key={index} className="bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-3xl font-bold text-green-600 mb-4 md:mb-0">
              {court.price} <span className="text-lg font-normal text-gray-600">ريال/ساعة</span>
            </p>
            <button className="w-full md:w-auto bg-green-500 text-white font-bold text-lg py-3 px-10 rounded-lg hover:bg-green-600 transition duration-300">
              احجز الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourtDetailsPage;