import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
    render() {

    const { google, locations } = this.props;
    // console.log('Props', this.props);

    const style = {
      width: '100vw',
      height: '60vh',
      position: 'relative'
    }

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <div id="map-container" role="application" style={style}>
        <Map
          google={google}
          initialCenter={{
            lat: 54.58488,
            lng: -0.97010
          }}
          zoom={15}
          style = {style}
          mapType = 'hybrid'>

          {/* Map Markers - child of Map */}
          {locations.map(location => (
            <Marker
              key={location.title}
              title={location.title}
              position={location.position}
              animation={google.maps.Animation.DROP}
            />
          ))}
          {/* InfoWindow - child of Map */}
          {/* <InfoWindow
            title={locations.title}
          >
          </InfoWindow> */}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC7CpjmKGXh5uri0CQ2h5wad2l5dWteiJE'
})(MapContainer);