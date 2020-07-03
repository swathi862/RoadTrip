import React, { Component} from 'react'
import { Container, Item, Form, Input } from 'semantic-ui-react'
import './Explore.css'
import ExploreCard from './ExploreCard'
import TripManager from '../../modules/TripManager'
import Search from './Search'


class ExploreList extends Component {
    state={
        trips: [],
        searchResults: [],
        arrayToUse: [],
        searchText: ""
    }

    handleSearch = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState({stateToChange,
        searchText: evt.target.value});
        console.log(this.state.searchText)

        TripManager.searchTrips(this.state.searchText).then((results)=>{
            this.setState({searchResults: results})
        })
        console.log("search Results", this.state.searchResults.length)

        if (this.state.searchResults.length > 0) {
            this.setState({ arrayToUse : this.state.searchResults})
        } else{
            this.setState({ arrayToUse : this.state.trips})
        }

        console.log(this.state.searchResults.length)
    };

    filterResults(trip){
        return trip.name.includes(this.state.searchText)
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
                <Search /> <br/>

                <Item.Group>
                    {this.state.searchResults.length > 0 ?
                      this.state.searchResults.map(trip => 
                        trip.share === true ? <ExploreCard key={trip.id} trip={trip}/> : "") :
                      this.state.trips.map(trip => 
                        trip.share === true ? <ExploreCard key={trip.id} trip={trip}/> : "")
                    }
                </Item.Group>
                    {/* {this.state.trips
                    .filter(function(trip){
                        return trip.name.includes(`${this.state.searchText}`)
                    })
                    .map(trip => 
                        trip.share === true ? <ExploreCard key={trip.id} trip={trip}/> : "" 
                    )} */}
            </Container>
        )
    }
}

export default ExploreList