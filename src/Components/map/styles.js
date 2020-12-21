import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100%',
    border: '1px solid #363636',
    color: '#bdbdbd',
    backgroundColor: '#24292e',
    padding: '10px',
  },
  open: {
    height: theme.spacing(87),
  },
  marker: {
    borderRadius: '50%',
    cursor: 'pointer',
    opacity: '0.8',
  },
  mapNav: {
    bottom: '32px',
    position: 'absolute',
    right: '8px',
  },
  resizeIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    color: '#888',
    zIndex: 10,
    border: '1px solid #363636',
    borderRadius: '50%',
  }
}));
