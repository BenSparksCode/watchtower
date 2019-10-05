import React from 'react'
import { connect } from 'react-redux'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';

import { } from '../../actions'

import './Header.scss'

import WatchtowerImg from '../../assets/img/Watchtower Logo.svg'


class Header extends React.Component {


    render() {
        return (
            <AppBar position="static" className="app-bar">
                <Toolbar>
                    <IconButton edge="start" className="header-menu-btn" color="inherit" aria-label="menu">

                        <img className="header-img" src={WatchtowerImg} alt="Watchtower Logo" />
                        <Typography variant="h4" className="header-title">
                            Watchtower
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
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