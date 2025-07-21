import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom Pin Icon
const icon = L.divIcon({
  className: 'custom-pin',
  html: `<svg viewBox="0 0 24 24" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
    <path fill="#DC2626" d="M12 0C7.31 0 3.5 3.81 3.5 8.5c0 7.83 8.5 15.5 8.5 15.5s8.5-7.67 8.5-15.5C20.5 3.81 16.69 0 12 0zm0 13a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"/>
  </svg>`,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36]
});

export default function MapView({ property, onClose }) {
  const position = property?.coordinates || [14.5995, 120.9842]; // Default to Manila

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[90vw] h-[80vh] rounded-lg p-4 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 bg-white w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:text-black shadow-md z-[1000]"
        >
          ×
        </button>
        
        <MapContainer 
          center={position} 
          zoom={13} 
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={icon}>
            <Popup>
              <div>
                <h3 className="font-bold">{property?.title}</h3>
                <p>{property?.location}</p>
                <p className="text-sm text-gray-600">
                  Lat: {position[0].toFixed(4)}, Long: {position[1].toFixed(4)}
                </p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}