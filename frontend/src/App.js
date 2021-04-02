import React from 'react';
import HomePage from './components/HomeScreen/HomePage';
import MenuPage from './components/MenuPage/MenuPage';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OrderPage from './components/OrderItem/OrderPage';
import CartPage from './components/CartPage/CartPage';
import Shipping from './components/CartPage/Shipping';
import Placeorder from './components/CartPage/Placeorder';
import LoginScreen from './components/Login/Login';
import RegisterScreen from './components/Register';

function App() {
  return (
    <Router>
      {' '}
      <Navbar /> <Route path="/menu" component={MenuPage} />{' '}
      <Route path="/order/:id" component={OrderPage} />{' '}
      <Route path="/cart/:id?" component={CartPage} />{' '}
      <Route path="/shipping" component={Shipping} />{' '}
      <Route path="/login" component={LoginScreen} />{' '}
      <Route path="/register" component={RegisterScreen} />{' '}
      <Route path="/placeorder/:id" component={Placeorder} />{' '}
      <Route exact path="/" component={HomePage} /> {/* < Footer / > */}{' '}
    </Router>
  );
}

export default App;
