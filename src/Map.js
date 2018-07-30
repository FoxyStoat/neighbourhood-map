import React from 'react';
import scriptLoader from 'react-async-script-loader';

class Map extends React.Component {

  componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    const google = window.google;
    const { locations, markers } = this.props;
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
          this.map = new google.maps.Map(this.refs.map, {
            center: {
            lat: 54.58488,
            lng: -0.97010},
            zoom: 15,
            mapTypeId: 'hybrid'
          });
            // Info Window
            let infoWindow = new google.maps.InfoWindow({
              content: 'Content'
            });
            // Markers
            locations.map((location) => {
              let marker = new google.maps.Marker({
                position: location.position,
                map: this.map,
                title: location.title,
                id: location.id,
                animation: google.maps.Animation.DROP,
              });
              // Push each marker to markers array
              markers.push(marker);
              console.log('marker:', marker);
              // Add click event to open info window when marker is clicked
              marker.addListener('click', function() {
                infoWindow.open(this.map, marker);
              });
            });
        }else {
          this.props.onError();
      }
    }
  }
  render(){
    return (
    <div>
      <div id="map" ref="map"></div>
    </div>
    )
  }
}

export default scriptLoader(
    ["https://maps.googleapis.com/maps/api/js?key=AIzaSyC7CpjmKGXh5uri0CQ2h5wad2l5dWteiJE"]
)(Map)