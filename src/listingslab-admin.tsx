import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Admin from "./Admin";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Admin,
  errorBoundary(err, info, props) {
    console.warn("admin", err, info, props);
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
