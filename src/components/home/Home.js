import React, { Component} from 'react'
import { Container, Image, Card } from 'semantic-ui-react'
import './Home.css'

class Home extends Component {
    render(){
        return(
            <Container><br /><br/>
                <div className="home-intro">
                <h1>Welcome, <em>{localStorage.getItem("name")}</em>!</h1>
                </div><br /><br/>
                <Card.Group itemsPerRow={4}>
                    <Card className="home-card" color='teal' image={"https://i.pinimg.com/originals/ef/75/6c/ef756cbe6b205f7d3c7fa0164866f168.gif"} description="Plan your trip!"/>
                    <Card className="home-card" color='blue' image={"https://i.pinimg.com/originals/c9/2b/b0/c92bb012c14b048d69efd505e83b89b9.gif"} description="Explore more adventures!"/>
                    <Card className="home-card" color='violet' image={"https://i.pinimg.com/originals/bb/d8/59/bbd859a9164858e5daa6379bbbfab0dc.gif"} description="Enjoy the views!"/>
                    <Card className="home-card" color='purple' image={"https://i.pinimg.com/originals/e7/40/d4/e740d47a35d7736c41f3f0b70079296b.gif"} description="Share your experience!"/>
                </Card.Group>

            </Container>
        )
    }
}

export default Home