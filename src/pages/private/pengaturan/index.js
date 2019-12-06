import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Users from "./users";
import Store from "./store";
export default function Settings() {
  return (
    <Switch>
      <Route path="/pengaturan/pengguna" component={Users} />
      <Route path="/pengaturan/toko" component={Store} />
      <Redirect to="/pengaturan/pengguna" />
    </Switch>
  );
}
