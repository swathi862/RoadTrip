import React, { Component } from "react"
import { Form, Container, Button } from 'semantic-ui-react'
import LoginManager from '../../modules/LoginManager'
import './Login.css'

class Login extends Component {

  // Set initial state
  state = {
    email: "",
    password: "",
    name: "",
    loadingStatus: false
  }


  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  registerNewUser = (evt) => {
    console.log("I'm inside the registerNewUser function")
    evt.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      window.alert("Please input information in the fields provided below");
    } else {
      this.setState({ loadingStatus: true });
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };
      
      console.log(user);
      LoginManager.register(user).then(() =>
      window.alert("Account Created Successfully")
      );

      this.props.handleRegisterForm()
    }
  };

//   handleRegister = () =>{

//     LoginManager.loginAccount(this.state.email).then(user => {
    
//              localStorage.setItem("userId", user[0].id);
//              localStorage.setItem("name", user[0].name);
//              localStorage.setItem(
//              "credentials", {
//                  email: this.state.email,
//                  password: this.state.password
//              })
//          )
//          this.props.history.push("/home");
 
//          }
//          else{
//              window.alert(`I'm sorry! The password you entered does not exist with the email: ${this.state.email}  Please try again!`)
//          }
//      }
     
//      })
//   }


  render() {

    return (
      <>
      <br />
          <Container className="login-form center">
          <h2 className="login-heading">Register New User</h2>
            <Form>
            {/* onSubmit={this.handleRegister}> */}
              <Form.Field>
                <label>Name</label>
                <input type="text" id="name" onChange={this.handleFieldChange} placeholder="Enter your name" required="" />
              </Form.Field>
              <Form.Field>
                <label>Email address</label>
                <input type="email" id="email" onChange={this.handleFieldChange} placeholder="Enter an email" required="" />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type="password" id="password" onChange={this.handleFieldChange} placeholder="Password" required=""/>
              </Form.Field>
              <div className="button-row">
                <Button positive type="submit" 
                onClick={this.registerNewUser}
                >Submit </Button>
              </div><br/>
            </Form>
          </Container>
      </>
      
    )
  }

}

export default Login