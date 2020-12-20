import "./App.css";
import { fetchCovidInfo } from "./redux/middlewares";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Header from "./Components/header";
import Dashboard from "./pages/dashboard";
import { selectAllCountries } from "./redux/covidInfoSlice";

function App() {
  const dispatch = useDispatch();
  const countries = useSelector(selectAllCountries);
  console.log("countries", countries);

  useEffect(() => {
    dispatch(fetchCovidInfo());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Box m={1}>
        <Dashboard />
      </Box>
    </div>
  );
}

export default App;