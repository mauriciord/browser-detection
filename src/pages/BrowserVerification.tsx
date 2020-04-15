import React, { useCallback } from "react";
import { useHistory, useLocation, Redirect, Switch } from "react-router-dom";

import { useLocalStorage } from "../shared/hooks";
import { isBrowserAllowed } from "../shared/helpers";

const isRecommendedBrowser = isBrowserAllowed();

const BrowserVerification = () => {
  const [browserAllowed, setBrowserAllowed] = useLocalStorage(
    "browserAllowed",
    false
  );

  const history = useHistory();
  const location = useLocation();
  // @ts-ignore
  const { from } = location.state || { from: { pathname: "/" } };

  const handleSetVerified = useCallback(() => {
    setBrowserAllowed(true);
    history.replace(from);
  }, [setBrowserAllowed, from, history]);

  if (isRecommendedBrowser && browserAllowed) {
    return (
      <Switch>
        <Redirect to={from} />
      </Switch>
    );
  }

  return (
    <div>
      <h1>Verification page</h1>
      <div>local storage: {browserAllowed.toString()}</div>
      <div>
        <button onClick={handleSetVerified}>allow browser</button>
      </div>
    </div>
  );
};

export default BrowserVerification;
