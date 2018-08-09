import React from 'react';
import './App.css';
// Data of locations in JSON file
import * as data from './Data.json';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

import Map from './Map';
import ListView from './ListView';

class NeighbourhoodMapApp extends React.Component {

  state = {
    // List of locations, from json file data
    locations: data,
    query: '',
    markers: [],
    imagesData: [],
  };

  // Fetch data (images) from Flickr API
  componentDidMount() {
    const myKey = 'f68095d9996784e5a817d91ba7e0a79d';

    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${myKey}&tags=saltburn-by-the-sea&woe_id=33906&per_page=23&page=1&format=json&nojsoncallback=1`)
    .then((response) => response.json())
    .then((images) => {
      // console.log(JSON.stringify(images));
      // console.log("image data loaded ok");
      this.setState({ imagesData: images });
    });
  }

  // Update the state of query
  updateQuery = (query) => {
    this.setState({ query: query });
  }

  /*
  * On location click of the list view display unique information about
  * that clicked location and animate the associated marker
  */
  locationItemClick = (locationItem) => {
    // Filter over markers array and compare the title to the clicked location list title
    let selectedLocation = this.state.markers.filter((marker)=> marker.title === locationItem.title)
    window.google.maps.event.trigger(selectedLocation[0], 'click')
      // Animate the marker
      selectedLocation[0].setAnimation(window.google.maps.Animation.BOUNCE)
      setTimeout(function(){
        // turn off the animation after 1 second
        selectedLocation[0].setAnimation(null);
      }, 1000);
    // console.log(locationItem);
  }

  /*
  * A11y, to be able to press enter on location list
  * it is tied to the directly above function "locationItemClick"
  */
    handleKeyPress = (target, item, event) => {
    if(item.charCode === 13){
      this.locationItemClick(target, event);
    }
  }

  render() {
    // console.log('Props', this.state);
    // console.log('this:', this);
    const { locations, query, markers, imagesData } = this.state;

    function makeVisible () {
      // else show the locations list and markers again
      for (let i = 0; i < locations.length; i++) {
        // show the list of original locations
        showingLocations = locations;
          if (markers[i]) {
            // make markers visible
            markers[i].setVisible(true);
          }
      }
    }

    // Filter our locations based of a certain pattern
    let showingLocations = [];
      // If there is a specific query
    if (query) {
      // If there are any special characters in our query
      for (let i = 0; i < locations.length; i++) {
        // escape them and i = ignore case
        const match = new RegExp(escapeRegExp(query), 'i');
        // Iterate over markers array and set it equal to showinglocations
        showingLocations = markers.filter((m) => match.test(m.title));
        // console.log('markers', markers);
        // console.log('showingLocations', showingLocations);
        // If markers title is included in the query
        if (markers[i].title.toLowerCase().includes(query.toLowerCase())){
          // set those markers to show
          markers[i].setVisible(true);
        }else {
          // set the other markers to hide
          markers[i].setVisible(false);
        }
      } //End of loop
      }else {
        makeVisible();
    } //End of if (query) statement

    // Sort location list by title
    locations.sort(sortBy('title'));

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Visit Saltburn By The Sea</h1>
        </header>
        <div className="main-container">
          <Map
            locations={locations}
            markers={markers}
            locationItemClick={this.locationItemClick}
            locationImages={imagesData} //Flikr Images data array
          />
          <ListView
            locations={locations}
            query={query}
            updateQuery={this.updateQuery}
            showingLocations={showingLocations}
            locationItemClick={this.locationItemClick}
            onKeyPress={this.handleKeyPress} //a11y on enter key press of location
          />
        </div>
      </div>
    );
  }
}

export default NeighbourhoodMapApp;
