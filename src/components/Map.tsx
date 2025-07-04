
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { X } from 'lucide-react';

interface MapProps {
  isOpen: boolean;
  onClose: () => void;
}

const Map = ({ isOpen, onClose }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!isOpen || !mapContainer.current) return;

    // Initialize map - Note: Replace with your Mapbox public token
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [71.6726, 40.9983], // Namangan coordinates
      zoom: 15,
    });

    // Add marker for Al-Khorazmiy International School
    new mapboxgl.Marker({ color: '#14b8a6' })
      .setLngLat([71.6726, 40.9983])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML('<h3>Al-Khorazmiy International School</h3><p>Namangan sh., Lola dahasi, Janubiy aylanma yo\'li, 17A</p>')
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Cleanup
    return () => {
      map.current?.remove();
    };
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
      </div>
    </div>
  );
};

export default Map;
