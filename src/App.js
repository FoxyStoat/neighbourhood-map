import React from 'react';
import './App.css';
// Data of locations in JSON file
import * as data from './Data.json';
import sortBy from 'sort-by';
import escapeRegExp from 'escape-string-regexp';
import Map from './Map';
import ListView from './ListView';

class NeighbourhoodMapApp extends React.Component {

  state = {
    // List of locations, from json file data
    locations: data,
    markers: [],
    query: '',
    queryResults: [] // add markers that match query to this array
  };

  render() {
    console.log('Props', this.state);
    console.log('this:', this);
    const { locations, markers, query, queryResults } = this.state;
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
            queryResults={queryResults}
          />
        </div>
      </div>
    );
  }
}

export default NeighbourhoodMapApp;
