// App.js
import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Sidebar from './sideBar';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Define the tutors with name, coordinates, and color
  const tutors = [
    { name: 'Oliver Smith', lat: 51.2776, lng: 1.0775, color: 'red' },
    { name: 'Sophia Brown', lat: 51.2790, lng: 1.0750, color: 'teal' },
    { name: 'Mia Davis', lat: 51.2800, lng: 1.0800, color: 'yellow' }
  ];

  // Handle click on map to toggle popup
  const handleMapClick = (event) => {
    const { lngLat } = event;
    setSelectedLocation(selectedLocation ? null : { lat: lngLat.lat, lng: lngLat.lng });
  };

  // Handle click on tutor to show popup at their location
  const handleTutorClick = (tutor) => {
    setSelectedLocation(selectedLocation && selectedLocation.name === tutor.name ? null : tutor);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar tutors={tutors} onTutorClick={handleTutorClick} />
      <Map
        initialViewState={{
          latitude: 51.2776,
          longitude: 1.0775,
          zoom: 13
        }}
        style={{ width: '80vw', height: '100vh' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken="pk.eyJ1IjoibWlndWVsY29yb25lbDA0MDciLCJhIjoiY20xa3B6ZW10MDBxNDJscTQ0azhtZW5vZSJ9.miH9gCfTqaR67c7frmMULw"
        onClick={handleMapClick}
      >
        {/* Render a marker for each tutor */}
        {tutors.map((tutor) => (
          <Marker
            key={tutor.name}
            latitude={tutor.lat}
            longitude={tutor.lng}
            color={tutor.color}
            onClick={(e) => {
              e.originalEvent.stopPropagation(); // Prevent map click event from firing
              handleTutorClick(tutor);
            }}
          />
        ))}

        {/* Display popup at selected location */}
        {selectedLocation && (
          <Popup
            latitude={selectedLocation.lat}
            longitude={selectedLocation.lng}
            onClose={() => setSelectedLocation(null)}
            anchor="top"
          >
            <div>
              <h4>{selectedLocation.name || 'Coordinates'}</h4>
              <p>Latitude: {selectedLocation.lat.toFixed(4)}</p>
              <p>Longitude: {selectedLocation.lng.toFixed(4)}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default App;
