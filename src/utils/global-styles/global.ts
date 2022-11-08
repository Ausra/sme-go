import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";

export const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
      font-size: 16px;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    body {
      margin: 0;
      padding: 65px 0 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    main {
      width: 90%;
      margin: 0 auto;
    }

    :root {
      font-family: ${primaryFont};
    }
    @supports (font-variation-settings: normal) {
      :root {
        font-family: ${primaryFont};
      }
    }
`;
