import React, { Component } from "react";
import Home from "./home/Home";
// import Plan from './plan/Plan'
// import Explore from './explore/Explore'
import ExploreList from './explore/ExploreList'
import MyTripsList from './myTrips/MyTripsList'
import { Route } from "react-router-dom";
// import Login from "./auth/Login";
import Map from "./plan/Map";

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
            return <Map {...props} />;
          }}
        />

        <Route
          exact
          path="/explore"
          render={(props) => {
            return <ExploreList {...props} />;
          }}
        />

        <Route
          exact
          path="/mytrips"
          render={(props) => {
            return <MyTripsList {...props} />;
          }}
        />

      </React.Fragment>
    );
  }
}

export default ApplicationViews;