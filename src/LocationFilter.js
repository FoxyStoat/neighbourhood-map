import React from 'react';

class LocationFilter extends React.Component {

  render() {
    const { query, updateQuery } = this.props;

    return (
      <div className="location-filter-container">
        <h2>Locations List</h2>
        {JSON.stringify(query)}
        <form

          role="search">
          <input
            role="search"
            aria-label="search text"
            className="location-search"
            type="text"
            placeholder="Filter Locations..."
            value={query} //value will always be whatever state query is
            onChange={(event) => updateQuery(event.target.value)} //when input field changes, update our query
          />
        </form>
      </div>
    )
  }
}

export default LocationFilter;