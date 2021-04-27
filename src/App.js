import React from "react";

import Nav from "./components/Nav";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
require("dotenv").config();

function App() {
    return (
        <Router>
            <div className="row" id="navRow">
                <Nav />
            </div>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
