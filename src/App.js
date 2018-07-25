import React from 'react';
import './App.css';
import MapContainer from './MapContainer';
import ListView from './ListView';
import sortBy from 'sort-by';

class NeighbourhoodMapApp extends React.Component {

  state = {
    // List of locations, hardcoded
    locations: [
      // Activity Places to visit
      {title: "Cliff Lift", position: {lat: 54.5862, lng: -0.9706}},
      {title: "Valley Gardens", position: {lat: 54.5844, lng: -0.9682}},
      {title: "Italian Gardens", position: {lat: 54.5791, lng: -0.9717}},
      {title: "Pier", position: {lat: 54.5881, lng: -0.9696}},
      {title: "Miniature Railway", position: {lat: 54.5831, lng: -0.9687}},
      {title: "Huntcliff", position: {lat: 54.5857, lng: -0.9625}},
      {title: "The old mortuary", position: {lat: 54.5850, lng: -0.9657}},
      {title: "Coastguard Cottage", position: {lat: 54.5834, lng: -0.9613}},
      {title: "Circle Sculpture aka Charm Bracelet", position: {lat: 54.5853, lng: -0.9244}},
      {title: "Railway Station", position: {lat: 54.5835, lng: -0.9742}},
      {title: "Band Stand", position: {lat: 54.5821, lng: -0.9710}},
      {title: "Cricket Club", position: {lat: 54.5805, lng: -0.9837}},
      {title: "Yoga and Meditation Space", position: {lat: 54.5807, lng: -0.9812}},
      {title: "Valley Gardens Tea Room", position: {lat: 54.5786, lng: -0.9709}},
      {title: "Woodland Center", position: {lat: 54.5782, lng: -0.9715}},
      {title: "Golf Club", position: {lat: 54.5756, lng: -0.9847}},
      // Pubs
      {title: "Alexandra Vaults Pub", position: {lat: 54.5849, lng: -0.9716}},
      {title: "The Ship Inn", position: {lat: 54.5849, lng: -0.9651}},
      // Food & Drink
      {title: "Vista Mar Restaurant", position: {lat: 54.5854, lng: -0.9689}},
      {title: "Coco & Rum Restaurant", position: {lat: 54.5831, lng: -0.9742}},
      {title: "Rapps Cafe", position: {lat: 54.5841, lng: -0.9726}},
      {title: "Oscars Fish And Chips", position: {lat: 54.5864, lng: -0.9720}},
      {title: "The Guns Bar", position: {lat: 54.5841, lng: -0.9728}},
      // Hotels, b&b's
      {title: "Brockley Hall Hotel", position: {lat: 54.5821, lng: -0.9714}},
      {title: "Rushpool Hall Hotel", position: {lat: 54.5757, lng: -0.9717}},
    ]
  }

  render() {
    console.log('Props', this.state);
    const { locations } = this.state;

    locations.sort(sortBy('title'));

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Visit Saltburn By The Sea</h1>
        </header>
        <div className="main-container">
          <MapContainer
            locations={locations}/>
          <ListView
            locations={locations}
          />
        </div>
      </div>
    );
  }
}

export default NeighbourhoodMapApp;
