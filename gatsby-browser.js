import React from "react";
import store from "./src/state/store";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./src/theme";
import Layout from "./src/components/layout";
import UserPage from "./src/pages/user";

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {element}
      </ThemeProvider>
    </Provider>
  );
};

export const wrapPageElement = ({ element, props }) => {
  const path = props.location.pathname;

  if (path.startsWith("/user")) {
    element = <UserPage location={props.location} />;
  }

  return <Layout>{element}</Layout>;
};
