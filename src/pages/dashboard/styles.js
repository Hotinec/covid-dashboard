import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  item: {
    height: "calc(100vh - 72px)",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
}));
