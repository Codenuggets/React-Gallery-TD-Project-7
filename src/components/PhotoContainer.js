import React from 'react';
import Photo from './Photo';
import apiKey from '../config.js';

class PhotoContainer extends React.Component {
    state = {
        tag: this.props.tag,
        loading: this.props.loading
      };

      static getDerivedStateFromProps(props, state) {
        if(props.tag !== state.tag || props.loading !== state.loading) {
          return {
            tag: props.tag,
            loading: props.loading
          }
        }
        return null;
      }

      capitalizeTitle = (tag) => {
        return (tag.charAt(0).toUpperCase() + tag.slice(1));
      }

  render() {
    this.props.getPhotos(this.state.tag);
    document.title = this.capitalizeTitle(this.state.tag);

    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
        {this.state.loading ? <div>Loading....</div> : this.props.photos}
        </ul>
      </div>
    );
}



};

export default PhotoContainer;
