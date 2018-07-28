import React from 'react';
import scriptLoader from 'react-async-script-loader';

class Map extends React.Component{
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps({isScriptLoadSucceed}){
        if (isScriptLoadSucceed) {
            var markers = [];

            var map = new window.google.maps.Map(document.getElementById('map'), {
              zoom: 15,
              center: {
              lat: 54.58488,
              lng: -0.97010},
              mapTypeId: 'hybrid'
            });
        }
        else{
            alert("script not loaded");
        }
    }

    render(){
        return(
            <div>
                <div id="map"></div>
            </div>
        )
    }
}

export default scriptLoader(
    ["https://maps.googleapis.com/maps/api/js?key=AIzaSyC7CpjmKGXh5uri0CQ2h5wad2l5dWteiJE"]
)(Map)