import './App.css';
import { fetchCovidInfo } from './redux/middlewares';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import Header from './Components/Header';

function App() {

  const dispatch = useDispatch();
  const { covidInfo } = useSelector(state => state);

 useEffect(() => {
   dispatch(fetchCovidInfo());
 }, [dispatch]);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
