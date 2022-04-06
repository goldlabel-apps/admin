import * as React from "react";
// @ts-ignore
import * as shared from "@listingslab/shared";
// @ts-ignore
import { Provider } from "react-redux";
// @ts-ignore
import { createTheme, ThemeProvider, Box } from "@mui/material";
import Renderer from "./Renderer";

export default function Admin() {
  const { getDesignTokens } = shared;
  const darkLight = "light";
  const theme = createTheme(getDesignTokens(darkLight));

  return (
    <Provider store={shared.store}>
      <ThemeProvider theme={theme}>
        <Renderer />
      </ThemeProvider>
    </Provider>
  );
}

/*
<pre>{ JSON.stringify(admin, null, 2 )}</pre>
*/
