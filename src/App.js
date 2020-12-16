import './App.css';
import { fetchCovidInfo } from './redux/middlewares';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Header from './Components/header';
import Dashboard from './pages/dashboard';

function App() {
  const dispatch = useDispatch();
  const { covidInfo } = useSelector(state => state);

 useEffect(() => {
   dispatch(fetchCovidInfo());
 }, [dispatch]);

 console.log('covid', covidInfo);

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
