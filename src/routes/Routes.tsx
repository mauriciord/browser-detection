import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// browser verification lock route
import BrowserWarningRoute from "./BrowserWarningRoute";

import App from "./App";
import { BrowserVerification, NoMatch } from "../pages";

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <BrowserWarningRoute exact path="/">
            <Redirect to="/app/dashboard" />
          </BrowserWarningRoute>
          <Route path="/browser-verify" component={BrowserVerification} />
          <BrowserWarningRoute path="/app" component={App} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
