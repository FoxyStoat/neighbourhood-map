import React from 'react';
import LocationFilter from './LocationFilter';

class ListView extends React.Component {
  render() {
    return (
      <div className="list-view-container">
        <h2>Locations</h2>
          <LocationFilter />
          <ul role="navigation" id="drawer" className="location-list">
            <li className="location">Location</li>
          </ul>
      </div>
    )
  }
}

export default ListView;