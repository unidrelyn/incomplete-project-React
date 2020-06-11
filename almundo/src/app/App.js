import React, { Component } from 'react';
import TopBar from './components/Topbar';
import Hotels from './components/Hotels';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Hotels />
      </div>
    );
  }
}

export default App;
