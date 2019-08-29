# React Gallery
This app uses React to display a gallery comprised of photos fetched from the Flickr API

## React
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation and Getting Started
After cloning this repo, move to the root of this directory `React-Gallery-TD-Project-7/` in your terminal or shell and run `npm install` to install all the project dependencies. Once that is done, you can launch the app with `npm install`. The app should be running on `localhost:3000`

### config.js
This app requires an API key from Flickr that is personal to each Flickr user. You can apply for one at https://www.flickr.com/services/apps/create/apply/ . Once you can an API key, create a `config.js` in the `src` folder, declare a variable `apiKey` and assign your API key to it. Then make sure you export the key with `export default apiKey` and you should be all set!

## Components
* `App.js` - This stateful component houses the main `getPhotos` method to fetch the photos and stores the main rendering of all the other components
* `Nav.js` - This stateless component renders the navigation links
* `SearchField.js` - This stateful component renders the search bar and handles the logic for when a user searches for images
* `PhotoContainer.js` - This stateful component renders the photo gallery or messages to relay to the user that content is loading or if no results are returned from their search
* `Photo.js` - This stateless component renders the photo component that is part of the array that is rendered in `PhotoContainer`. This takes data fed to it from `App.js`'s `getPhotos` method and interpolates that data into a url to display the photo from Flickr
* `NotFound` - This stateless component renders a user friendly page to show a 404 page
