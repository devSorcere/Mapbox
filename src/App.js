// App.js
import React from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Sidebar from 'Sidebar';

function App() {
  const [selectedLocation, setSelectedLocation] = React.useState(null);

  const handleMapClick = (event) => {
    // Get the clicked coordinates
    const { lngLat } = event;
    setSelectedLocation({
      lat: lngLat.lat,
      lng: lngLat.lng
    });
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Map
        initialViewState={{
          latitude: 51.2776,
          longitude: 1.0775,
          zoom: 13
        }}
        style={{ width: '80vw', height: '100vh' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken="pk.eyJ1IjoibWlndWVsY29yb25lbDA0MDciLCJhIjoiY20xa3B6ZW10MDBxNDJscTQ0azhtZW5vZSJ9.miH9gCfTqaR67c7frmMULw"
        onClick={handleMapClick} // Add the onClick event handler here
      >
        {/* Sample marker */}
        <Marker latitude={51.2776} longitude={1.0775} color="red" />

        {/* Display popup at clicked location */}
        {selectedLocation && (
          <Popup
            latitude={selectedLocation.lat}
            longitude={selectedLocation.lng}
            onClose={() => setSelectedLocation(null)}
            anchor="top"
          >
            <div>
              <h4>Coordinates</h4>
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
