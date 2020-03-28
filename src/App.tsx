import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CoronaWalrus from "./CoronaWalrus";
import Home from "./Home";

const App: React.FC = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/corona">Corona</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/corona">
        <CoronaWalrus />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
