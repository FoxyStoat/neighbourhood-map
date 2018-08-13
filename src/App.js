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
    locationImages: [],
  }

  componentWillMount = () => {
    this.fetchImages();
  }

  // Fetch data (images from Flickr API)
  fetchImages = () => {
    const myKey = 'f68095d9996784e5a817d91ba7e0a79d';

    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${myKey}&tags=saltburn-by-the-sea&woe_id=33906&per_page=23&page=1&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then((jData) => this.addImages(jData))
      // catch errors in error var and call requestError()
      .catch(error => this.requestError(error))
  }

  // To display the images with the fetched data
  addImages = (jData) => {
    let srcPath = jData.photos.photo.map((pic) => {
      // console.log(JSON.stringify(jData))
      // src path location of the image
      return srcPath = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
    }) //End .map
    // set the state - pushes just the photo srcPath url to locationImages
    this.setState({ locationImages: srcPath });
  } //End addImages

  // From the catch error in fetch - object of the request that failed
  requestError = (error) => {
    console.log(error)
    alert('Sorry there was an issue getting data from Flickr API!  Please try to refresh your browser, or try later.');
  };

  // Update the state of query
  updateQuery = (query) => {
    this.setState({ query: query });
  };

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
    const { locations, query, markers, locationImages } = this.state;

  /*
  * Add each url from locationImages as a property to locations
  * so I can access the url in map component
  */
    locationImages.map((url, index) => {
      markers[index].img = url;
    })

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

/* RESOURCES
  Apart from the course lessons I also used the following resources for extra help throughout this project:

  // Async map script
  * https://www.npmjs.com/package/react-async-script-loader
  * https://stackoverflow.com/questions/41709765/how-to-load-the-google-maps-api-script-in-my-react-app-only-when-it-is-require
  * https://stackoverflow.com/questions/43714895/google-is-not-defined-in-react-app-using-create-react-app

  //Help with loading in importing data from a JSON file
  * http://4dev.tech/2017/12/how-to-load-a-json-file-in-reactjs/
  *https://stackoverflow.com/questions/29452822/how-to-fetch-data-from-local-json-file-on-react-native#37781882

  // Filter
  * https://www.youtube.com/watch?v=OlVkYnVXPl0
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

  //Help with a11y focus
  https://stackoverflow.com/questions/27827234/keypress-event-handling-in-reactjs
  * https://www.youtube.com/watch?v=Uw5Ij56RhME

  //General Help
  * https://stackoverflow.com/questions/22639534/pass-props-to-parent-component-in-react-js
  - the two study jam sessions
  * https://www.youtube.com/watch?v=Uw5Ij56RhME
  * https://www.youtube.com/watch?v=p8QrDlluuc0

  //API Fetch help
  * https://stackoverflow.com/questions/6474427/using-flickr-api-to-search-photos-by-location-or-language
  * https://davidwalsh.name/fetch
  * https://idratherbewriting.com/learnapidoc/docapis_flickr_example.html
  * https://www.flickr.com/services/api/
  * https://www.youtube.com/watch?v=RkXotG7YUek

  //Error handling
  * https://www.w3schools.com/jsref/met_doc_write.asp
  */
