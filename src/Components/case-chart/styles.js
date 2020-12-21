import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
    border: "1px solid #363636",
    color: "#bdbdbd",
    backgroundColor: "#24292e",
    padding: "10px",
    position: "relative"
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
