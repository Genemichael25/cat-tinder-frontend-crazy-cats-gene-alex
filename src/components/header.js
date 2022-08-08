import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class Header extends Component {
  render() {
    return(
      <header>
         <div className="Header">
         <h1 style={{fontSize:"100px"}}>Savannah Tinder</h1>
             <Nav style={{fontSize:"30px"}}>
                <NavItem>
                    <NavLink style={{color: "#900000"}} to="/" className="nav-link">Home</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink style={{color: "#900000"}} to="/catindex" className="nav-link">Meet our Members</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{color: "#900000"}} to="/catnew" className="nav-link">New Member</NavLink>
                </NavItem>
              </Nav>
            </div>
      </header>
    )
  }
}
export default Header
