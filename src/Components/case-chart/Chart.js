import React from 'react'
import Chart from 'chart.js'
import Moment from 'moment'

export class ChartView extends React.Component {
    constructor(props) {
        super(props)
        this.canvasRef = this.props.reference
    }

    componentDidUpdate() {
        const { chartData, title } = this.props
        const mainLabel = title !== '' ? title : 'Total cases'
        this.myChart.data.labels = chartData.map((country) =>
            Moment(country.date).format('MM/DD/YYYY')
        )

        this.myChart.data.datasets[0].data = chartData.map(
            (country) => country.cases
        )
        this.myChart.data.datasets[0].label = mainLabel
        this.myChart.update()
    }

    componentDidMount() {
        const { chartData, title } = this.props
        const mainLabel = title !== '' ? title : 'Total cases'
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'line',
            options: {
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            type: 'time',
                            time: {
                                unit: 'month',
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                min: 0,
                            },
                        },
                    ],
                },
            },
            data: {
                labels: chartData.map((country) =>
                    Moment(country.date).format('MM/DD/YYYY')
                ),
                datasets: [
                    {
                        label: mainLabel,
                        data: chartData.map((country) => country.cases),
                        backgroundColor: 'rgba(50, 168, 82, 0.3)',
                        pointRadius: 1,
                        borderColor: '#32a852',
                        borderWidth: 1,
                    },
                ],
            },
        })
    }

    render() {
        return <canvas ref={this.canvasRef} />
    }
}
