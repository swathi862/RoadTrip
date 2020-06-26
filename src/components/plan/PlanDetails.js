import React, { Component} from 'react'
import { Container, Button } from 'semantic-ui-react'
import './Plan.css'
import MapsManager from '../../modules/MapsManager'

class Plan extends Component {
    state = {
        mileage: 0,
        duration: 0,
    }
    // handleFetch=()=>{
    //     MapsManager.getDirections()
    //     .then(result => {
    //     console.log(result)
    //     this.setState({
    //         mileage: result.routes[0].distance,
    //         duration: result.routes[0].duration,
    //     })
    //     }
    //     )
    // }

    componentDidMount(){
        // this.handleFetch()
        MapsManager.getDirections()
        .then(result => 
        this.setState({
            mileage: result.routes[0].distance,
            duration: (result.routes[0].duration)/60,
        })
        )
    }

    render(){
        return(
            <Container><br /><br />
                <div className="plan-stats">
                <h1>Trip Details</h1></div><br/>
                <p>From (start) to (finish/furthest point)</p>
                <p>Mileage: {this.state.mileage} meters </p>
                <p>Estimated Time: {this.state.duration} minutes </p>
                <p>Estimated Cost: </p>
                <p>Types of Activities available: (i.e. Food and Entertainment, Hiking, Fishing, Skiing)</p>
                <div className="plan-stats">
                    <Button inverted color="green" type="submit">Save Trip</Button>
                </div>
            
            </Container>

        )
    }
}

export default Plan