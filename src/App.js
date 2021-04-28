import React from "react";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Accession from "./pages/Accesion";

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

                <Route exact path="/Home" component={Home} />
                <Route exact path="/Accession" component={Accession} />
            </Switch>
        </Router>
    );
}

export default App;
