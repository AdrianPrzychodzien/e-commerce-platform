import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/Header';
import Spinner from './components/spinner/spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const Homepage = lazy(() => import('./pages/homepage/Homepage'))
const ShopPage = lazy(() => import('./pages/shop/Shop'))
const SignInAndSignUpPage = lazy(() => import('./pages/signInSignUp/signInSignUp'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout'))


const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />} >
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin' render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                  <SignInAndSignUpPage />
                )}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);