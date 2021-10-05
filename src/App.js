import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { withAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header";
import Home from "./components/Home";
import Favourite from "./components/Favourite";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import LoginButton from "./components/LoginButton";
import Footer from "./components/Footer";
export class App extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/">
              {isAuthenticated ? <Home /> : <LoginButton />}
            </Route>
            <Route exact path="/favWatches">
            {isAuthenticated ? <Favourite /> : <LoginButton />}

              
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
