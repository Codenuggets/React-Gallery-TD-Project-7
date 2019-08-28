import React from 'react';

import { createBrowserHistory } from 'history';

class PhotoContainer extends React.Component {
    state = {
        tag: this.props.tag,
        loading: this.props.loading,
      };

      // Updates state based on updated props
      static getDerivedStateFromProps(props, state) {
        if(props.tag !== state.tag || props.loading !== state.loading) {
          return {
            tag: props.tag,
            loading: props.loading
          }
        }
        return null;
      }

      // Formats passed in tag to be capitalized and not retain any other part of the url path and get title cased
      capitalizeTitle = (tag) => {
        let title = tag.replace(/\//g, '');
        if(title.includes('search')) {
          title = title.replace('search', '');
        }
        title = (title.charAt(0).toUpperCase() + title.slice(1));
        return title;
      }

      // Initial mounting calls the getPhotos method from App.js and updates webpage title
      componentDidMount() {
        // Creates a history object to update the website title dynamically
        const history = createBrowserHistory();
        this.props.resetLoading();
        this.props.getPhotos(this.props.tag);
        document.title = this.capitalizeTitle(history.location.pathname);
      }

      // Rerenders the page if the props tag changed. Code is reused from componentDidMount
      componentDidUpdate(prevProps) {
        if(this.props.tag !== prevProps.tag){
          const history = createBrowserHistory();
          this.props.resetLoading();
          this.props.getPhotos(this.props.tag);
          document.title = this.capitalizeTitle(history.location.pathname);
        }
      }

  render() {
    return (
      <div className="photo-container">
        {/*Ternery expression used to either render a no results message if no images are returned from flickr or the Results div, if photos are returned*/}
        {this.props.photos === null || this.props.photos.length === 0 ? (
          <div>No Results Found</div>
        ) : (
          <h2>Results</h2>
        )}

        <ul>
        {/* Renders photos returned from flickr */}
        {this.props.loading ? (
          <div> loading.... </div>
        ) : (
          this.props.photos
        )}
        </ul>
      </div>
    );
  }
};

export default PhotoContainer;
