import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "80%",
    border: "1px solid #363636",
    color: "#bdbdbd",
    backgroundColor: "#24292e",
    padding: "10px 0",
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
  },
  open: {
    height: "calc(100vh - 72px)",
  },
  title: {
    color: "rgb(255, 255, 255)",
    fontSize: "18px",
    textAlign: "center",
    marginBottom: "20px",
  },
  wraper: {
    height: "100%",
    position: "relative",
  },
  list: {
    overflowY: "scroll",
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    bottom: 8,
  },
  divider: {
    width: "100%",
    backgroundColor: "#363636",
  },
  listItem: {
    justifyContent: "space-around",
  },
  countryName: {
    textAlign: "right",
  },
  imageIcon: {
    width: "100%",
    height: "100%",
  },
  iconRoot: {
    textAlign: "center",
  },
  itemIcon: {
    justifyContent: "flex-end",
  },
  resizeIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    color: "#888",
    zIndex: 10,
    border: "1px solid #888",
    backgroundColor: "#1d2225",
    borderRadius: "50%",
  },
}));
