import React, { useCallback } from "react";
import { useHistory, useLocation, Redirect, Switch } from "react-router-dom";
import styled from "styled-components";
import { between, cover, backgroundImages } from "polished";

// assets
import dead from "../assets/browser-verify/dead.svg";
import chromeIcon from "../assets/browser-verify/chrome-icon.svg";
import firefoxIcon from "../assets/browser-verify/firefox-icon.svg";
import rigthArrow from "../assets/browser-verify/right-arrow.svg";
import gameplay from "../assets/browser-verify/gameplay.png";
import desktopIcon from "../assets/browser-verify/desktop.svg";
import nuuvemIcon from "../assets/browser-verify/logo-nuuvem.svg";

import { useLocalStorage } from "../shared/hooks";
import { isBrowserAllowed } from "../shared/helpers";
import { Wrapper, Cover } from "../shared/common/styles";

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const BackgroundBlur = styled.div`
  ${cover()};
  ${backgroundImages(`url(${gameplay})`)};
  filter: blur(10px) brightness(70%);
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  color: #ff6666;
  font-family: "Lato", Arial, sans-serif;
  font-size: ${between("24px", "29px")};
`;

const P = styled.p`
  color: white;
  text-align: center;
  font-size: ${between("14px", "17px")};
  font-family: "Lato", Arial, sans-serif;
`;

const LineBoldText = styled.span`
  text-decoration: underline;
  font-weight: bold;
`;

const DownloadActions = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const DownloadButton = styled.a`
  background-color: rgba(7, 15, 25, 0.4);
  border-radius: 10px;
  min-width: 134px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: relative;
  transition: transform 0.3s ease-out;
  text-decoration: none;

  &:hover {
    transform: translate(0, -10px);
    background-color: transparent;
    background-image: linear-gradient(180deg, #ff6f00, #b54f00);
  }

  @media (orientation: landscape) and (max-width: 812px) {
    flex-direction: row;
    justify-content: center;
  }

  &:before {
    content: "";
    width: 0;
    height: 0;
    border-top: 20px solid black;
    border-right: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 20px solid black;
    border-top-left-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;

    @media (min-width: 1025px) {
      content: none;
    }
  }

  &:after {
    content: "";
    width: 40px;
    height: 40px;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    ${backgroundImages(`url(${desktopIcon})`)};
    background-repeat: no-repeat;
    background-size: 25%;
    background-position: 5px 7px;

    @media (min-width: 1025px) {
      content: none;
    }
  }

  > img {
    width: 50px;
    height: 50px;

    @media (orientation: landscape) and (max-width: 812px) {
      width: 30px;
      height: 30px;
    }
  }

  > span {
    color: white;
    font-size: ${between("10px", "14px")};
    font-family: "Lato", Arial, sans-serif;
    padding: 0 10px;

    @media (orientation: portrait) {
      margin-top: 20px;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const CopyButton = styled.button`
  background: linear-gradient(180deg, #0099cc 0%, #006699 100%);
  box-shadow: 0 1px 0 #000000;
  border-radius: 5px;
  font-family: "Lato", Arial, sans-serif;
  font-weight: bold;
  color: white;
  border: none;
  height: ${between("30px", "40px")};
  font-size: ${between("15px", "16px")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 280px;
`;

const ContinueButton = styled.button`
  color: #0099cc;
  font-size: ${between("15px", "16px")};
  font-family: "Lato", Arial, sans-serif;
  font-weight: bold;
  margin-top: ${between("10px", "18px")};
  background-color: transparent;
  border: none;
`;

const NuuvemButton = styled.a`
  text-decoration: none;
  z-index: 3;
  position: absolute;
  right: 15px;
  bottom: 15px;

  > img {
    width: 30px;
    height: 30px;
  }
`;

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
            <CopyButton>Copy link</CopyButton>
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
