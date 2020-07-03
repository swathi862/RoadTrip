import React, { Component } from 'react'
import { Input, Form, Item } from 'semantic-ui-react'
import './Explore.css'
import TripManager from '../../modules/TripManager'
import ExploreCard from './ExploreCard'

class Search extends Component {
  state = {
    searchResults: [],
    searchText: "",
    loadingStatus: false
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


  render() {
    return (
    <>
        <Form className="search-bar">
            <Form.Field>
            <Input icon='search' placeholder='Search Trips' id="searchText" onChange={this.handleSearch} />
            </Form.Field>
        </Form>
        {/* <Item.Group>
            {this.state.searchResults.map(trip => 
                trip.share === true ? <ExploreCard key={trip.id} trip={trip}/> : "" 
            )}
        </Item.Group> */}
    </>
    )
  }
}

export default Search