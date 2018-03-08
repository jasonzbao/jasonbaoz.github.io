import WebsiteLayout1 from './layouts/WebsiteLayout1'
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import basic_info from './editables/basic_info.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    ReactGA.initialize(basic_info.google_analytics);
    ReactGA.pageview('/')
  }

  render() {
    return (
      <WebsiteLayout1 />
    );
  }
}

export default App;
