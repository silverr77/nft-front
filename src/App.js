
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home';
import Nft from './pages/nft'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={`/nft-generator/:id`}>
            <Nft />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
