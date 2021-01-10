import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {GameContext} from "./GameContext";


import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";
import useInterval from "../hooks/use-interval.hook";

const { items } = require("./data");

function App(props) {
  const {numCookies, setNumCookies, cookiesPerSecond} = useContext(GameContext);

    useInterval(() => {
    setNumCookies(numCookies + cookiesPerSecond);
  }, 1000);

  window.addEventListener('unload', (event) => {
    let exitTime = JSON.stringify(Math.floor(Date.now() / 1000));
    localStorage.setItem('exitedWindow', exitTime)
  });

  window.addEventListener('load', (event) => {
    let loadTime = JSON.stringify(Math.floor(Date.now() / 1000));
    let timeClosed = localStorage.getItem('exitedWindow');
    let timeAway = loadTime - timeClosed;
    let accumulatedCookies = timeAway * cookiesPerSecond;
    setNumCookies(numCookies + accumulatedCookies);
  });

  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Router>
    </>
  );
}

export default App;
