import React from 'react';
import Photo from './Photo';

import { createBrowserHistory } from 'history';

class PhotoContainer extends React.Component {
    state = {
        tag: this.props.tag,
        loading: this.props.loading,
        photos: []
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
        let title = tag.replace(/\//g, '');
        if(title.includes('search')) {
          title = title.replace('search', '');
        }
        title = (title.charAt(0).toUpperCase() + title.slice(1));
        return title;
      }

      componentDidMount() {
        const history = createBrowserHistory();
        this.props.getPhotos(this.props.tag);
        document.title = this.capitalizeTitle(history.location.pathname);
      }

      componentDidUpdate(prevProps) {
        if(this.props.tag !== prevProps.tag){
          const history = createBrowserHistory();
          console.log(this.props.tag);
          this.props.getPhotos(this.props.tag);
          console.log(history.location.pathname);
          document.title = this.capitalizeTitle(history.location.pathname);
        }
      }

  render() {
    const photos = this.props.photos;
    console.log(photos);

    return (
      <div className="photo-container">
        {this.props.photos === null || this.props.photos.length === 0 ? (
          <div>No Results Found</div>
        ) : (
          <h2>Results</h2>
        )}

        <ul>
        {this.props.photos}
        </ul>
      </div>
    );
}
// <div className="photo-container">
//   <h2>Results</h2>
//   {this.props.photos.length === 0 &&
//      <div>No Results Found</div>
//    }
//   <ul>
//   {this.props.loading ? <div>Loading....</div> : this.props.photos}
//   </ul>
// </div>



};

export default PhotoContainer;
