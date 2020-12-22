/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Box from "@material-ui/core/Box";
import { toast } from "react-toastify";
import { fetchCovidInfo } from "./redux/middlewares";
import Header from "./Components/header";
import Dashboard from "./pages/dashboard";
import { selectInfoError } from "./redux/covidInfoSlice";
import GlobalCases from "./Components/global-cases";
import CountiesList from "./Components/countries-list";
import Map from "./Components/map";
import GlobalTable from "./Components/global-table";
import CaseChart from "./Components/case-chart";
import { selectCurrentBoard } from "./redux/currentBoardSlice";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function App() {
  const dispatch = useDispatch();
  const currentBoard = useSelector(selectCurrentBoard);
  const apiError = useSelector(selectInfoError);

  useEffect(() => {
    dispatch(fetchCovidInfo());
  }, [dispatch]);

  useEffect(() => {
    if (apiError) {
      toast.error("API error. Please reload the page or try later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [apiError]);

  const renderSwitch = (param) => {
    switch (param) {
      case 0:
        return <Dashboard />;
      case 1:
        return <GlobalCases />;
      case 2:
        return <CountiesList />;
      case 3:
        return <Map />;
      case 4:
        return <GlobalTable />;
      case 5:
        return <CaseChart />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App">
      <Header />
      <Box m={1}>{renderSwitch(currentBoard)}</Box>
    </div>
  );
}

export default App;
