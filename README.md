# React Gallery
This app uses React to display a gallery comprised of photos fetched from the Flickr API

## React
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Components
* `App.js` - This stateful component houses the main `getPhotos` method to fetch the photos and stores the main rendering of all the other components
* `Nav.js` - This stateless component renders the navigation links
* `SearchField.js` - This stateful component renders the search bar and handles the logic for when a user searches for images
* `PhotoContainer.js` - This stateful component renders the photo gallery or messages to relay to the user that content is loading or if no results are returned from their search
* `Photo.js` - This stateless component renders the photo component that is part of the array that is rendered in `PhotoContainer`. This takes data fed to it from `App.js`'s `getPhotos` method and interpolates that data into a url to display the photo from Flickr
