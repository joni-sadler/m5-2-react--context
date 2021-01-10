import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";

const { items } = require("./data");

function App({numCookies, setNumCookies, purchasedItems, setPurchasedItems}) {


  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game 
          numCookies={numCookies} 
          setNumCookies={setNumCookies} 
          purchasedItems={purchasedItems}
          setPurchasedItems={setPurchasedItems}/>
        </Route>
      </Router>
    </>
  );
}

export default App;
