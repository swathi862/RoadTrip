import React, { Component} from 'react'
import { Container, Item } from 'semantic-ui-react'
import './Explore.css'
import ExploreCard from './ExploreCard'
import TripManager from '../../modules/TripManager'


class ExploreList extends Component {
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
    render(){
        return(
            <Container><br/><br/>
                <div className="explore-title">
                <h1>Explore Trips</h1></div>
                <Item.Group>
                    {this.state.trips.map(trip => 
                        <ExploreCard key={trip.id} trip={trip}/>
                    )}
                    
                </Item.Group>
            </Container>
        )
    }
}

export default ExploreList