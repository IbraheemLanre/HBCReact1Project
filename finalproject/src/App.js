import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
};

export default App;
