import React from 'react';
import './App.css';
// Data of locations in JSON file
import * as data from './Data.json';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

import Map from './Map';
import ListView from './ListView';

class NeighbourhoodMapApp extends React.Component {

  state = {
    // List of locations, from json file data
    locations: data,
    markers: [],
    query: ''
  };

  updateQuery = (query) => {
    this.setState({ query: query });
  }

  render() {
    console.log('Props', this.state);
    console.log('this:', this);
    const { locations, markers, query } = this.state;

    // Sort location list by title
    locations.sort(sortBy('title'));

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Visit Saltburn By The Sea</h1>
        </header>
        <div className="main-container">
          <Map
            locations={locations}
            markers={markers}
          />
          <ListView
            locations={locations}
            markers={markers}
            query={query}
            onChange={this.updateQuery}
          />
        </div>
      </div>
    );
  }
}

export default NeighbourhoodMapApp;
