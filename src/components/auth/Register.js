import React, { Component } from "react"
import { Form, Container, Button, Image, Label, Icon } from 'semantic-ui-react'
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

   LoginManager.loginAccount(this.state.email).then(user => {
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      window.alert("Please input information in the fields provided below");
    } else if(user.length !== 0){
      window.alert("This email already has an account registed with it. Please register with another email.");
    }
    else{
      this.setState({ loadingStatus: true });
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };
      
      console.log(user);
      LoginManager.register(user).then(() =>
      window.alert(`Registered new account under ${this.state.email}`)
      );

      this.props.handleRegisterForm()
    }
    })
  }

  render() {

    return (
      <>
      <br />
          <Container className="login-form center">
          <Image className="splash-image" src={require('./wanderlust-logo.png')} centered/>
          <h2 className="register-heading">Register New User</h2>
            <Form>
            {/* onSubmit={this.handleRegister}> */}
              <Form.Field>
                <Label as='a' color='teal' size={'large'} ribbon>Name</Label>
                <input type="text" id="name" onChange={this.handleFieldChange} placeholder="Enter your name" required="" />
              </Form.Field>
              <Form.Field>
                <Label as='a' color='teal' size={'large'} ribbon>Email Address</Label>
                <input type="email" id="email" onChange={this.handleFieldChange} placeholder="Enter an email" required="" />
              </Form.Field>
              <Form.Field>
                <Label as='a' color='teal' size={'large'} ribbon>Password</Label>
                <input type="password" id="password" onChange={this.handleFieldChange} placeholder="Password" required=""/>
              </Form.Field>
              <div className="button-row">
                <Button color='green' type="submit" onClick={this.registerNewUser}>
                  <Icon name='send' size={'large'} /> Submit
                </Button>
                <Button color='red' onClick={()=>this.props.handleCancel()}>
                  <Icon name='user cancel' size={'large'} /> Cancel
                </Button>
              </div><br/>
            </Form>
          </Container>
      </>
      
    )
  }

}

export default Login