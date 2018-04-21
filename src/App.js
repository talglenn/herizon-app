import React from 'react';
import Titles from "./components/Titles";
import Info from "./components/Info";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import MoreInfo from "./components/MoreInfo";
import Bottom from "./components/Bottom";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <Titles/>
            <Info/>
            <Testimonials/>
            <Contact/>
            <MoreInfo/>
            <Bottom/>
          </div>
            
        </div>
      </div>
    );
  }
}


export default App;
