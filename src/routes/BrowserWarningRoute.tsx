import React from "react";
import { Redirect, Route, RouteProps, useLocation } from "react-router-dom";

import { useLocalStorage } from "../shared/hooks";
import { isBrowserAllowed } from "../shared/helpers";

const isRecommendedBrowser = isBrowserAllowed();

const BrowserWarningRoute = ({ children, ...rest }: RouteProps) => {
  const [browserAllowed] = useLocalStorage("browserAllowed", false);
  const location = useLocation();

  return isRecommendedBrowser || browserAllowed ? (
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
