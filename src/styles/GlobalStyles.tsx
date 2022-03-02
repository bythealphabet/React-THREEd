import React from "react";
import { jsx, css, Global } from "@emotion/react"; /** @jsx jsx */

function GlobalStyles() {
  return (
    <Global
      styles={css`
        html {
          box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
        }
        .webgl-box {
          width: 100vw;
          height: 100vh;
        }
      `}
    />
  );
}
export default GlobalStyles;
