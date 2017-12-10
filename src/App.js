// @flow

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Dashboard from './scenes/Dashboard/';
import ProjectFull from './scenes/Dashboard/ProjectFull';
import './App.css';

const store = configureStore();

console.log(store.getState());

class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectFull} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

// * 10th Dec, hook up redux store,
// * 10th Dec, hook up react router,
// -------------------------------
// 10th Dec, setup github,
// 11th Dec, date picker component,
// 12th Dec, date picker component,
