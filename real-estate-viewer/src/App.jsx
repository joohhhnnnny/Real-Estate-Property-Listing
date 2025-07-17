import { useState } from "react";
import properties from "./data/properties";
import PropertyCard from "./components/PropertyCard";
import PropertyModal from "./components/PropertyModal";

function App() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase()) ||
    property.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🏡 Real Estate Listings</h1>
      
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by title or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} onView={setSelected} />
        ))}
      </div>

      <PropertyModal property={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default App;
