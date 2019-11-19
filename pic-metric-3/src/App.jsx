import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login        from './components/Login';
import Register     from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    
    <Router>
      {/* <div>
        <Dashboard />
      </div> */}
      <div className = 'App'>
        <Route exact path = '/'   render = { ( props ) =>
          <Login { ...props } /> } />
        <Route path = '/register' render = { ( props ) =>
          <Register { ...props } /> } />
        <Switch>
          <PrivateRoute path  = '/protected'>
            <Route exact path = '/protected' component = { Dashboard } />
          </PrivateRoute>
          <Route   exact path = '/login'     render    = { ( props ) =>
            <Login { ...props } /> } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
