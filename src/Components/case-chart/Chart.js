import React from "react";
import Chart from "chart.js";

export class ChartView extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const { title, chartData } = this.props;
    const mainLabel = title !== "" ? title : "Total cases";
    this.chart = new Chart(this.canvasRef.current, {
      type: "line",
      options: {
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                unit: "month",
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
        labels: chartData.map((country) => {
          const date = new Date(country.date);
          return `${
            date.getMonth() + 1
          }/${date.getDate()}/${date.getFullYear()}`;
        }),
        datasets: [
          {
            label: mainLabel,
            data: chartData.map((country) => country.cases),
            backgroundColor: "rgba(50, 168, 82, 0.3)",
            pointRadius: 1,
            borderColor: "#32a852",
            borderWidth: 1,
          },
        ],
      },
    });
  }

  componentDidUpdate() {
    const { title, chartData } = this.props;
    const mainLabel = title !== "" ? title : "Total cases";
    this.chart.data.labels = chartData.map((country) => {
      const date = new Date(country.date);
      return date;
    });

    this.chart.data.datasets[0].data = chartData.map(
      (country) => country.cases
    );
    this.chart.data.datasets[0].label = mainLabel;
    this.chart.update();
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}
