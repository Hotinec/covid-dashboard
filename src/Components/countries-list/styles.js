import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    flexGrow: '1',
    border: '1px solid #363636',
    color: '#bdbdbd',
    backgroundColor: '#24292e',
    padding: '10px 0',
  },
  title: {
    color: 'rgb(255, 255, 255)',
    fontSize: '18px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  list: {
    overflowY: 'scroll',
    height: 400,
  },
  divider: {
    width: '100%',
    backgroundColor: '#363636',
  },
  listItem: {
    justifyContent: 'space-around',
  },
  countryName: {
    textAlign: 'right',
  },
  imageIcon: {
    width: '100%',
    height: '100%',
  },
  iconRoot: {
    textAlign: 'center',
  },
  itemIcon: {
    justifyContent: 'flex-end',
  }
}));
