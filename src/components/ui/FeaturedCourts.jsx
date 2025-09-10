import React, { useState, useEffect } from 'react';
import { getFeaturedCourts } from '../../api/mockApi';
import CourtCard from './CourtCard';

const FeaturedCourts = () => {
  const [courts, setCourts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourts = async () => {
      try {
        const data = await getFeaturedCourts();
        setCourts(data);
      } catch (error) {
        console.error("Failed to fetch featured courts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourts();
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          ملاعب مميزة
        </h2>
        <p className="text-center text-gray-500 mb-10">
          اكتشف أفضل الملاعب التي يفضلها عملاؤنا
        </p>

        {loading ? (
          <p className="text-center">جاري التحميل...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courts.map(court => (
              <CourtCard key={court.id} court={court} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedCourts;