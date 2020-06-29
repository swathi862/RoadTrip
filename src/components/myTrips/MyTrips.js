import React, { Component} from 'react'
import { Container, Icon, Placeholder, Item, Tab, Button } from 'semantic-ui-react'
import './MyTrips.css'

const paragraph = <Placeholder>
<Placeholder.Line />
<Placeholder.Line />
<Placeholder.Line />
<Placeholder.Line />
<Placeholder.Line />
</Placeholder>
const image = 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'

const panes = [
    { menuItem: 'Future Trips', render: () => <Tab.Pane>
        <div>
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
                <Button type="submit" color="teal">Completed!</Button>
            </Item.Content>
            </Item>
            <br/>
            <Item>
            <Item.Image size='tiny' src={image} />

            <Item.Content>
                <Item.Header>Buck's Homebrew Stayaway</Item.Header>
                <Item.Meta content='$1000 2 Weeks' />
                <Item.Description>{paragraph}</Item.Description><br/>
                <Button type="submit" color="teal">Completed!</Button>
            </Item.Content>
            </Item>
            <br/>
            <Item>
            <Item.Image size='tiny' src={image} />
            <Item.Content>
                <Item.Header>Arrowhead Valley Camp</Item.Header>
                <Item.Meta>$1200 1 Month</Item.Meta>
                <Item.Description>{paragraph}</Item.Description>
                <Button type="submit" color="teal">Completed!</Button>
            </Item.Content> 
            </Item>
            </Item.Group>
        </div></Tab.Pane> },
    { menuItem: 'Completed Trips', render: () => <Tab.Pane>
                <div>
            <Item.Group>
            <Item>
            <Item.Image size='tiny' src={image} />

            <Item.Content>
                <Item.Header>Buck's Homebrew Stayaway</Item.Header>
                <Item.Meta content='$1000 2 Weeks' />
                <Item.Description>{paragraph}</Item.Description><br/>
                <Button type="submit" color="violet">Share!</Button>
            </Item.Content>
            </Item>
            </Item.Group>
        </div>
    </Tab.Pane> },
    // { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

class MyTrips extends Component {
    render(){
        return(
            <Container><br/><br/>
                <div className="myTrips-page">
                    <h1>My Saved Trips <Icon name='paper plane outline'/></h1>
                </div><br/>
                <Tab panes={panes} />

            </Container>
        )
    }
}

export default MyTrips
