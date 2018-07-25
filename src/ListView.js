import React from 'react';
import LocationFilter from './LocationFilter';

class ListView extends React.Component {
  render() {
    const { locations } = this.props;
    return (
      <div className="list-view-container">
        <h2>Locations</h2>
          <LocationFilter />

          {/* A view list of location names which displays
          all locations by default */}
          <ul role="navigation" className="location-list">
            {locations.map(location => (
              <li
                key={location.title}
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