
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface MapProps {
  isOpen: boolean;
  onClose: () => void;
}

const Map = ({ isOpen, onClose }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !mapContainer.current) return;

    // Check if Google Maps is loaded
    if (typeof window.google === 'undefined') {
      console.log('Google Maps API not loaded yet');
      return;
    }

    // School address coordinates (approximate location in Namangan)
    const schoolLocation = { lat: 40.9983, lng: 71.6726 };
    
    // Create the map
    const map = new window.google.maps.Map(mapContainer.current, {
      zoom: 16,
      center: schoolLocation,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
    });

    // Add marker for the school
    const marker = new window.google.maps.Marker({
      position: schoolLocation,
      map: map,
      title: 'Al-Khorazmiy International School',
    });

    // Add info window
    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 8px;">
          <h3 style="margin: 0 0 8px 0; font-weight: bold;">Al-Khorazmiy International School</h3>
          <p style="margin: 0; color: #666;">Namangan sh., Lola dahasi,<br>Janubiy aylanma yo'li, 17A<br>Uzbekistan</p>
        </div>
      `,
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });

    // Auto-open info window
    infoWindow.open(map, marker);

  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-96 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
        <div ref={mapContainer} className="w-full h-full rounded-lg" />
        
        {/* Google Maps API not loaded message */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg" id="map-placeholder">
          <div className="text-center p-8">
            <h3 className="text-lg font-semibold mb-2">Al-Khorazmiy International School</h3>
            <p className="text-gray-600 mb-4">
              Namangan sh., Lola dahasi,<br />
              Janubiy aylanma yo'li, 17A<br />
              Uzbekistan
            </p>
            <p className="text-sm text-gray-500">
              To enable interactive map, please add Google Maps API key
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
