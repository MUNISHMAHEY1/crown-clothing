import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signIn' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
