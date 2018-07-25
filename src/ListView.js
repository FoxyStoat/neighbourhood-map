import React from 'react';

class ListView extends React.Component {
  render() {
    return (
      <div className="list-view-container">
        <ul role="navigation" id="drawer" className="location-list">
          <li className="location">Location</li>
          <li className="location">Location</li>
          <li className="location">Location</li>
          <li className="location">Location</li>
          <li className="location">Location</li>
        </ul>
      </div>
    )
  };
}

export default ListView;