import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const CoronaWalrus = lazy(() => import("./components/CoronaWalrus"));
const Home = lazy(() => import("./screens/Home"));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  </Router>
);

export default App;
