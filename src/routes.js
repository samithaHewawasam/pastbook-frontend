import React from "react";
import { App } from "./App";
import { PhotoGrid } from "./PhotoGrid";
import { UserGrid } from "./UserGrid";
import { AuthRoute } from "./Components";
import { Home } from "./Home";
import { Login } from "./Login";

import { Route, Switch } from "react-router-dom";

export default () => {
  return (
    <>
      <Switch>
        <Route path="/login" exact render={props => <Login {...props} />} />
        <App>
          <Route path="/" exact render={() => <Home />} />
          <AuthRoute path="/photo-grid" Component={<PhotoGrid />} />
          <AuthRoute path="/your-galleries" Component={<UserGrid />} />
        </App>
      </Switch>
    </>
  );
};
