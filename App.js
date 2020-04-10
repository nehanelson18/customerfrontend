import React from "react";
import Nav from "./components/Nav";
import Home from "./Home";
import Edit from "./Edit";
import Billing from "./Billing";
import Loggedin from "./Loggedin";
import Account from "./Account";


import Loading from "./components/Loading";
import { MemoryRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute.js"

import Make from "./Make"
import { useAuth0 } from "./react-auth0-spa";
import "./App.css";
import Profile from "./components/Profile";
import history from "./utils/history";
import MakeReservation from "./Make";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }
  else return (
    <MemoryRouter>
      <Router history={history}>
        <Nav />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/" component={Loggedin} />

          <PrivateRoute path="/Edit" component={Edit} />
          <PrivateRoute path="/Make" component={MakeReservation} />
          <PrivateRoute path="/Billing" component={Billing} />
          <PrivateRoute path="/Account" component={Account} />

        </Switch>
      </Router>
    </MemoryRouter>
  );

}

export default App;