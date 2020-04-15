import React, { Suspense } from "react";
import { Switch, Route, RouteComponentProps, Redirect } from "react-router-dom";

import AppContent from "../layouts/AppContent";
import { Dashboard } from "../pages";

type Params = {
  match?: string;
};

const App = ({ match }: RouteComponentProps<{}>) => (
  <AppContent>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path={`${match.path}/`}>
          <Redirect to={`${match.path}/dashboard`} />
        </Route>
        <Route exact path={`${match.path}/dashboard`} component={Dashboard} />
      </Switch>
    </Suspense>
  </AppContent>
);

export default App;
