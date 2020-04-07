import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
/* import Notes from './components/notes/Notes';
import Navbar from './components/notes/Navbar';
import Sidenav from './components/notes/Sidenav'; */
import Home from './components/user/Home';

function App() {
  return (
    <Router>
     <Switch>
       <Route exact path="/" component={Login} />
       <Route exact path="/register" component={Register} />
       <Route exact path="/home" component={Home} />
     </Switch>
    </Router>
  );
}

export default App;
