import React, { Component} from 'react'
import { Container, Button } from 'semantic-ui-react'
import './Explore.css'
import {Item, Placeholder } from 'semantic-ui-react'

const paragraph = <Placeholder>
<Placeholder.Line />
<Placeholder.Line />
<Placeholder.Line />
</Placeholder>
const image = 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'

class Explore extends Component {
    render(){
        return(
            <Container><br/><br/>
            <div className="explore-title">
            <h1>Explore Trips</h1></div>

            <Item.Group>
                <Item>
                <Item.Image size='tiny' src={image} />

                <Item.Content>
                    <Item.Header>Arrowhead Valley Camp</Item.Header>
                    <Item.Meta>
                    <span className='price'>$1200</span>
                    <span className='stay'>1 Month</span>
                    </Item.Meta>
                    <Item.Description>{paragraph}</Item.Description><br/>
                    <Button type="submit" color="blue">Details!</Button>
                </Item.Content>
                </Item>
                <br/>
                <Item>
                <Item.Image size='tiny' src={image} />

                <Item.Content>
                    <Item.Header>Buck's Homebrew Stayaway</Item.Header>
                    <Item.Meta content='$1000 2 Weeks' />
                    <Item.Description>{paragraph}</Item.Description><br/>
                    <Button type="submit" color="blue">Details!</Button>
                </Item.Content>
                </Item>
                <br/>
                <Item>
                <Item.Image size='tiny' src={image} />
                <Item.Content>
                    <Item.Header>Arrowhead Valley Camp</Item.Header>
                    <Item.Meta>$1200 1 Month</Item.Meta>
                    <Item.Description>{paragraph}</Item.Description><br/>
                    <Button type="submit" color="blue">Details!</Button>
                </Item.Content> 
                </Item>
            </Item.Group>
            
            
            </Container>
        )
    }
}

export default Explore