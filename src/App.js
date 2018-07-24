import React from 'react';
import './App.css';
import MapContainer from './MapContainer';

class NeighbourhoodMapApp extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Visit Saltburn By The Sea</h1>
        </header>
          <MapContainer />
      </div>
    );
  }
}

export default NeighbourhoodMapApp;
