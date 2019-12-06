import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registrasi from "./pages/registration";

import Login from "./pages/login";
import NotFound from "./pages/404";
import ForgotPassword from "./pages/forgotPassword";
import Private from "./pages/private";
import PrivateRoute from "./components/PrivateRoute";
import FirebaseProvider from "./components/FirebaseProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./config/theme";
function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <FirebaseProvider>
          <Router>
            <Switch>
              <PrivateRoute path="/" exact component={Private} />
              <PrivateRoute path="/pengaturan" component={Private} />
              <PrivateRoute path="/produk" component={Private} />
              <PrivateRoute path="/transaksi" component={Private} />
              <Route path="/regis" component={Registrasi} />
              <Route path="/login" component={Login} />
              <Route path="/forgotPassword" component={ForgotPassword} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </FirebaseProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
