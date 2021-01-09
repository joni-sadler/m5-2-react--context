import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";

const { items } = require("./data");

function usePersistedState(defaultValue, key) {
  const [state, setState] = React.useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

function App(props) {

  const [purchasedItems, setPurchasedItems] = usePersistedState({
      cursor: 0,
      grandma: 0,
      farm: 0,
    }, 'purchased-items');

  const [numCookies, setNumCookies] = usePersistedState(1000, 'num-cookies');

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
