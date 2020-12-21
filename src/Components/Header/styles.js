import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 375,
    margin: theme.spacing(1),
    border: '1px solid #363636',
    color: '#bdbdbd',
    backgroundColor: '#24292e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
    height: theme.spacing(7)
  },
  title: {
    fontSize: '1.6994866rem',
    lineHeight: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  media: {
    width: '93px',
    height: '35px',
    marginRight: '25px',
  },
}));
