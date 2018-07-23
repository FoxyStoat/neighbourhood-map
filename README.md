# Neighbourhood Map

Project 8 Front End Nanodegree Udacity

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

[Project Overview](https://github.com/FoxyStoat/neighbourhood-map#project-overview)
[How To Run This App](https://github.com/FoxyStoat/neighbourhood-map#how-to-run-this-app)
[Project Requirements](https://github.com/FoxyStoat/neighbourhood-map#requirements)
[License](https://github.com/FoxyStoat/neighbourhood-map#license)

## Project Overview

To build a one-page application using REACT.  The app will show a google map with map markers to identify at least 5 locations around the neighbourhood you base it on.  I based mine on my hometown of Saltburn By The Sea because it's a beautiful and quirky place.

The user of the app will be able to view a set of locations that provide information, images, links etc about that location.

The app must be responsive and be accessible.  The use of a service worker to allow for offline usage.
See project [rubric](https://github.com/FoxyStoat/neighbourhood-map#requirements) for all project specifications.

## How To Run This App

**Dependencies**

 * npm

1. Download or Clone this Repository.
2. Run $ npm install to install the project dependencies.
3. Run the app using $ npm start.
4. App can be seen at: localhost:3000 which should open automatically.

## Requirements

**Meets Specifications**

### Interface Design

**Responsiveness**

- All application components render on-screen in a responsive manner.

**Usability**

- All application components are usable across modern desktop, tablet, and phone browsers.

### Application Functionality

**Location Filter**

- Includes a text input field or dropdown menu that filters the map markers and list items to locations matching the text input or selection. Filter function runs error-free.

**List View**

- A list-view of location names is provided which displays all locations by default, and displays the filtered subset of locations when a filter is applied.

- Clicking a location on the list displays unique information about the location, and animates its associated map marker (e.g. bouncing, color change.)

- List functionality is responsive and runs error free.

**Map and Markers**

- Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied.

- Clicking a marker displays unique information about a location somewhere on the page (modal, separate div, inside an infoWindow).

- Any additional custom functionality provided in the app functions error-free.

### Asynchronous Data Usage

**Asynchronous API Requests**

- Application utilizes the `Google Maps API` or another mapping system and at least one non-Google third-party `API`. Refer to this documentation(https://developers.google.com/maps/documentation/javascript/tutorial)

- All data requests are retrieved in an asynchronous manner using either the Fetch API or XMLHttpRequest.

**Error Handling**

- Data requests that fail are handled gracefully using common fallback techniques (i.e. `AJAX` error or fail methods). 'Gracefully' means the user isn’t left wondering why a component isn’t working. If an `API` doesn’t load there should be some visible indication on the page that it didn’t load.

### Documentation

**README**

- A `README` file is included detailing all steps required to successfully run the application.

**Comments**

- Comments are present and effectively explain longer code procedures.

### Location Details Functionality

**Additional Location Data**

- Functionality providing additional data about a location is provided and sourced from a 3rd party API. Information can be provided either in the marker’s `infoWindow`, or in an `HTML` element in the `DOM` (a sidebar, the list view, a modal, etc.)

- Provide attribution for the source of additional data. For example, if using Foursquare, indicate somewhere in your UI and in your README that you are using Foursquare data.

**Error Free**

- Application runs without console errors.

**Usability**

- Functionality is presented in a usable and responsive manner.

### Accessibility

**Focus**

- Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.

**Site elements are defined semantically**

- Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate `ARIA roles` are defined.

**Accessible Images**

- All content-related images include appropriate alternate text that clearly describes the content of the image.

### Offline Use

**Service Worker**

- When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.

### Application Architecture

**Proper Use of React**

- React code follows a reasonable component structure.

- State control is managed appropriately: event handlers are passed as props to child components, and state is managed by parent component functions when appropriate.

- There are at least 5 locations in the model. These may be hard-coded or retrieved from a data API.

### License

This is my project for Udacity project and has a [MIT License](https://opensource.org/licenses/MIT).