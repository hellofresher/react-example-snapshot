import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PhotoContextProvider from './context/PhotoContext';
// import flickrApi from './services/flickrApi';
// import config from './config';
import Header from './components/header';
import Page from './components/page';
import SearchPage from './components/page/SearchPage';
import NotFound from './components/page/NotFound';
import './App.css';

function App() {
  const handleSubmit = (e, history, q) => {
    e.preventDefault();
    e.currentTarget.reset();

    let url = `/search/${q}`;

    history.push(url);
  };

  return (
    <div className="App">
      <PhotoContextProvider>
        <Route
          render={(props) => (
            <Header
              history={props.history}
              handleSubmit={handleSubmit}
            />
          )}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/mountain" />}
          />

          <Route
            path="/mountain"
            render={() => <Page tag="mountain" />}
          />

          <Route
            path="/beach"
            render={() => <Page tag="beach" />}
          />

          <Route
            path="/bird"
            render={() => <Page tag="bird" />}
          />

          <Route
            path="/food"
            render={() => <Page tag="food" />}
          />

          <Route
            path="/search/:q"
            render={(props) => <SearchPage tag={props.match.params.q} />}
          />

          <Route component={NotFound} />
        </Switch>
      </PhotoContextProvider>
    </div>
  );
}

export default App;
