import React from 'react';
import './App.css';

import {
  Route,
  useParams,
  Routes,
  BrowserRouter
} from 'react-router-dom';

import NavBar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import NoScreen from './screens/NoScreen';
import FooterBar from './components/FooterBar';
import SingleProductScreen from './screens/SingleProductScreen';

// wrapper cuz useParams() cannot be used in class component
// directly, so wrap it in a functional component and
// pass it in as a prop
const ProductIdWrapper = () =>{
  // using the value of ':productId' in the params
  const {productId} = useParams();
  return <SingleProductScreen productId = {productId}/>
}

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <NavBar/>
        <BrowserRouter>
        <Routes>
        <Route path = "*" element = {<NoScreen/>}/>
          <Route exact path = "/" element = {<HomeScreen/>}/>
          <Route path = "/products" element = {<ProductsScreen/>}/>
          <Route path = "/products/:productId" element = {<ProductIdWrapper/>}/>
        </Routes>
        </BrowserRouter>

        <FooterBar/>
      </div>
    );
  }
}

export default App;