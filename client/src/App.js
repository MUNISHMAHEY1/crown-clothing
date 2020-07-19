import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/Header';
import { GlobalStyle } from './global.styles';
import { selectCurrentUser } from './redux/user/UserSelector';
import { checkUserSession } from './redux/user/UserActions';
import Spinner from './components/spinner/Spinner';

const HomePage = lazy(() => import('./pages/homepage/HomePage'));
const ShopPage = lazy(() => import('./pages/shop/ShopPage'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/SignInAndSignUpPage'));
const CheckoutPage = lazy(() => import('./pages/checkout/CheckoutPage'));
const ContactPage = lazy(() => import('./pages/contactpage/ContactPage'));

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]); // useEffect will work only is there is change in checkUserSession

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signIn' 
            render={() => currentUser ? 
              (<Redirect to="/"/>) 
              : <SignInAndSignUpPage />} />
          <Route exact path="/checkout" component={CheckoutPage} /> 
          <Route exact path="/contact" component={ContactPage} />    
        </Suspense>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
