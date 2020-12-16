import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  item: {
    height: theme.spacing(67),
    display: 'flex',
    flexDirection: 'column',
  }
}));