export default function PropertyCard({ property, onView }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:scale-[1.02] transition-all">
      <img
        src={property.image}
        alt={property.title}
        className="rounded-lg w-full h-40 object-cover"
      />
      <h2 className="text-xl font-bold mt-2">{property.title}</h2>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-green-600 font-semibold">₱{property.price.toLocaleString()}</p>
      <button
        onClick={() => onView(property)}
        className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        View Details
      </button>
    </div>
  );
}
