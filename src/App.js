import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./pages/home";
import Nft from "./pages/nft";
import NftFooter from "./layout/footer/footer";
import NftHeader from "./layout/header/nftHeader";

function App() {
  return (
    <>
      <Router>
        <NftHeader />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={`/nft-generator/:id`}>
            <Nft />
          </Route>
        </Switch>
        <NftFooter />
      </Router>
    </>
  );
}

export default App;
