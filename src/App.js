import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import SignIn_SignUp from './pages/SignIn_SignUp/SignIn_SignUp';
import Header from './components/header/Header'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignIn_SignUp} />
      </Switch>
    </div>
  );
}

export default App;
