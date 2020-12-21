import React from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import {setSearch} from '../../redux/searchSlice';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {useStyles} from './styles';

export const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
 
  const inputHandler = debounce((value) => dispatch(setSearch(value)), 500);

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search countries"
        inputProps={{ 'aria-label': 'search countries' }}
        onChange={e=>inputHandler(e.target.value)}
      />
      {/* <IconButton type="submit" className={classes.iconButton} aria-label="search"> */}
        <SearchIcon className={classes.iconButton}/>
      {/* </IconButton> */}
    </Paper>
  );
}