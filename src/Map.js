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
            lat: 54.579,
            lng: -0.981},
            zoom: 15,
            mapTypeId: 'hybrid',
          });
            // Info Window
            const infowindow = new google.maps.InfoWindow();
            // Bounds fit everything we want the user to see
            const bounds = new google.maps.LatLngBounds();
              // Markers
              locations.map((location) => {
                // console.log('locations',locations)
                const marker = new google.maps.Marker({
                  position: location.position,
                  map: map,
                  title: location.title,
                  id: location.id,
                  animation: google.maps.Animation.DROP,
                  img: location.img
                });
                // To add the marker to the map, call setMap();
                marker.setMap(map);

                // Add click event to open info window when marker is clicked
                marker.addListener('click', function() {
                  populateInfoWindow(this, infowindow);
                });

                // Push markers to markers array
                markers.push(marker);
                // Set State of markers
                this.setState({ markers: markers });
                // console.log('locations:', location);
                // console.log(marker);

                // Extend boundaries of the map for each marker
                bounds.extend(marker.position);
                // Tell the map to fit itself to these bounds
                map.fitBounds(bounds);
                // console.log('this', this)
              }); //end of locations .map

          // Populate infowindows with info when a marker is clicked.
          function populateInfoWindow(marker, infowindow) {

            let content =
            `<div>
              <h3><strong>${marker.title}</strong></h3>
              <figure>
                <img id="flickr-img" alt="Saltburn by the sea attraction" src=${marker.img} />
                <figCaption>
                  <a id="flickr-link" href="https://www.flickr.com/groups/1230483@N22/" target="blank" >Image sourced from Flickr</a>
                </figCaption>
              </figure>
            </div>`;
            // console.log(content)
            // Check to make sure the infowindow is not already opened on this marker.
            if (infowindow.marker !== marker) {
              infowindow.marker = marker
            infowindow.setContent(`${content}`)
              infowindow.open(map, marker)
              // Make sure the marker property is cleared if the infowindow is closed.
              infowindow.addListener('closeclick',function(){
                infowindow.setMarker = null;
              })
            }
          } // End populate info window function
      }else {
        // this.props.onError();
         // Need to Handle error if map doesn't load
         document.write('<div><h1>Sorry there was an error loading Google Map</h1><p>Try refresh the bowser or check internet connection!</p></div>');
      }
    }
  } // End of componentWillReceiveProps

  render(){
    return (
      <div id="map" ref="map" role="application">
      loading map...
    </div>
    )
  }
}

export default scriptLoader(
    ["https://maps.googleapis.com/maps/api/js?key=AIzaSyC7CpjmKGXh5uri0CQ2h5wad2l5dWteiJE"]
)(Map)