import React, { Component} from 'react'
import { Input, Button, Modal, Icon, Form, Header, Container } from 'semantic-ui-react'
import './MyTrips.css'
import TripManager from '../../modules/TripManager'

class MyTripsEdit extends Component {
    state = { 
      trips: [],
      open: false,
      name: this.props.trip.name,
      destination: this.props.trip.destination 
    }

    handleFieldChange = evt => {
      const stateToChange = {};
      stateToChange[evt.target.id] = evt.target.value;
      this.setState(stateToChange);
    };

    handleEdit = () => {
      // evt.preventDefault();

      const trip = {
          name: this.state.name,
          destination: this.state.destination,
          mileage : this.props.trip.mileage,
          duration: this.props.trip.duration,
          cost : this.props.trip.cost,
          completed: this.props.trip.completed,
          share: this.props.trip.share,
          rating: this.props.trip.rating,
          review: this.props.trip.review,
          id: this.props.trip.id
      }

      TripManager.update(trip).then(()=>
        this.props.handleRefresh()
      )
  }
  
    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
  
    render() {
      const { open } = this.state
  
      return (
        <Modal
          className="myTripEditDetailsModal"
          open={open}
          onOpen={this.open}
          onClose={this.close}
          size='small'
          trigger={
            <Button color='yellow' >
              <Icon name='pencil' /> Edit
            </Button>
          }
        >
        <Header icon='pencil' content="Edit Trip Details" />
        <Container>
        <Form>
            <Form.Field><br/>
              <Input type="text" icon='car' placeholder={this.props.trip.name} id="name" onChange={this.handleFieldChange}/>
            </Form.Field>
              <Modal.Content>
            <Form.Field>
              <input type="text" placeholder={this.props.trip.destination} id="destination" onChange={this.handleFieldChange}/>
            </Form.Field>
                {/* <h3 className="destination"><em>{this.props.trip.destination}</em></h3> */}
                <span className='mileage'><strong>Mileage:</strong> {this.props.trip.mileage} Miles</span><br/>
                <span className='duration'><strong>Total Approx. Driving Time:</strong> {this.props.trip.duration} Minutes</span><br/>
                <span className='price'><strong>Estimated Gas Cost (with $2.17 per gallon):</strong> ${this.props.trip.cost}</span><br/>
              </Modal.Content><br/>
        </Form>
        </Container>
              <Modal.Actions>
              <Button color='green' onClick={this.handleEdit}>
                  <Icon name='save outline' /> Save Changes
              </Button>
              </Modal.Actions>
        </Modal>
      )
    }
  }

  export default MyTripsEdit