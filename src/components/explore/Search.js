import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment, Label, Icon, Input, Form } from 'semantic-ui-react'
import './Explore.css'
import TripManager from '../../modules/TripManager'

export default class SearchExampleStandard extends Component {
  state = {
    searchResults: [],
    searchText: "",
    loadingStatus: false
}

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
        console.log(evt.target.value)
    };

  handleSearchChange = () => {

    TripManager.searchTrips(this.state.searchText).then((results)=>{
        this.setState({searchResults: results})
    })

  }

  render() {
    return (
    <Form>
        <Form.Field>
        <Input icon='search' placeholder='Search Trips' id="searchText" onChange={this.handleFieldChange} onSearchChange={this.handleSearchChange}/>
        </Form.Field>
    </Form>
    )
  }
}