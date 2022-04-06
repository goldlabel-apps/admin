import * as React from "react";
// @ts-ignore
import * as shared from "@listingslab/shared";
// @ts-ignore
import { Provider } from "react-redux";
import Dashboard from "./Dashboard";

export default function Admin() {
  return (
    <Provider store={shared.store}>
      <Dashboard />
    </Provider>
  );
}

/*
<pre>{ JSON.stringify(admin, null, 2 )}</pre>
*/
