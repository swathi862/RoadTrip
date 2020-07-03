import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import {  Menu, Image, Icon } from 'semantic-ui-react'
import './NavBar.css'

class NavBar extends Component{
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    handleLogout = (e, { name }) => {
        this.setState({ activeItem: name })
        localStorage.clear()
        this.props.handleLoggingout()
    }

    render(){
        const { activeItem } = this.state

        return(
            <>
              <Image src={require('./wanderlust-logo-one.png')} centered/>

            {/* <header>
                <h1 className="site-title">Wanderlust<br />
                <small><em>"And so the adventure begins..."</em></small></h1>
            </header> */}

                  <Menu pointing secondary>
                    <Menu.Item
                      as={NavLink} to="/home"
                      name='home'
                      active={activeItem === 'home'}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      as={NavLink} to="/plan"
                      name='plan'
                      active={activeItem === 'plan'}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      as={NavLink} to="/explore"
                      name='explore'
                      active={activeItem === 'explore'}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      as={NavLink} to="/myTrips"
                      name='myTrips'
                      active={activeItem === 'myTrips'}
                      onClick={this.handleItemClick}
                    />
                   
                    <Menu.Menu position='right'>
                      <Menu.Item
                          name='help'
                          active={activeItem === 'help'}
                          // onClick={this.handleItemClick}
                        >
                          <Icon name='help circle' />
                          Help
                        </Menu.Item>
                        <Menu.Item
                            as={NavLink} to="/"
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={this.handleLogout}
                        />
                    </Menu.Menu>
                </Menu>
                  
            </>
        )
    }
}

export default NavBar