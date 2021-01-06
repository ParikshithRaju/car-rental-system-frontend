import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CarsView from './components/ProductsView';
import {Switch,Route} from 'react-router-dom';

import {useDispatch} from 'react-redux';


import {fetchAllCars} from './redux/middleware/carFetichingThunks';

import ProductsView from './components/ProductsView';

import CarDetailedView from './components/CarDetailedView';

import {useEffect} from 'react'

function App() {

  const dispatch = useDispatch();


  useEffect(()=>{
    // dispatch(fetchAllCars());
  },[])

  return (
    <body>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/productsView" component={ProductsView} />
        {/* <Route exact path="/carView/:carId" component = {CarDetailedView} /> */}
      </Switch>
    </div>
    </body>
  );
}

export default App;
