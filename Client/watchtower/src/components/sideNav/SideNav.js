import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardContent, Button } from '@material-ui/core';


import {
    setIndicatorSelected,
    setIndicatorData
} from '../../actions'

import indicatorData from '../../data/indicators.json'

import './SideNav.scss'


class SideNav extends React.Component {

    indicatorClicked = (indicator) => {
        //Updating the chosen indicator name
        this.props.setIndicatorSelected({
            name: indicator.name
        })

        //Updating all indicator data for indicator panel
        this.props.setIndicatorData({
            name: indicator.name,
            title: indicator.title,
            status: indicator.status,
            description: indicator.description
        })
    }

    renderIndicatorList = () => {
        const indicators = indicatorData.indicators
        const statusColors = ["red", "orange", "green"]

        return (
            indicators.map(indicator => {
                return (
                    <li className="sideNavListItem">
                        <Button className="listItemButton" onClick={() => this.indicatorClicked(indicator)}>
                            <span class="dot" style={{ "backgroundColor": statusColors[indicator.status - 1] }}></span>
                            <span class="buttonText"> {indicator.title}</span>
                        </Button>
                    </li>
                )
            })
        )
    }


    render() {
        return (
            <Card className="sideNav">
                <CardHeader title="Indicators" />

                <CardContent >
                    <ul className="sideNavList">
                        {this.renderIndicatorList()}
                    </ul>
                </CardContent>
            </Card>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        indicatorSelected: state.sideNav.indicatorSelected
    }
}

export default connect(
    mapStateToProps, {
    setIndicatorSelected,
    setIndicatorData
})(SideNav)