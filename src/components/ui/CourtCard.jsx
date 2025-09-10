import React from 'react';
import { Link } from 'react-router-dom';

const CourtCard = ({ court }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <img src={court.image} alt={court.name} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{court.name}</h3>
        <p className="text-gray-600 mb-4">{court.location}</p>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">{court.price} ريال/ساعة</span>
          <Link 
            to={`/court/${court.id}`}
            className="bg-green-500 text-white text-center font-semibold py-2 px-5 rounded-lg hover:bg-green-600 transition duration-300"
          >
            التفاصيل
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CourtCard;