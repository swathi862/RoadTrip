import React, { Component} from 'react'
import { Container, Item, Form, Input } from 'semantic-ui-react'
import './Explore.css'
import ExploreCard from './ExploreCard'
import TripManager from '../../modules/TripManager'
import Search from './Search'


class ExploreList extends Component {
    state={
        trips: [],
        searchText: ""
    }

    getSearchText=(text)=>{
        this.setState({
            searchText: text
        })
        console.log(this.state.searchText)
    }

    componentDidMount(){
        TripManager.getAllWithoutUserId()
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
                <h1>Explore Trips</h1></div><br/>
                <Search getSearchText={this.getSearchText} /> <br/>

                <Item.Group>
                     {this.state.trips
                    .filter(trip => {
                        return trip.name.toLowerCase().includes(`${this.state.searchText.toLowerCase()}`)
                    })
                    .map(trip => 
                        trip.share === true ? <ExploreCard key={trip.id} trip={trip}/> : "" 
                    )}
                </Item.Group>
                   
            </Container>
        )
    }
}

export default ExploreList