import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {

    // List of our locations, hardcoded
    const locations = [
      {title: "Cliff Lift", location: {lat: 54.5862, lng: -0.9706}},
      {title: "Vally Gardens", location: {lat: 54.5844, lng: -0.9682}},
      {title: "Pier", location: {lat: 54.5881, lng: -0.9696}},
      {title: "Miniature Railway", location: {lat: 54.5831, lng: -0.9687}},
      {title: "Huntcliff", location: {lat: 54.588333, lng:  	-0.935556}},
      {title: "The old mortuary", location: {lat: 54.575821, lng:  -0.951769}},
      {title: "Circle Sculpture aka Charm Bracelet", location: {lat: 54.575821, lng:  -0.951769}},
    ];

    const style = {
      width: '100vw',
      height: '60vh',
      position: 'relative'
    }

    return (
      <div id="map-container" role="application" style={style}>
        <Map
          google={this.props.google}
          initialCenter={{
            lat: 54.58437,
            lng: -0.97167
          }}
          zoom={15}
          style = {style}
          mapType = 'hybrid'
        ></Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC7CpjmKGXh5uri0CQ2h5wad2l5dWteiJE'
})(MapContainer);