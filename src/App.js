import './App.css';
import { fetchCovidInfo } from './redux/middlewares';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();
  const { covidInfo } = useSelector(state => state);

 useEffect(() => {
   dispatch(fetchCovidInfo());
 }, [dispatch]);

  return (
    <div className="App">COVID-DASHBOARD</div>
  );
}

export default App;
