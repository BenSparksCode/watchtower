import React from 'react'
import { connect } from 'react-redux'
import { Line } from 'react-chartjs-2';

import { } from '../../../actions'

import './IndicatorGraphic.scss'


const data = {
    labels: ['\'18 Q1', '\'18 Q2', '\'18 Q3', '\'18 Q4', '\'19 Q1', '\'19 Q2'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 50,
            data: [2.5, 3.5, 2.9, 1.1, 3.1, 2]
        }
    ]
};

class IndicatorGraphics extends React.Component {

    renderGraph = () => {

        return (
            <Line
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        duration:500,
                    }
                }}
                data={data} />
        )
    }


    render() {
        return (
                this.renderGraph()
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

export default connect(
    mapStateToProps, {

})(IndicatorGraphics)