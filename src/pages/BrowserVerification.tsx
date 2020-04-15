import React, { useCallback } from "react";
import { useHistory, useLocation, Redirect, Switch } from "react-router-dom";
import { useClipboard } from "use-clipboard-copy";

// assets
import dead from "../assets/browser-verify/dead.svg";
import chromeIcon from "../assets/browser-verify/chrome-icon.svg";
import firefoxIcon from "../assets/browser-verify/firefox-icon.svg";
import rigthArrow from "../assets/browser-verify/right-arrow.svg";
import nuuvemIcon from "../assets/browser-verify/logo-nuuvem.svg";

import { useLocalStorage } from "../shared/hooks";
import { isBrowserAllowed } from "../shared/helpers";
import {
  Wrapper,
  Cover,
  Icon,
  BackgroundBlur,
  Title,
  P,
  LineBoldText,
  DownloadActions,
  DownloadButton,
  Actions,
  CopyButton,
  ContinueButton,
  NuuvemButton,
} from "../shared/common/styles";

const isRecommendedBrowser = isBrowserAllowed();

const BrowserVerification = () => {
  const [browserAllowed, setBrowserAllowed] = useLocalStorage(
    "browserAllowed",
    false
  );
  const clipboard = useClipboard({
    onSuccess() {
      alert("Link was copied successfully!");
    },
  });
  const history = useHistory();
  const location = useLocation();
  // @ts-ignore
  const { from } = location.state || { from: { pathname: "/" } };

  const handleSetVerified = useCallback(() => {
    setBrowserAllowed(true);
    history.replace(from);
  }, [setBrowserAllowed, from, history]);

  const handleCopyClick = useCallback(() => {
    const url = window.location.origin;

    clipboard.copy(url);
  }, [clipboard]);

  if (isRecommendedBrowser || browserAllowed) {
    return (
      <Switch>
        <Redirect to={from} />
      </Switch>
    );
  }

  return (
    <>
      <BackgroundBlur />
      <Cover>
        <Wrapper>
          <Icon src={dead} alt="X-(" />
          <Title>Unsupported browser</Title>
          <P>
            For your best experience, try one of the browsers below on your{" "}
            <LineBoldText>desktop</LineBoldText>:
          </P>
          <DownloadActions>
            <DownloadButton
              href="https://www.google.com/intl/pt-BR/chrome/"
              target="_blank"
            >
              <Icon src={chromeIcon} alt="Google Chrome" />
              <span>Chrome</span>
            </DownloadButton>
            <DownloadButton
              href="https://www.mozilla.org/pt-BR/firefox/new/"
              target="_blank"
            >
              <Icon src={firefoxIcon} alt="Google Chrome" />
              <span>Firefox</span>
            </DownloadButton>
          </DownloadActions>
          <Actions>
            <P>
              Here's the link to the game, copy it and open on the new browser
            </P>
            <CopyButton onClick={handleCopyClick}>Copy link</CopyButton>
            <ContinueButton onClick={handleSetVerified}>
              Continue anyway <img alt="arrow to right" src={rigthArrow} />{" "}
            </ContinueButton>
          </Actions>
        </Wrapper>
      </Cover>
      <NuuvemButton href="https://nuuvem.com" target="_blank">
        <img src={nuuvemIcon} alt="Go to Nuuvem" />
      </NuuvemButton>
    </>
  );
};

export default BrowserVerification;
