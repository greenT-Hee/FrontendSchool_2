// import React, { Fragment } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Homepage  from './page/Homepage';
import Docs from "./page/Docs";
import Study from "./page/Study";
import Comunnity from "./page/Community";
import Blog from "./page/Blog";
import "./reset.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route
            path = "/"
            exact
            component={Homepage}
          >
          </Route>
          <Route
            path = "/docs"
            exact
            component={Docs}
          >
          </Route>
          <Route
            path = "/blog"
            exact
            component={Blog}
          >
          </Route>
          <Route
            path = "/study"
            exact
            component={Study}
          >
          </Route>
          <Route
            path = "/community"
            exact
            component={Comunnity}
          ></Route>
      </BrowserRouter>
    </>
  );
}

export default App;