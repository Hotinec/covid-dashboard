import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  legend: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: "5px",
    display: "flex",
    height: " 40px",
    justifyContent: "space-around",
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translate(-50%, 0)",
    width: " 350px",
    zIndex: 1,
  },
  legendField: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  legendIcon: {
    borderColor: "transparent",
    borderRadius: "50%",
    borderStyle: "solid",
    borderWidth: "2px",
    height: "10px",
    marginRight: "8px",
    width: "10px",
  },
  legendLabel: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "12px",
    textTransform: "uppercase",
  },
}));
