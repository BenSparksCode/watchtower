import React from 'react';
import { Card, Grid } from '@material-ui/core';

import SideNav from './components/sideNav/SideNav'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Indicator from './components/indicator/Indicator'

import './App.scss';


class App extends React.Component {


  render() {
    return (

        <div className="app">
          <Header />

          <Grid container spacing={3} style={{margin: 0,width: '100%'}}>
            <Grid item xs={12} sm={4} lg={3}>
              <Card>
                <SideNav />
              </Card>
            </Grid>

            <Grid item xs={12} sm={8} lg={6}>
              <Indicator />
            </Grid>
          </Grid>

          <Footer />
        </div>
    );
  }

}

export default App;
