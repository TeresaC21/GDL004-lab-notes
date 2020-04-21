import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
    <Router /* basename={window.location.pathname || ''} */>
     <Switch>
       <Route exact path="/" component={Login} />
       <Route exact path="/register" component={Register} />
       <Route exact path="/home" component={Home} />
       <Route render={()=> <Notfound />} /> 
     </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
/*
const isAuthenticated = true;
{
  isAuthenticated ? 

  : <Redirect to="/" />
      } */