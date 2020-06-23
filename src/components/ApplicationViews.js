import React, { Component } from "react";
import Home from "./home/Home";
import Plan from './plan/Plan'
import Explore from './explore/Explore'
import MyTrips from './myTrips/MyTrips'
import { Route } from "react-router-dom";
// import Login from "./auth/Login";
// import Map from "./plan/Map";

class ApplicationViews extends Component {
	// isAuthenticated = () => localStorage.getItem("credentials") !== null;
  render() {
    
    return (
      <React.Fragment>

        {/* <Route exact path="/" component={Login} /> */}

        <Route
          exact
          path="/home"
          render={(props) => {
            return <Home {...props} />;
          }}
        />

        <Route
          exact
          path="/plan"
          render={(props) => {
            return <Plan {...props} />;
          }}
        />

        <Route
          exact
          path="/explore"
          render={(props) => {
            return <Explore {...props} />;
          }}
        />

        <Route
          exact
          path="/mytrips"
          render={(props) => {
            return <MyTrips {...props} />;
          }}
        />

      </React.Fragment>
    );
  }
}

export default ApplicationViews;