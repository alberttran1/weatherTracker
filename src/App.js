import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'

import LandingPage from "./Pages/LandingPage/LandingPage";
import MainPage from './Pages/MainPage/MainPage'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainPage/>
        </Route>
        <Route path="/">
          <LandingPage/>
        </Route>
      </Switch>
    </Router>
  );
}