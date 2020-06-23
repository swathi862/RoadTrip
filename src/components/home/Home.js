import React, { Component} from 'react'
import { Container } from 'semantic-ui-react'
import './Home.css'

class Home extends Component {
    render(){
        return(
            <Container><br /><br />
            <div className="home-intro">
            <h1>Welcome, <em>{localStorage.getItem("name")}</em>!</h1>
            </div>
            </Container>

        )
    }
}

export default Home