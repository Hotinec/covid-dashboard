import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(40),
    marginBottom: theme.spacing(1),
    border: "1px solid #363636",
    color: "#bdbdbd",
    backgroundColor: "#24292e",
    padding: "10px"
  },
  title: {
    fontSize: "16px"
  },
  wrapperCountries: {
    width: "48%",
    backgroundColor: "#24292e",
    height: theme.spacing(39.5),
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
    height: "80.5%",
    paddingTop: "0",
    paddingBottom: "0"
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
  }
}));
