import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './App.css';

// Components
import Home from './components/home'
import ProjectsMobile from './components/projects-mobile'
import ProjectsDesktop from './components/projects-desktop'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Home />

        <MediaQuery className="media_query" query="(min-device-width: 1080px)">
          <ProjectsDesktop />
        </MediaQuery>

        <MediaQuery className="media_query" query="(max-device-width: 1080px)">
          <ProjectsMobile />
        </MediaQuery>

      </div>
    );
  }
}

export default App;