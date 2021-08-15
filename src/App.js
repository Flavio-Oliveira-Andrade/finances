import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Login from './pages/Login';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
