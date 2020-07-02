import React, { Component} from 'react'
import { Placeholder, Item, Button, Modal, Icon, Form, TextArea, Rating, Header, Container } from 'semantic-ui-react'
import './MyTrips.css'
import TripManager from '../../modules/TripManager'
import MyTripsEdit from './MyTripsEdit'

const paragraph = <Placeholder>
<Placeholder.Line />
<Placeholder.Line />
<Placeholder.Line />
<Placeholder.Line />
<Placeholder.Line />
</Placeholder>
const image = 'https://image.freepik.com/free-vector/empty-highway-road-desert-going-far-horizon-cartoon_33099-1473.jpg'

class MyTripsCard extends Component {
    state={
        name: this.props.trip.name,
        destination: this.props.trip.destination,
        mileage : this.props.trip.mileage,
        duration: this.props.trip.duration,
        cost : this.props.trip.cost,
        completed: this.props.trip.completed,
        share: true,
        rating: 0,
        review: "",
        loadingStatus: false
    }

    handleChangeOnRate= (e, { rating }) => {
        e.preventDefault();
        this.setState({rating: rating})
        // console.log(this.state.rating)
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    handleShare = () => {
        // evt.preventDefault();

        const trip = {
            name: this.state.name,
            destination: this.state.destination,
            mileage : this.state.mileage,
            duration: this.state.duration,
            cost : this.state.cost,
            completed: this.state.completed,
            share: this.state.share,
            rating: this.state.rating,
            review: this.state.review,
            id: this.props.trip.id
        }

        TripManager.update(trip)
        .then(()=> window.alert("Your trip has been shared to the 'Explore' page!"))
    }

    render(){
        return(
            <>
            <Item>
            <Item.Image size='small' src={image} />

            <Item.Content><br/>
                <Item.Header>{this.props.trip.name}</Item.Header><br/><br/>

                <Modal className="myTripDetailsModal" size='small' trigger={<Button type="submit" color="blue">Details!</Button>} >
                        <Header icon='car' content={this.props.trip.name} />
                        <Modal.Content>
                            <h3 className="destination"><em>{this.props.trip.destination}</em></h3>
                            <span className='mileage'><strong>Mileage:</strong> {this.props.trip.mileage} Miles</span><br/>
                            <span className='duration'><strong>Total Approx. Driving Time:</strong> {this.props.trip.duration} Minutes</span><br/>
                            <span className='price'><strong>Estimated Gas Cost (with $2.17 per gallon):</strong> ${this.props.trip.cost}</span><br/>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='red' onClick={()=> this.props.handleDelete(this.props.trip.id)}>
                                <Icon name='remove' /> Delete
                            </Button>
                            <MyTripsEdit trip={this.props.trip} handleRefresh={this.props.handleRefresh()}/>
                        </Modal.Actions>
                </Modal>
                
                {this.props.trip.completed === false ? <Button type="submit" color="teal" onClick={()=> this.props.handleComplete(this.props.trip.id)}>Completed!</Button> : 
                this.props.trip.share === false ?
                <Modal className="shareModal" size='small' trigger={<Button type="submit" color="violet" >Share!</Button>} >
                <Header icon='share' content='Share Your Trip with the Community!' />
                <Modal.Content>
                  <p>
                    Share your trip on our 'Explore' page, so you can inspire other adventurers like yourself!
                  </p>
                  <h3>{this.props.trip.name}</h3>
                </Modal.Content>
                <Rating icon='star' size={'massive'} id="rating" rating={this.state.rating} defaultRating={0} maxRating={5} onRate={this.handleChangeOnRate} /><br/><br/><br/>
                <Form>
                    <Container>
                    <TextArea placeholder="Add a Review. Share some tips and suggestions you've gathered" onChange={this.handleFieldChange} id="review"/>
                    </Container>
                </Form>
                <Modal.Actions>
                  <Button color='green' disabled={this.state.loadingStatus} onClick={this.handleShare}>
                    <Icon name='heart' /> Share
                  </Button>
                </Modal.Actions>
              </Modal> 
              : ""
             }
            </Item.Content>
            </Item>
            <br/>
            </>
        )
    }
}

export default MyTripsCard