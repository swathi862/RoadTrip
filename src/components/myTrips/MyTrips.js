import React, { Component} from 'react'
import { Container } from 'semantic-ui-react'
import './MyTrips.css'

class MyTrips extends Component {
    render(){
        return(
            <Container><br/><br/>
            <div className="myTrips-page">
            <h1>My Saved Trips</h1>
            </div>
            </Container>
        )
    }
}

export default MyTrips
