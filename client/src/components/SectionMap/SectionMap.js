import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 48.46904525263508,
  lng: 35.04152599250049,
};

function SectionMap() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCRy8zn8vsL2BXF0gKG3YYthsl3p99CDcM"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      />
    </LoadScript>
  );
}

export default SectionMap;
