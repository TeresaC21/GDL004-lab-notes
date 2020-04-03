import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Notes from './components/notes/Notes';


function App() {
  return (
  /*  <Router>
     <Switch>
       <Route exact path="/" component={Login} />
       <Route exact path="/register" component={Register} />
       <Route exact path="/notes" component={Notes} />
     </Switch>
   </Router> */
   <Login />
  );
}

export default App;
