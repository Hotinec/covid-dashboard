import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '50%',
    border: "1px solid #363636",
    color: "#bdbdbd",
    backgroundColor: "#24292e",
    padding: "10px",
    position: "relative",
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
    },
  },
  open: {
    height: 'calc(100vh - 72px)',
  },
  title: {
    fontSize: "16px"
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
