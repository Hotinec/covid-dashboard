import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: theme.spacing(10),
    marginBottom: theme.spacing(1),
    border: '1px solid #363636',
    color: '#bdbdbd',
    backgroundColor: '#24292e',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  open: {
    height: theme.spacing(87),
  },
  caseTitle: {
    color: 'rgb(255, 255, 255)',
    strokeWidth: 2,
    fontSize: 14,
    lineHeight: 'normal',
  },
  caseCount: {
    color: 'rgb(230, 0, 0)',
    strokeWidth: 2,
    lineHeight: 'normal',
    fontSize: 29,
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
