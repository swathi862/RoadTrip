import React, { Component} from 'react'
import { Container, Icon, Item, Tab } from 'semantic-ui-react'
import './MyTrips.css'
import MyTripsCard from './MyTripsCard'
import TripManager from '../../modules/TripManager'

const panes = []

class MyTrips extends Component {
    state={
        trips: []
    }

    componentDidMount(){
        TripManager.getAll()
        .then(trip =>{
            this.setState({
                trips: trip
            })
        })
    }

    handleComplete = (id) => {
        TripManager.patchComplete(id)
        .then(()=> {
            TripManager.getAll()
            .then(trip =>{
                this.setState({
                    trips: trip
                })
            })
            window.alert("Trip moved to 'Completed Trips' tab!")
        })
    }

    handleDeleteMyCompletedTrip = (id) => {
        TripManager.patchDeleteMyTrip(id)
        .then(()=> {
            TripManager.getAll()
            .then(trip =>{
                this.setState({
                    trips: trip
                })
            })
            window.alert("Trip deleted from 'Completed Trips' tab!")
        })
    }

    handleShare = () => {
        // evt.preventDefault();

        const trip = {
            name: this.state.tripName,
            destination: this.state.destination,
            mileage : this.state.trips.mileage,
            duration: this.state.trips.duration,
            cost : this.state.trips.cost,
            completed: this.state.trips.completed,
            share: true,
            rating: this.state.rating,
            review: this.state.review
        }

        TripManager.post(trip)
        .then(()=> window.alert("Your trip has been shared to the 'Explore' page!"))
    }

    handleDelete = (id) => {
        this.setState({loadingStatus: true})
        TripManager.delete(id)
        .then(() => {
            TripManager.getAll().then(trip =>
            this.setState({ trips: trip}))
            window.alert("You deleted a trip!")
        })
    }

    panes = [
        { menuItem: 'Future Trips', render: () => <Tab.Pane>                
                <div>
                    <Item.Group>
                    {this.state.trips.map(trip =>
                        trip.completed === false ? <MyTripsCard key={trip.id} trip={trip} handleComplete={this.handleComplete} handleDelete={this.handleDelete}/> : "" 
                        )}
                    </Item.Group>
                </div></Tab.Pane> },
        { menuItem: 'Completed Trips', render: () => <Tab.Pane>
                <div>
                    <Item.Group>
                    {this.state.trips.map(trip =>
                        trip.completed === true ? <MyTripsCard key={trip.id} trip={trip} handleComplete={this.handleComplete} handleDelete={this.handleDeleteMyCompletedTrip}/> : "" 
                        )}
                    </Item.Group>
                </div></Tab.Pane> },        
    ]

    render(){
        return(
            <Container><br/><br/>
                <div className="myTrips-page">
                    <h1>My Saved Trips <Icon name='paper plane outline'/></h1>
                </div><br/>
                <Tab panes={this.panes}/>

            </Container>
        )
    }
}

export default MyTrips
