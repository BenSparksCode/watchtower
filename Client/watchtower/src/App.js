import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
        

        <Container fluid={true}>
          <Row>
            <br/>
          </Row>
          <Row >
            <Col sm={4} md={3} lg={2}>
              <div className="sideNavContainer">
                <SideNav />
              </div>
            </Col>
            <Col sm={8} md={8} lg={8}>
              <div className="indicatorContainer">
                <Indicator />
              </div>
            </Col>
          </Row>
        </Container>

        <Footer />



      </div>
    );
  }

}

export default App;
