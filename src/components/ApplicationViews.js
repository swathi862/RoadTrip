import React, { Component } from "react";
import Home from "./home/Home";
// import Plan from './plan/Plan'
// import Explore from './explore/Explore'
import ExploreList from './explore/ExploreList'
import MyTripsList from './myTrips/MyTripsList'
import { Route, Redirect } from "react-router-dom";
// import Login from "./auth/Login";
import RoadTrip from './RoadTrip'
import Map from "./plan/Map";

class ApplicationViews extends Component {
	// isAuthenticated = () => localStorage.getItem("credentials") !== null;
  render() {
    
    return (
      <React.Fragment>

        {/* <Route exact path="/" component={RoadTrip} /> */}

        <Route
          exact
          path="/home"
          render={(props) => {
            return <Home {...props} />;
            // if (this.isAuthenticated()) {
            //   return <Home {...props} />
            // } else {
            //   return <Redirect to="/" />
            // }
          }}
        />

        <Route
          exact
          path="/plan"
          render={(props) => {
            return <Map {...props} />;
            // if (this.isAuthenticated()) {
            //   return <Map {...props} />
            // } else {
            //   return <Redirect to="/" />
            // }
          }}
        />

        <Route
          exact
          path="/explore"
          render={(props) => {
            return <ExploreList {...props} />;
            // if (this.isAuthenticated()) {
            //   return <ExploreList {...props} />
            // } else {
            //   return <Redirect to="/" />
            // }
          }}
        />

        <Route
          exact
          path="/mytrips"
          render={(props) => {
            return <MyTripsList {...props} />;
            // if (this.isAuthenticated()) {
            //   return <MyTripsList {...props} />
            // } else {
            //   return <Redirect to="/login" />
            // }
          }}
        />

      </React.Fragment>
    );
  }
}

export default ApplicationViews;