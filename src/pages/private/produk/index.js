import React from "react";
import { Switch, Route } from "react-router-dom";
import GridProduk from "./grid";
import EditProduk from "./edit";

function Produk() {
  return (
    <Switch>
      <Route component={GridProduk} />
      <Route path="/produk/edit/:produkId" component={EditProduk} />
    </Switch>
  );
}
export default Produk;
