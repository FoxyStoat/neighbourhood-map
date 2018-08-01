import React from 'react';
import scriptLoader from 'react-async-script-loader';

class Map extends React.Component {

  componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    const google = window.google;
    const { locations, markers } = this.props;

    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
          const map = new google.maps.Map(this.refs.map, {
            center: {
            lat: 54.58488,
            lng: -0.97010},
            zoom: 15,
            mapTypeId: 'hybrid'
          });
            // Info Window
            const largeInfowindow = new google.maps.InfoWindow();
            // Bounds fit everything we want the user to see
            const bounds = new google.maps.LatLngBounds();
              // Markers
              let locationWithMarkers = [];
              locations.map((location) => {
                const marker = new google.maps.Marker({
                  position: location.position,
                  map: map,
                  title: location.title,
                  id: location.id,
                  animation: google.maps.Animation.DROP,
                });

                // Add click event to open info window when marker is clicked
                marker.addListener('click', function() {
                  populateInfoWindow(this, largeInfowindow);
                });

                // Set marker as a property of each location
                location.marker = marker;
                // Push this new marker property to locations array
                locationWithMarkers.push(location);
                console.log('locations:', location);

                // Extend boundaries of the map for each marker
                bounds.extend(marker.position);
                // Tell the map to fit itself to these bounds
                map.fitBounds(bounds);
              }); //end of locations .map

          // Populate infowindows with info when a marker is clicked.
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
          } // End populate info window function
      }else {
        this.props.onError();
         // Handle error if map doesn't load
      }
    }
  } // End of componentWillReceiveProps

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