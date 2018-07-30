import React from 'react';

class LocationFilter extends React.Component {
  render() {
    return (
      <div className="location-filter-container">
        <h2>Locations List</h2>
        <form role="search">
          <input
            role="search"
            aria-label="search text"
            className="location-input"
            type="text"
            placeholder="Filter Locations...">
          </input>
        </form>
      </div>
    )
  }
}

export default LocationFilter;