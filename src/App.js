import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';


import SearchField from './components/SearchField';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <SearchField />
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <Redirect to ="/computers" /> } />
          <Route path="/computers" render={() => <PhotoContainer tag={"computers"} /> } />
          <Route path="/sunsets" render={() => <PhotoContainer tag={"sunsets"} /> } />
          <Route path="/comics" render={() => <PhotoContainer tag={"comics"} /> } />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
