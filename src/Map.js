import React from 'react';
import scriptLoader from 'react-async-script-loader';

class Map extends React.Component{
  constructor(props) {
      super(props);
      this.map = null;
  }


  componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    const google = window.google;
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
          this.map = new window.google.maps.Map(this.refs.map, {
            center: {
            lat: 54.58488,
            lng: -0.97010},
            zoom: 15,
            mapTypeId: 'hybrid'
          });

          let lift = {"lat": 54.5862, "lng": -0.9706};
          let marker = new google.maps.Marker({
            position: lift,
            map: this.map,
            title: "Cliff Lift"
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