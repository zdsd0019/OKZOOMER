import React from 'react';
import './partials/global.scss'
import './App.css';
import './component/header/header.scss';
import Home from './pages/homePage'
import Page2 from './pages/page2';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/secondpage" component={Page2} />
    </Switch>
 
    </BrowserRouter>
  );
}

export default App;
