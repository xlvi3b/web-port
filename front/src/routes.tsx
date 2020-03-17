import * as React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SideHeader from './components/templates/sideHeader';
import Home from './components/pages/home';
import About from './components/pages/about';
import Users from './components/pages/users';

export default () => (
  <Router>
    <div>
      <SideHeader>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
        </Switch>
      </SideHeader>
    </div>
  </Router> 
);
