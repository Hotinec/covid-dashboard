import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "chart.js";
import { fetchChartData } from "../../redux/middlewares";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./styles";

export const CaseChart = () => {
  const [chartRef, setChartRef] = useState(React.createRef());
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentCountry } = useSelector((state) => state);
  const chartData = useSelector((state) => state.chartInfo.data);

  useEffect(() => {
    dispatch(fetchChartData(currentCountry));
  }, [currentCountry]);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "line",
      options: {
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                unit: "month"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0
              }
            }
          ]
        }
      },
      data: {
        labels: chartData.map((d) => d.last_update),
        datasets: [
          {
            label: "Total cases",
            data: chartData.map((d) => d.total_cases),
            fill: "none",
            backgroundColor: "#fff",
            pointRadius: 2,
            borderColor: "#fff",
            borderWidth: 0,
            lineTension: 0
          }
        ]
      }
    });
  }, [chartData]);

  return (
    <Paper className={classes.root} square>
      <canvas id="chart" ref={chartRef} />
    </Paper>
  );
};
