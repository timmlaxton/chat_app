import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './home';
import About from './about';
import Contact from './contact';
import Projects from './projects';


const Main = () => (
  <Switch>
  <Route exact path="/" component={Home} />
  <Route  path="/about" component={About} />
  <Route  path="/projects" component={Projects} />
  <Route  path="/contact" component={Contact} />
  </Switch>
)

export default Main;
