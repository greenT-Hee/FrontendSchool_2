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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route
            path = "/CloneReact"
            exact
            component={Homepage}
          >
          </Route>
          <Route
            path = "/CloneReact/docs"
            exact
            component={Docs}
          >
          </Route>
          <Route
            path = "/CloneReact/blog"
            exact
            component={Blog}
          >
          </Route>
          <Route
            path = "/CloneReact/study"
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