import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';

import apiKey from './config.js'
import SearchField from './components/SearchField';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import Photo from './components/Photo'

class App extends React.Component {
  state = {
    photos: null,
    loading: true,
  }

  getPhotos = (tag) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo.map(photo => {
                   return <Photo  farm={photo.farm}
                            server={photo.server}
                            id={photo.id}
                            secret={photo.secret}
                            key={photo.id} />
        }),
        loading: false
      });
    });
  }



  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchField />
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Redirect to ="/computers" /> } />
            <Route path="/computers" render={() =>  <PhotoContainer getPhotos={this.getPhotos} tag={"computers"} photos={this.state.photos} loading={this.state.loading} /> }  />
            <Route path="/sunsets" render={() => <PhotoContainer getPhotos={this.getPhotos} tag={"sunsets"} photos={this.state.photos} loading={this.state.loading}/> } />
            <Route path="/comics" render={() => <PhotoContainer getPhotos={this.getPhotos} tag={"comics"} photos={this.state.photos} loading={this.state.loading}/> } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
