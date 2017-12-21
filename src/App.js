// @flow

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Dashboard from './scenes/Dashboard/';
import ProjectFull from './scenes/Dashboard/ProjectFull';
import MissionFull from './scenes/Dashboard/MissionFull';
import './App.css';

const store = configureStore();

console.log(store.getState());

const Header = () => {
  return <Link to={'/'}>Go Home</Link>;
};

class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectFull} />
            <Route path="/mission/:id" component={MissionFull} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

// * 10th Dec, hook up redux store,
// * 10th Dec, hook up react router,
// * 10th Dec, setup github,
// * 11th Dec, date picker component,
// * 12th Dec, date picker component,
// * 12th Dec, edit project page,
// * 13th Dec, edit project page,
// -------------------------------
// 15th Dec, implement filter,

// 19th Dec, add page/s,
// 20th Dec, filter,
// 21st Dec, back end,
// 22nd Dec, back end
