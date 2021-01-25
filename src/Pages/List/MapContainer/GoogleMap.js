import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { data } from '../Data';

const apiKey = process.env.REACT_APP_API_KEY;
const mapStyles = {
  position: 'fixed',
  width: '50vw',
  height: 'calc(100vh - 80px',
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
      lat: 37.511,
      lng: 127.0213,
    },
    zoom: 14,
  };

  toggleSelected = id => {
    this.state.selected === Number(id)
      ? this.setState({
          selected: 0,
        })
      : this.setState({
          selected: id,
        });
  };

  render() {
    const { selected, showDetail } = this.state;

    return (
      <div style={mapStyles}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {data.map((marker, idx) => {
            const price = `￦${Number(marker.price).toLocaleString()}`;

            return (
              <Marker
                key={marker.id}
                id={marker.id}
                lat={marker.lat}
                lng={marker.lng}
                price={price}
                data={data[idx]}
                selected={selected}
                showDetail={showDetail}
                toggleSelected={this.toggleSelected}
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
