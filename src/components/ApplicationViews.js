import React, { Component } from "react";
import Home from "./home/Home";
import ExploreList from './explore/ExploreList'
import MyTripsList from './myTrips/MyTripsList'
import { Route } from "react-router-dom";
import Map from "./plan/Map";
import Help from './help/Help'
class ApplicationViews extends Component {
	// isAuthenticated = () => localStorage.getItem("credentials") !== null;
  render() {
    
    return (
      <React.Fragment>

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

        <Route
          exact
          path="/help"
          render={(props) => {
            return <Help {...props} />;
          }}
        />  

      </React.Fragment>
    );
  }
}

export default ApplicationViews;