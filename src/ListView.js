import React from 'react';
import LocationFilter from './LocationFilter';

class ListView extends React.Component {

  render() {
    const { locations, query, updateQuery, showingLocations, locationItemClick } = this.props;

    return (
      <div className="list-view-container">
          <LocationFilter
            locations={locations}
            query={query}
            updateQuery={updateQuery}
          />

          {/* A view list of location names which displays
          all locations by default */}
          <ul role="navigation" className="location-list">
            {showingLocations.map((location) => (
              <li
                key={location.id}
                onClick={event => locationItemClick(location)} // On location click in the listview
                className="location">
                <a>
                  {location.title}
                </a>
              </li>
            ))}
          </ul>
      </div>
    )
  }
}

export default ListView;