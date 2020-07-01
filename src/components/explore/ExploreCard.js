import React, { Component} from 'react'
import { Item, Button, Placeholder, Modal, Header, Icon, Container, TextArea, Form, Rating } from 'semantic-ui-react'
import './Explore.css'

const paragraph = <Placeholder>
<Placeholder.Line />
<Placeholder.Line />
<Placeholder.Line />
</Placeholder>
const image = 'https://dslv9ilpbe7p1.cloudfront.net/kKsOoFCQhn3CNpe69B21bw_store_banner_image.png'

class ExploreCard extends Component{
    render(){
        return(
            <>
                <Item>
                <Item.Image size='small' src={image} />

                <Item.Content>
                    <Item.Header>{this.props.trip.name}</Item.Header>
                    <Item.Meta>
                    <span className='price'>${this.props.trip.cost}</span>
                    <span className='duration'>{this.props.trip.duration} Minutes</span>
                    <span className='mileage'>{this.props.trip.mileage} Miles</span>
                    </Item.Meta>
                    <Item.Description>{paragraph}</Item.Description><br/>

                    <Modal className="detailsModal" size='small' trigger={<Button type="submit" color="blue">Details!</Button>} >
                        <Header icon='car' content={this.props.trip.name} />
                        <Modal.Content>
                            <h3 className="destination"><em>{this.props.trip.destination}</em></h3>
                            <span className='mileage'><strong>Mileage:</strong> {this.props.trip.mileage} Miles</span><br/>
                            <span className='duration'><strong>Total Approx. Driving Time:</strong> {this.props.trip.duration} Minutes</span><br/>
                            <span className='price'><strong>Estimated Gas Cost (with $2.17 per gallon):</strong> ${this.props.trip.cost}</span><br/>
                        </Modal.Content><hr/>
                        <Rating icon='star' size={'massive'} defaultRating={this.props.trip.rating} maxRating={5} disabled/><br/><br/>
                        <Container><h3 className='review'><small>"{this.props.trip.review}"</small> </h3></Container><br/>
                        <Modal.Actions>
                        <Button color='green'>
                            <Icon name='save outline' size={'large'} /> Save to 'My Trips'
                        </Button>
                        </Modal.Actions>
                    </Modal>
                    
                </Item.Content>
                </Item>
                <br/>
            </>
        )
    }
}

export default ExploreCard