import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import './Filter.css';

const duration = 100;

const defaultStyle = {
  transition: `all ${duration}ms ease-out`,
  transform: `translateY(0)`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 0, transform: `translateY(-100%)` },
  entered: { opacity: 1, transform: `translateY(0)` },
  exiting: { opacity: 0, transform: `translateY(-100%)` },
  exited: { opacity: 0, transform: `translateY(-100%)` }
};

const SlideInDown = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration} unmountOnExit={true}>
    {state => (
      <input
        type="text"
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      />
    )}
  </Transition>
);

export default class Filter extends Component {
  state = {
    showFilters: true
  };
  toggleShowFilters = () => {
    this.setState(state => ({ showFilters: !state.showFilters }));
  };
  render() {
    return (
      <div className="filter">
        <div className="toggle-filters" onClick={this.toggleShowFilters}>
          {this.state.showFilters ? (
            <i className="fa fa-chevron-down" />
          ) : (
            <i className="fa fa-chevron-right" />
          )}
        </div>
        <SlideInDown in={!!this.state.showFilters} />
      </div>
    );
  }
}
