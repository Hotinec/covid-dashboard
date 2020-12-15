import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {

    height: theme.spacing(10),
    marginBottom: theme.spacing(1),
    border: '1px solid #363636',
    color: '#bdbdbd',
    backgroundColor: '#24292e',
    padding: '10px',
  },
  title: {
    fontSize: '16px',
  },
}));
