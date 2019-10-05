import React from 'react';
import { Card } from '@material-ui/core';


import SideNav from './components/sideNav/SideNav'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Indicator from './components/indicator/Indicator'

import './App.scss';


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Header />

              <div className="sideNavContainer">
                <Card>
                  <SideNav />
                </Card>
              </div>
 
              <div className="indicatorContainer">
                <Indicator />
              </div>

        <Footer />
      </div>
    );
  }

}

export default App;
