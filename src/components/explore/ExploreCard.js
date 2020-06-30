import React, { Component} from 'react'
import { Item, Button, Placeholder } from 'semantic-ui-react'
import './Explore.css'

const paragraph = <Placeholder>
<Placeholder.Line />
<Placeholder.Line />
<Placeholder.Line />
</Placeholder>
const image = 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'

class ExploreCard extends Component{
    render(){
        return(
            <>
                <Item>
                <Item.Image size='tiny' src={image} />

                <Item.Content>
                    <Item.Header>{this.props.trip.name}</Item.Header>
                    <Item.Meta>
                    <span className='price'>${this.props.trip.cost}</span>
                    <span className='duration'>{this.props.trip.duration} Minutes</span>
                    <span className='mileage'>{this.props.trip.mileage} Miles</span>
                    </Item.Meta>
                    <Item.Description>{paragraph}</Item.Description><br/>
                    <Button type="submit" color="blue">Details!</Button>
                </Item.Content>
                </Item>
                <br/>
            </>
        )
    }
}

export default ExploreCard