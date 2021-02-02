import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
// import { data } from '../Data';
// import { data, results } from '../Data';

const apiKey = process.env.REACT_APP_API_KEY;
const mapStyles = {
  position: 'sticky',
  width: '50vw',
  height: '100vh',
  gestureHandling: 'greedy',
};

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      showDetail: 0,
    };
  }

  static defaultProps = {
    center: {
      // lat: 37.511,
      // lng: 127.0213,
      lat: 37.457774,
      lng: 126.902894,
    },
    zoom: 14,
  };

  toggleSelected = id => {
    this.state.selected === id
      ? this.setState({
          selected: 0,
        })
      : this.setState({
          selected: id,
        });
  };

  render() {
    const { selected, showDetail } = this.state;
    const { goToDetail, hoveredId, roomsData } = this.props;

    return (
      <div style={mapStyles}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={{
            gestureHandling: 'greedy',
            zoomControlOptions: { position: 7 },
          }}
        >
          {roomsData.map((marker, idx) => {
            const price = `￦${Number(marker.price * 1).toLocaleString()}`;
            return (
              <Marker
                key={marker.id}
                id={marker.id}
                lat={marker.latitude}
                lng={marker.longitude}
                price={price}
                data={roomsData[idx]}
                selected={selected}
                showDetail={showDetail}
                toggleSelected={this.toggleSelected}
                goToDetail={goToDetail}
                hoveredId={hoveredId}
              />
            );
          })}

          <Marker />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
