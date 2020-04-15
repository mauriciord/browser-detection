import styled from "styled-components";
import { backgroundImages, between, cover } from "polished";

// assets
import gameplay from "../../assets/browser-verify/gameplay.png";
import desktopIcon from "../../assets/browser-verify/desktop.svg";

export const Cover = styled.div`
  ${cover()};
  background-color: rgba(21, 29, 39, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;
  padding: 30px 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1024px;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

export const BackgroundBlur = styled.div`
  ${cover()};
  ${backgroundImages(`url(${gameplay})`)};
  filter: blur(10px) brightness(70%);
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.h1`
  color: #ff6666;
  font-family: "Lato", Arial, sans-serif;
  font-size: ${between("24px", "29px")};
`;

export const P = styled.p`
  color: white;
  text-align: center;
  font-size: ${between("14px", "17px")};
  font-family: "Lato", Arial, sans-serif;
`;

export const LineBoldText = styled.span`
  text-decoration: underline;
  font-weight: bold;
`;

export const DownloadActions = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DownloadButton = styled.a`
  background-color: rgba(7, 15, 25, 0.4);
  border-radius: 10px;
  min-width: 134px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 5px;
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
    margin-top: 20px;

    @media (orientation: landscape) and (max-width: 812px) {
      margin-top: 0;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const CopyButton = styled.button`
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

export const ContinueButton = styled.button`
  color: #0099cc;
  font-size: ${between("15px", "16px")};
  font-family: "Lato", Arial, sans-serif;
  font-weight: bold;
  margin-top: ${between("10px", "18px")};
  background-color: transparent;
  border: none;
`;

export const NuuvemButton = styled.a`
  text-decoration: none;
  z-index: 3;
  position: absolute;
  right: 15px;
  bottom: 15px;

  > img {
    width: 30px;
    height: 30px;

    @media (min-width: 715px) {
      width: 50px;
      height: 50px;
    }
  }
`;
