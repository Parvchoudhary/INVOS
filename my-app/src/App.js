import './Pages/Home/Home.css';
import React from 'react';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Contact from './Pages/Contact/Contact';
import Manage from './Pages/Manage/Manage';

import {Route} from 'react-router-dom';

function App(){
  return (
    <>
     <Route exact path="/" component={Home}></Route>
     <Route exact path="/Dashboard" component={Dashboard}></Route>
     <Route exact path="/Contact" component={Contact}></Route>
     <Route exact path="/Manage" component={Manage}></Route>
    </>
  );
}


export {App}