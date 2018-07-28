import React from 'react';
import './App.css';
import sortBy from 'sort-by';
import scriptLoader from 'react-async-script-loader';
// Data of locations in JSON file
import * as data from './Data.json';
import Map from './Map';
import ListView from './ListView';

class NeighbourhoodMapApp extends React.Component {

  state = {
    // List of locations, from json file data
    locations: data,
    markers: [],
    map: {}
  }

  // react-async-script-loader
  componentWillReceiveProps({isScriptLoadSucceed}){
    if (isScriptLoadSucceed) {
      const map = new window.google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {
          lat: 54.58488,
          lng: -0.97010},
          mapTypeId: 'hybrid'
      });
    }else{
      this.props.onError();
    }
  }

  render() {
    console.log('Props', this.state);
    console.log('this:', this);
    const { locations } = this.state;
    const { google } = this.props;
    // Sort location list by title
    locations.sort(sortBy('title'));

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Visit Saltburn By The Sea</h1>
        </header>
        <div className="main-container">
          <Map />
          <ListView
            locations={locations}
          />
        </div>
      </div>
    );
  }
}

export default scriptLoader(
  ["https://maps.googleapis.com/maps/api/js?key=AIzaSyC7CpjmKGXh5uri0CQ2h5wad2l5dWteiJE"]
)(NeighbourhoodMapApp);
