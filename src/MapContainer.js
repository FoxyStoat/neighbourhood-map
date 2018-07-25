import React from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    const style = {
      width: '70%',
      height: '100vh',
    }

    return (
      <div id="map-container" role="application">
        <Map
          google={this.props.google}
          initialCenter={{
            lat: 54.58237,
            lng: -0.97367
          }}
          zoom={15}
          style = {style}
        ></Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC7CpjmKGXh5uri0CQ2h5wad2l5dWteiJE'
})(MapContainer);