import React, { Component} from 'react'
import { Placeholder, Item, Button, Modal, Icon, Form, TextArea, Rating, Header, Container } from 'semantic-ui-react'
import './MyTrips.css'

const paragraph = <Placeholder>
<Placeholder.Line />
<Placeholder.Line />
<Placeholder.Line />
<Placeholder.Line />
<Placeholder.Line />
</Placeholder>
const image = 'https://image.freepik.com/free-vector/empty-highway-road-desert-going-far-horizon-cartoon_33099-1473.jpg'

class MyTripsCard extends Component {
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
                        <Button color='red' >
                            <Icon name='remove' /> Delete
                        </Button>
                        <Button color='yellow'>
                            <Icon name='pencil' /> Edit
                        </Button>
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
                </Modal.Content>
                <Rating icon='star' size={'massive'} defaultRating={0} maxRating={5} />
                <Form>
                    <Container>
                    <TextArea placeholder="Add a Review. Share some tips and suggestions you've gathered" />
                    </Container>
                </Form>
                <Modal.Actions>
                  {/* <Button color='red' onClick={()=> this.setState({ showModal: false })}>
                    <Icon name='remove' /> Cancel
                  </Button> */}
                  <Button color='green'>
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