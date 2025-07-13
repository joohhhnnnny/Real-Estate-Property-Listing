export default function PropertyModal({ property, onClose }) {
  if (!property) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white max-w-md w-full rounded-lg p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 text-2xl hover:text-black"
        >
          &times;
        </button>
        <img src={property.image} alt={property.title} className="rounded-lg mb-4" />
        <h2 className="text-2xl font-bold">{property.title}</h2>
        <p className="text-gray-600 mb-2">{property.location}</p>
        <p className="text-green-600 font-semibold mb-4">₱{property.price.toLocaleString()}</p>
        <p>{property.description}</p>
      </div>
    </div>
  );
}
