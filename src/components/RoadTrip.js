import React, {Component} from 'react'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'
import Login from './auth/Login'
import Register from './auth/Register'
// import { Button } from 'react-bootstrap'
import { Button } from 'semantic-ui-react'
import './RoadTrip.css'


class RoadTrip extends Component {
    state = {
        showRegisterForm: false,
        showLoginForm: false,
        loggedIn: false,
      };

    handleLogin = () => {
      this.setState({
        loggedIn: true,
        showLoginForm: false,
        showRegisterForm: false,
      })
    }

    handleRegister = () => {
      this.setState({
        loggedIn: false,
        showLoginForm: false,
        showRegisterForm: false,
      })
    }

    componentDidMount(){
      if(localStorage !== null){
        this.setState({
          loggedIn: true
        })
      }
    }


    render(){
        return(
            <>
            {/* <div className="splash-page"></div> */}
        {/* This is what happens when the page loads-- this ternary operator checks to see if ALL of the conditions are false. If they're all false, we show both buttons i.e. the splash page*/}
        {!this.state.showLoginForm &&
        !this.state.showRegisterForm &&
        !this.state.loggedIn ? (
          <>
          <div className="splash-page"></div>
          {/* When we click on the register button, we change a property in state to true. Every time we change state, render runs again and we check ALL OF THESE CONDITIONS AGAIN */}
          {/* because we changed showRegisterForm to true, when render runs again we won't print this code because the condition on line 20 will not evaluate to true */}
      
          <Button.Group className="splash-center">
            <Button color='violet' onClick={() => this.setState({ showRegisterForm: true })}>
              Register</Button>
            <Button.Or />
            <Button primary onClick={() => this.setState({ showLoginForm: true })}>
              Login</Button>
          </Button.Group>

          </>
        ) : (
          <> </>
        )}
​
        {/* If this.state.showRegisterForm is true, which only happens if you click on the Button, show the register form*/}
        {this.state.showRegisterForm ? (
          <>
          <div className="splash-page"></div>
            <Register handleRegisterForm={this.handleRegister}/>
            {/* When they click on the register Button, we would normally be updating the db and stuff. But for now we're just changing state. In this case, we're saying that they're logged in-- so now we want them to see App Views and the nav bar. We DON'T want them to see any register or login forms. */}
          </>
        ) : (
          <></>
        )}
​
        {/* Same as above-- if this.state.showLoginForm is true, we show the login form. This would ONLY be true if we already clicked the login button on the "splash page" */}
        {this.state.showLoginForm ? (
          <>
          <div className="splash-page"></div>
            <Login handleLoginForm={this.handleLogin} />
            {/* When we click the submit button on the login form, we'd normaly be storing stuff in local storage. But for now, we're just changing state so that it re-renders. This time, we want to show them the splash page and the nav bar. We DON'T want to show them either the login or register form, so we change both of those to false. */}
          </>
        ) : (
          <></>
        )}
​
        {/* If they're logged in, load the nav bar and app views */}
        {this.state.loggedIn ? (
          <>
            <NavBar handleLoggingout={this.handleRegister} />
            <ApplicationViews />
          </>
        ) : (
          <></>
        )}
        
      </>
        )
    }
}

export default RoadTrip
