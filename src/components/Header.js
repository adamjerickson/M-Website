import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Hamburger from '../images/hamburger.svg';
import './Header.css';

const Nav = styled.div`
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 53px;
  margin-bottom: 50px;
  display: grid;
  grid-column-templates: 150px auto 120px;
  position: relative;
}
`

const NavHome = styled.div`
  grid-column: 1;
  a {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #000000;
    text-decoration: none;
  }

  li {
    display: block;
    min-width: 120px;
    float: center;
    border: none;
    position: relative;
    top: 63px;
  }
`

const NavMain = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  li {
    display: block;
    border: none;
    text-align: center;

    a {
      padding: 9px;
    }
  }

  @media screen and (max-width: 640px) {
    /* TODO: remove this and replace with actual change to hamburger or similar. */
    display: none;
  }
`
const NavContact = styled.div`
  grid-column: 3;
  font-weight: 600;
  font-size: 18px;
  line-height: auto;
  text-align: right;

  a {
    padding-bottom: 9px;
  }

  @media screen and (max-width: 640px) {
    /* TODO: remove this and replace with actual change to hamburger or similar. */
    display: none;
  }
`
class HamburgerButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggle = (event) => {
    if (this.state.open === false) {
      this.setState({open: true});
    } else {
      this.setState({open: false});
    }
  }
  
  render() {
    return (
      <div className="hamburgerHelper">
        <div className="hamburgerButton" onClick={this.toggle}><img alt="Hamburger Menu Icon" src={Hamburger} /></div>
        { this.state.open ? <NavSmall /> : null }
      </div>
    )
  }
}

class NavSmall extends React.Component {
  render() {
    return (
      <ul className="navSmall">
        <li><NavLink activeClassName="selectedNav" to="/" exact>home</NavLink></li>
        <li><NavLink activeClassName="selectedNav" to="/work/01" >work</NavLink></li>
        <li><NavLink activeClassName="selectedNav" to="/speaking" >speaking</NavLink></li>
        <li><NavLink activeClassName="selectedNav" to="/resume" >resume</NavLink></li>
        <li><NavLink activeClassName="selectedNav" to="/contact" exact>say hi.</NavLink></li>
      </ul>
    );
  }
}

function Header() {
  return (
    <Nav>
      <NavHome>
        <a href="/index.html">mollie.</a>
      </NavHome>

      <NavMain>
        <li><NavLink activeClassName="selectedNav" to="/" exact>home</NavLink></li>
        <li><NavLink activeClassName="selectedNav" to="/work/01" >work</NavLink></li>
        <li><NavLink activeClassName="selectedNav" to="/speaking" >speaking</NavLink></li>
        <li><NavLink activeClassName="selectedNav" to="/resume" >resume</NavLink></li>
      </NavMain>

      <NavContact>
        <NavLink activeClassName="selectedNav" to="/contact" exact>say hi.</NavLink>
      </NavContact>
      <HamburgerButton />
    </Nav>
  )
}

export default Header;