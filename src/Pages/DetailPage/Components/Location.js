import React from 'react';
import styled from 'styled-components';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const googleApiKey = process.env.REACT_APP_GOOGLE_API;

const Location = ({ data, google }) => {
  const mapStyle = {
    width: '1040px',
    height: '500px',
    position: 'static',
  };

  const latitude = parseFloat(data.latitude);
  const longitude = parseFloat(data.longitude);

  return (
    <Wrapper>
      <h3>위치</h3>
      <p>{data.address && data.address.slice(0, 6)}</p>
      <MapContainer>
        <Map
          google={google}
          zoom={15}
          initialCenter={{
            lat: latitude,
            lng: longitude,
          }}
          style={mapStyle}
          gestureHandling="greedy"
        >
          <Marker
            position={{
              lat: latitude,
              lng: longitude,
            }}
            icon="/images/Detail/marker.png"
          />
        </Map>
      </MapContainer>
    </Wrapper>
  );
};

export default GoogleApiWrapper({
  apiKey: `${googleApiKey}`,
})(Location);

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 48px 0;
  border-top: 1px solid rgb(221, 221, 221);

  h3,
  p {
    margin-bottom: 24px;
  }
`;

const MapContainer = styled.div`
  > div {
    position: relative !important;
  }
`;
