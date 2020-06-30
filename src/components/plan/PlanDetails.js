import React, { Component} from 'react'
import { Container, Button, Form } from 'semantic-ui-react'
import './Plan.css'
import MapsManager from '../../modules/MapsManager'
import TripManager from '../../modules/TripManager';

function round3(value) {
    return (Math.round(value * 1e3) / 1e3).toFixed(3);
  }
function round2(value) {
    return (Math.round(value * 1e2) / 1e2).toFixed(2);
  }
class Plan extends Component {
    state = {
        tripName: "",
        mileage: this.props.mileage,
        duration: this.props.duration,
        activities: [],
        loadingStatus: false
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

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewTrip = (evt) => {
        evt.preventDefault();

        const trip = {
            name: this.state.tripName,
            mileage : round3(this.props.mileage),
            duration: round3(this.props.duration),
            cost : round2(((this.props.mileage)/24.7) * 2.17),
            completed: false
        }

        TripManager.post(trip)
        .then(()=> window.alert("Your trip has been saved to the 'My Trips' page!"))
    }

    // otherDetails = []
    componentDidMount(){
        // TripManager.getActivities()
        //     .then(result =>{
        //         console.log(result)
        //         this.setState({
        //             activities: result.name
        //         })
        //         console.log(this.state.activities)
        //     })
    }

    render(){
        return(
            <Container><br /><br />
            <Form>
                <div className="plan-stats">
                <h1>Trip Details</h1></div><br/>
                <Form.Field>
                <label>Name</label>
                <input type="text" placeholder='Name of Trip' id="tripName" onChange={this.handleFieldChange}/>
                </Form.Field>
                <p><strong>Mileage:</strong> {round3(this.props.mileage)} miles </p>
                <p><strong>Estimated Time:</strong> {round3(this.props.duration)} minutes </p>
                <p><strong>Estimated Cost:</strong> $ {round2(((this.props.mileage)/24.7) * 2.17)}</p>
                {/* <select
                    className="form-control"
                    placeholder="Select an employee"
                    id="activityId"
                    value={this.state.activityId}
                    onChange={this.handleFieldChange}
                >
                    <option value="0">Activities: </option>
                    {this.state.activities.map(activity =>
                        <option key={activity.id} value={activity.id}>
                        {activity.name}
                        </option>
                    )}                        
                </select> */}
                <div className="plan-stats">
                    <Button inverted color="green" type="submit" disabled={this.state.loadingStatus} onClick={this.constructNewTrip}>Save Trip</Button>
                </div>
                </Form>
            </Container>

        )
    }
}

export default Plan