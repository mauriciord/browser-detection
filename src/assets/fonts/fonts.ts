import { createGlobalStyle } from "styled-components";

// @ts-ignore
import LatoBoldWoff from "./LatoBold/LatoBold.woff";
// @ts-ignore
import LatoBoldWoff2 from "./LatoBold/LatoBold.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Lato';
        src: local('Lato'), local('Lato'),
        url(${LatoBoldWoff2}) format('woff2'),
        url(${LatoBoldWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
