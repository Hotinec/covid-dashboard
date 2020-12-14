import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    minWidth: 500,
    margin: '5px 10px 5px 10px',
    border: '1px solid #363636',
    borderRadius: '0',
    color: '#bdbdbd',
    backgroundColor: '#24292e',
    height: '44px',
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontSize: '1.6994866rem',
    lineHeight: 0,
  },
  media: {
    width: '93px',
    height: '35px',
    marginRight: '25px',
  },
});