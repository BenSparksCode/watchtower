import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardContent, Button } from '@material-ui/core';


import IndicatorGraphic from './indicatorGraphic/IndicatorGraphic'
import {
    getApiData,
} from '../../actions'


import './Indicator.scss'


const statusData = [
    {
        color: "red",
        text: "HIGH RISK"
    },
    {
        color: "orange",
        text: "AVERAGE RISK"
    },
    {
        color: "green",
        text: "LOW RISK"
    },
]


class Indicator extends React.Component {

    testThunk = () => {
        console.log("test")
        this.props.getApiData({

        })
    }


    renderStatusText = () => {
        const status = this.props.status - 1

        return (
            <b style={{ color: statusData[status].color }}>
                {statusData[status].text}
            </b>
        )
    }

    render() {

        if (this.props.name === "" ||
            this.props.name === undefined ||
            this.props.name === null) {
            return (
                <div className="indicatorContainer">
                    <Card border="dark">
                        <CardHeader title={"No indicator selected"} />

                        <div className="indicatorStatusContainer">
                            <p>Please select an indicator...</p>
                        </div>
                    </Card>
                </div>
            )
        } else {
            return (
                <div className="indicatorContainer">
                    <Card border="dark">
                        <CardHeader title={this.props.title} />

                        <div className="indicatorStatusContainer">
                            <p>Status: {this.renderStatusText()}</p>
                        </div>

                        <div className="indicatorGraphicContainer">
                            <IndicatorGraphic />
                        </div>

                        <br />

                        <div className="indicatorDescriptionContainer">
                            <p><b>Description:</b>  {this.props.description}</p>
                        </div>
                    </Card>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.indicator.name,
        title: state.indicator.title,
        status: state.indicator.status,
        description: state.indicator.description,
    }
}

export default connect(
    mapStateToProps, {
    getApiData,
})(Indicator)