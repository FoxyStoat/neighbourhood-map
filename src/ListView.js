import React from 'react';
import LocationFilter from './LocationFilter';

function ListView (props) {
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

export default ListView;