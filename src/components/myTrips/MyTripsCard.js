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
const image = 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'

class MyTripsCard extends Component {
    render(){
        return(
            <>
            <Item>
            <Item.Image size='tiny' src={image} />

            <Item.Content>
                <Item.Header>{this.props.trip.name}</Item.Header>
                    <Item.Meta>
                    <span className='mileage'>{this.props.trip.mileage} Miles</span><br/>
                    <span className='duration'>{this.props.trip.duration} Minutes</span><br/>
                    <span className='price'>~ ${this.props.trip.cost}</span>
                    </Item.Meta>
                <Item.Description>{paragraph}</Item.Description><br/>
                <Button type="submit" color="blue">Details!</Button>
                {this.props.trip.completed === false ? <Button type="submit" color="teal" onClick={()=> this.props.handleComplete(this.props.trip.id)}>Completed!</Button> : 
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
             }
            </Item.Content>
            </Item>
            <br/>
            </>
        )
    }
}

export default MyTripsCard