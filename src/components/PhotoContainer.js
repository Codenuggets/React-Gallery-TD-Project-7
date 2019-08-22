import React from 'react';
import Photo from './Photo';
import apiKey from '../config.js';

class PhotoContainer extends React.Component {
  state = {
      photos: null,
      tag: this.props.tag,
      loading: true
    };

  async componentDidMount() {
    const apiURL= `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.tag}&per_page=24&format=json&nojsoncallback=1`;
    const flickrResponse = await fetch(apiURL);

    const flickrJSON = await flickrResponse.json();
    console.log(flickrJSON.photos.photo);
    this.setState({
      photos: flickrJSON.photos.photo.map(photo => {
              return <Photo  farm={photo.farm}
                        server={photo.server}
                        id={photo.id}
                        secret={photo.secret}
                        key={photo.id} />
      }),
      loading: false
    });
  }

  render() {
    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
        {this.state.loading ? <div>loading...</div> : this.state.photos}
        </ul>
      </div>
    );

}


};

export default PhotoContainer;
