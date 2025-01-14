import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Notfound from './components/layout/Notfound';
import Home from './components/user/Home';
import { AuthProvider } from './components/auth/Auth';
 import PrivateRoute from './components/auth/PrivateRoute'; 

function App() {
 
  return (
    <AuthProvider>
      <Router /* basename={process.env.PUBLIC_URL} */>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/home" component={Home} />
          <Route render={()=> <Notfound />} /> 
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
