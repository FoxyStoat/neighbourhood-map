import React from 'react';
import LocationFilter from './LocationFilter';


class ListView extends React.Component {
  render() {

    const { locations, markers, query, updateQuery, showingLocations } = this.props;

    return (
      <div className="list-view-container">
          <LocationFilter
            locations={locations}
            markers={markers}
            query={query}
            updateQuery={updateQuery}
          />

          {/* A view list of location names which displays
          all locations by default */}
          <ul role="navigation" className="location-list">
            {showingLocations.map(location => (
              <li
                key={location.id}
                className="location">
                  {location.title}
              </li>
            ))}
          </ul>
      </div>
    )
  }
}

export default ListView;