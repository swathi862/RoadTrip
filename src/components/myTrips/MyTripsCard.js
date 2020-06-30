import React, { Component} from 'react'
import { Placeholder, Item, Button } from 'semantic-ui-react'
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
                {this.props.trip.completed === false ? <Button type="submit" color="teal" onClick={()=> this.props.handleComplete(this.props.trip.id)}>Completed!</Button> : <Button type="submit" color="violet" onClick={()=> this.props.handleComplete(this.props.trip.id)}>Share!</Button> }
            </Item.Content>
            </Item>
            <br/>
            </>
        )
    }
}

export default MyTripsCard