import React from "react";
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
  useLocation,
} from "react-router-dom";

import { useLocalStorage } from "../shared/hooks";
import { isBrowserAllowed } from "../shared/helpers";

const isRecommendedBrowser = isBrowserAllowed();

type Params = {
  children: React.ReactNode;
};

const BrowserWarningRoute = ({ children, ...rest }: RouteProps) => {
  const [browserAllowed] = useLocalStorage("browserAllowed", false);
  const location = useLocation();

  console.log({ isRecommendedBrowser, browserAllowed, location });

  return isRecommendedBrowser && browserAllowed ? (
    children ? (
      <Route render={() => children} {...rest} />
    ) : (
      <Route {...rest} />
    )
  ) : (
    <Redirect
      to={{
        pathname: "/browser-verify",
        state: { from: location },
      }}
    />
  );
};

export default BrowserWarningRoute;
