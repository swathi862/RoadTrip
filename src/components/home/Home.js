import React, { Component} from 'react'
import { Container, Image, Grid } from 'semantic-ui-react'
import './Home.css'

class Home extends Component {
    render(){
        return(
            <Container><br />
                <div className="home-intro">
                <h1>Welcome, <em>{localStorage.getItem("name")}</em>!</h1>
                </div><br />
                <Image  src={"https://im4.ezgif.com/tmp/ezgif-4-104d7061cb38.gif"} centered />

            </Container>
        )
    }
}

export default Home