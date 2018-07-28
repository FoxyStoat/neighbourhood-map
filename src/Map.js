import React from 'react';

class Map extends React.Component {
  render(){
    return(
        <div>
            <div ref="map" id="map"></div>
        </div>
    )
  }
}

export default Map;