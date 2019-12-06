import React from "react";
import { Switch, Route } from "react-router-dom";
import Settings from "./pengaturan";
import Produk from "./produk";
import Transaksi from "./transaction";
import Home from "./home";
export default function Private() {
  return (
    <Switch>
      <Route path="/pengaturan" component={Settings} />
      <Route path="/produk" component={Produk} />
      <Route path="/transaksi" component={Transaksi} />
      <Route component={Home} />
    </Switch>
  );
}
