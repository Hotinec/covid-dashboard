import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '50%',
    marginBottom: theme.spacing(1),
    border: "1px solid #363636",
    color: "#bdbdbd",
    backgroundColor: "#24292e",
    padding: "10px",
    [theme.breakpoints.down('sm')]: {
      height: '300px',
    },
  },
  open: {
    height: 'calc(100vh - 72px)',
  },
  title: {
    fontSize: "16px",
  },
  wrapper: {
    position: 'absolute',
    top: 8,
    left: 8,
    right: 8,
    bottom: 8,
  },
  wrapperCountries: {
    width: "48%",
    backgroundColor: "#24292e",
    height: '100%',
    border: "1px solid #363636",
    position: "relative"
  },
  global: {
    backgroundColor: "#24292e",
    color: "#ffffff",
    borderBottom: "1px solid #e60000"
  },
  globalCases: {
    fontSize: "24px",
    fontWeight: "bold"
  },
  countryList: {
    overflowY: "scroll",
    paddingTop: "0",
    paddingBottom: "0",
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
  },
  itemCountry: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  itemText: {
    margin: "0"
  },
  itemDivider: {
    backgroundColor: "#363636"
  },
  infoList: {
    overflowY: "scroll",
    height: "97.5%",
    paddingTop: "0",
    paddingBottom: "0"
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
