import React from 'react';
import scriptLoader from 'react-async-script-loader';

class Map extends React.Component {

  componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    const google = window.google;
    const { locations, markers } = this.props;
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
          let map = new google.maps.Map(this.refs.map, {
            center: {
            lat: 54.58488,
            lng: -0.97010},
            zoom: 15,
            mapTypeId: 'hybrid'
          });
            // Info Window
            let largeInfowindow = new google.maps.InfoWindow();
              // Markers
              locations.map((location) => {
                let marker = new google.maps.Marker({
                  position: location.position,
                  map: map,
                  title: location.title,
                  id: location.id,
                  animation: google.maps.Animation.DROP,
                });
                // Push each marker to markers array
                markers.push(marker);
                console.log('marker:', marker);
                // Add click event to open info window when marker is clicked
                marker.addListener('click', function() {
                  populateInfoWindow(this, largeInfowindow);
                });
              });

          // Populate infowindows when a marker is clicked.
          function populateInfoWindow(marker, infowindow) {
            // Check to make sure the infowindow is not already opened on this marker.
            if (infowindow.marker !== marker) {
              infowindow.marker = marker;
              infowindow.setContent('<div>' + marker.title + '</div>');
              infowindow.open(map, marker);
              // Make sure the marker property is cleared if the infowindow is closed.
              infowindow.addListener('closeclick',function(){
                infowindow.setMarker = null;
              });
            }
          }
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