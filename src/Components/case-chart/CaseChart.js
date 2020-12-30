/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import { selectCurrentBoard } from "../../redux/currentBoardSlice";
import { selectParameter } from "../../redux/parameterSlice";
import IconMenuButton from "../menu-icon-button";
import { ChartView } from "./Chart";
import { fetchChartData } from "../../redux/middlewares";
import { useStyles } from "./styles";
import { getChartData } from "../../redux/chartInfoSlice";
import { selectCurrentCountry } from "../../redux/currentCountrySlice";
import { useResizeSwitch } from "../../hooks/useResizeSwitch";

export const CaseChart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const currentBoard = useSelector(selectCurrentBoard);
  const currentCountry = useSelector(selectCurrentCountry);
  const chartData = useSelector(getChartData);
  const parameter = useSelector(selectParameter);
  const resizeClickHandler = useResizeSwitch(5);

  useEffect(() => {
    dispatch(fetchChartData(currentCountry));
  }, [currentCountry]);

  return (
    <Paper
      className={`${classes.root} ${currentBoard === 5 ? classes.open : ""}`}
      square
    >
      <IconMenuButton />
      <IconButton
        aria-label="delete"
        className={classes.resizeIcon}
        size="small"
        onClick={resizeClickHandler}
      >
        <FullscreenExitIcon fontSize="inherit" />
      </IconButton>
      <ChartView chartData={chartData} title={parameter} />
    </Paper>
  );
};
