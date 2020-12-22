import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBoard, selectCurrentBoard } from '../../redux/currentBoardSlice'
import { selectParameter } from '../../redux/parameterSlice'
import { ChartView } from './Chart'
import { fetchChartData } from '../../redux/middlewares'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import { useStyles } from './styles'
import { getChartData } from '../../redux/chartInfoSlice'
import { selectCurrentCountry } from '../../redux/currentCountrySlice'

export const CaseChart = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const ref = useRef()

    const currentBoard = useSelector(selectCurrentBoard)
    const currentCountry = useSelector(selectCurrentCountry)
    const chartData = useSelector(getChartData)
    const parameter = useSelector(selectParameter)

    useEffect(() => {
        dispatch(fetchChartData(currentCountry))
    }, [currentCountry])

    const resizeClickHandler = (e) => {
        if (currentBoard === 5) {
            dispatch(setBoard(0))
            return
        }
        dispatch(setBoard(5))
    }

    return (
        <Paper
            className={`${classes.root} ${
                currentBoard === 5 ? classes.open : ''
            }`}
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
            <ChartView
                chartData={chartData}
                title={parameter}
                reference={ref}
            />
        </Paper>
    )
}
