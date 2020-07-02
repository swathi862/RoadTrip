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
        searchText: " "
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
        console.log("search Results", this.state.searchResults)

    };

    filterResults(trip){
        for(let i = 0; i < this.state.searchResults.length; i++){
            return trip.name === this.state.searchResults[i].title
        }
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
                {/* <Form className="search-bar">
                    <Form.Field>
                        <Input icon='search' placeholder='Search Trips' id="searchText" onChange={this.handleSearch} />
                    </Form.Field>
                </Form><br/> */}
                {/* <Item.Group>
                    {this.state.trips.map(trip => 
                        trip.share === true ? <ExploreCard key={trip.id} trip={trip}/> : "" 
                    )}

                </Item.Group> */}
            </Container>
        )
    }
}

export default ExploreList