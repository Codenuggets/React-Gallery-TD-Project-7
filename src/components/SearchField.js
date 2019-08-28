import React from 'react';
import { createBrowserHistory } from 'history';

class SearchField extends React.Component {
  state = {
    searchText: '',
    tag: ''
  }

  onSearchChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }

  // Formats search text to update the title
  capitalizeTitle = (search) => {
    search = (search.charAt(0).toUpperCase() + search.slice(1));
    return search;
  }

  // Handles the removal of active styling on the links
  removeActive = () => {
    const activeLink = document.querySelector('.active');
    // Makes sure there is an active link in case a user is searching after a search was already made
    if(activeLink) {
      activeLink.classList.remove("active");
    }
  }

  handleSubmit = (e) => {
    const history = createBrowserHistory();
    e.preventDefault();
    // Resets loading state in app js to allow a loading div to be rendered in PhotoContainer
    this.props.resetLoading();
    this.props.getPhotos(this.state.searchText);
    this.removeActive();
    e.currentTarget.reset();
    document.title = this.capitalizeTitle(this.state.searchText);
    history.push(`/search/${this.state.searchText}`);
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input type="search" name="search" placeholder="Search" onChange={this.onSearchChange} required/>
        <button type="submit" className="search-button">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
      </form>
    );
  }

}

export default SearchField;
