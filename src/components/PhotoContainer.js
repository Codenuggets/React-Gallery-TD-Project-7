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

      mapPhotos = () => {
        let mappedPhotos = this.props.photos.map(photo => {
                 return <Photo  farm={photo.farm}
                          server={photo.server}
                          id={photo.id}
                          secret={photo.secret}
                          key={photo.id} />
      });
      this.setState({
        photos: mappedPhotos
      });
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
          this.props.getPhotos(this.props.tag);
          document.title = this.capitalizeTitle(history.location.pathname);
        }
      }

  render() {
    //this.mapPhotos(this.props.photos);


    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
        {this.props.photos}
        </ul>
      </div>
    );
}



};

export default PhotoContainer;
