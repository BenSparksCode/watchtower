import React from 'react'
import { connect } from 'react-redux'
import { Navbar } from 'react-bootstrap';

import { } from '../../actions'

import './Header.scss'

import WatchtowerImg from '../../assets/img/Watchtower Logo.svg'


class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <div className="headerContainer">
                    <img className="headerImg" src={WatchtowerImg} alt="Watchtower Logo" />
                    <h1 className="header">Watchtower</h1>
                </div>
            </Navbar>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {

    }
}

export default connect(
    mapStateToProps, {

})(Header)