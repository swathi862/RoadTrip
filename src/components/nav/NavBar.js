import React, {Component} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {  Menu } from 'semantic-ui-react'
import './NavBar.css'

class NavBar extends Component{
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    handleLogout = (e, { name }) => {
        this.setState({ activeItem: name })
        localStorage.clear()
    }

    render(){
        const { activeItem } = this.state

        return(
            <><br/>
            <header>
            
                <h1 className="site-title">Roadtrip USA<br />
                <small><em>"And so the adventure begins..."</em></small></h1>
            </header>

            {/* <Navbar.Collapse className="justify-content-end">
			// 		<Navbar.Text>
			// 			<a href="/" onClick={()=> localStorage.clear()}>Logout</a>
			// 		</Navbar.Text>
			// 	</Navbar.Collapse> */}

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
                            // as={NavLink} to="/"
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