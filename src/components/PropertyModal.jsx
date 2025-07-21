import { useState } from 'react';
import MapView from './MapView';

export default function PropertyModal({ property, onClose }) {
  const [showMap, setShowMap] = useState(false);

  if (!property) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white max-w-md w-full rounded-lg p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 bg-white w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:text-black shadow-md"
        >
          ×
        </button>
        <img src={property.image} alt={property.title} className="rounded-lg mb-4" />
        <h2 className="text-2xl font-bold">{property.title}</h2>
        <p className="text-gray-600 mb-2">{property.location}</p>
        <p className="text-green-600 font-semibold mb-4">₱{property.price.toLocaleString()}</p>
        <div className="pr-12 mb-8"> {/* Added padding-right and margin-bottom */}
          <p className="text-gray-700">{property.description}</p>
        </div>
        
        <button
          onClick={() => setShowMap(true)}
          className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </button>
      </div>
      {showMap && <MapView property={property} onClose={() => setShowMap(false)} />}
    </div>
  );
}
