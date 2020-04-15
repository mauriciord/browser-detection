import React from "react";

import { useLocalStorage } from "../shared/hooks";

const BrowserVerification = () => {
  const [browserAllowed, setBrowserAllowed] = useLocalStorage(
    "browserAllowed",
    false
  );

  return (
    <div>
      <h1>Verification page</h1>
      <div>local storage: {browserAllowed}</div>
      <div>
        <button onClick={() => setBrowserAllowed(true)}>allow browser</button>
      </div>
    </div>
  );
};

export default BrowserVerification;
