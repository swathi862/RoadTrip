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
        TripManager.patch(id)
        .then(()=> {
            TripManager.getAll()
            .then(trip =>{
                this.setState({
                    trips: trip
                })
            })
            window.alert("Event moved to 'Completed Trips' tab!")
        })
    }

    handleShare = () => {
        // <Modal trigger={<Button>Show Modal</Button>} closeIcon>
        //     <Header icon='archive' content='Archive Old Messages' />
        //     <Modal.Content>
        //     <p>
        //         Your inbox is getting full, would you like us to enable automatic
        //         archiving of old messages?
        //     </p>
        //     </Modal.Content>
        //     <Modal.Actions>
        //     <Button color='red'>
        //         <Icon name='remove' /> No
        //     </Button>
        //     <Button color='green'>
        //         <Icon name='checkmark' /> Yes
        //     </Button>
        //     </Modal.Actions>
        // </Modal>
    }

    panes = [
        { menuItem: 'Future Trips', render: () => <Tab.Pane>                
                <div>
                    <Item.Group>
                    {this.state.trips.map(trip =>
                        trip.completed === false ? <MyTripsCard key={trip.id} trip={trip} handleComplete={this.handleComplete}/> : "" 
                        )}
                    </Item.Group>
                </div></Tab.Pane> },
        { menuItem: 'Completed Trips', render: () => <Tab.Pane>
                <div>
                    <Item.Group>
                    {this.state.trips.map(trip =>
                        trip.completed === true ? <MyTripsCard key={trip.id} trip={trip} handleComplete={this.handleComplete}/> : "" 
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
