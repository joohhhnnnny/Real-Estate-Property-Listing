import { useState } from "react";
import properties from "./data/properties";
import PropertyCard from "./components/PropertyCard";
import PropertyModal from "./components/PropertyModal";
import VideoBackground from "./components/VideoBackground";

function App() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase()) ||
    property.location.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastProperty = currentPage * itemsPerPage;
  const indexOfFirstProperty = indexOfLastProperty - itemsPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  return (
    <>
      <VideoBackground />
      <div className="min-h-screen bg-transparent p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">🏡 Real Estate Listings</h1>
        
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search by title or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProperties.map((property) => (
            <PropertyCard key={property.id} property={property} onView={setSelected} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="join">
            <button 
              className="join-item btn"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              «
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`join-item btn ${currentPage === index + 1 ? 'btn-active' : ''}`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button 
              className="join-item btn"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </div>
        </div>
      </div>
      <PropertyModal property={selected} onClose={() => setSelected(null)} />
    </>
  );
}

export default App;
