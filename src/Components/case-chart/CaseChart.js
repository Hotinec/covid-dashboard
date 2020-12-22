/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "chart.js";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import { fetchChartData } from "../../redux/middlewares";
import { selectParameter } from "../../redux/parameterSlice";
import { setBoard, selectCurrentBoard } from "../../redux/currentBoardSlice";
import { useStyles } from "./styles";
import { getChartData } from "../../redux/chartInfoSlice";
import { selectCurrentCountry } from "../../redux/currentCountrySlice";

export const CaseChart = () => {
  const chartRef = useRef();

  const classes = useStyles();
  const dispatch = useDispatch();

  const currentBoard = useSelector(selectCurrentBoard);
  const currentCountry = useSelector(selectCurrentCountry);
  const chartData = useSelector(getChartData);
  const parameter = useSelector(selectParameter);

  const dataMap = chartData.map((country) => country.cases);

  useEffect(() => {
    dispatch(fetchChartData(currentCountry));
  }, [currentCountry]);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    const chart = new Chart(myChartRef, {
      type: "line",
      options: {
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
        labels: chartData.map((d) => d.date),
        datasets: [
          {
            label: parameter || "Total cases",
            data: dataMap,
            fill: "none",
            backgroundColor: "#32a852",
            pointRadius: 1,
            borderColor: "#32a852",
            borderWidth: 0,
            lineTension: 0,
          },
        ],
      },
    });
    chart.data.labels = chartData.map((d) => d.date);
    chart.data.datasets.data = dataMap;
    chart.update();
  }, [chartData]);

  const resizeClickHandler = () => {
    if (currentBoard === 5) {
      dispatch(setBoard(0));
      return;
    }

    dispatch(setBoard(5));
  };

  return (
    <Paper
      className={`${classes.root} ${currentBoard === 5 ? classes.open : ""}`}
      square
    >
      <IconButton
        aria-label="delete"
        className={classes.resizeIcon}
        size="small"
        onClick={(e) => resizeClickHandler(e)}
      >
        <FullscreenExitIcon fontSize="inherit" />
      </IconButton>
      <canvas id="chart" ref={chartRef} />
    </Paper>
  );
};
