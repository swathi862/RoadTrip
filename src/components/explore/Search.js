import React, { Component } from 'react'
import { Input, Form, Item } from 'semantic-ui-react'
import './Explore.css'
import TripManager from '../../modules/TripManager'
import ExploreCard from './ExploreCard'

class Search extends Component {

    handleSearch = evt => {
        evt.preventDefault()
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState({stateToChange});

        this.props.getSearchText(evt.target.value)
    };


  render() {
    return (
    <>
        <Form className="search-bar">
            <Form.Field>
            <Input icon='search' placeholder='Search Trips' id="searchText" onKeyUp={this.handleSearch} />
            </Form.Field>
        </Form>
    </>
    )
  }
}

export default Search