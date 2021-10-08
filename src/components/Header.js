import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.div`
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 53px;
  margin-bottom: 50px;
  display: grid;
  grid-column-templates: 150px auto 120px;
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
`

const NavMain = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 18%;
  padding-right: 18%;

  li {
    display: block;
    border: none;
    text-align: center;

    a {
      padding: 9px;
    }
  }

  @media screen and (max-width: 450px) {
    /* TODO: remove this and replace with actual change to hamburger or similar. */
    display: none;
  }
`

const NavContact = styled.div`
  grid-column: 3;
  font-weight: 600;
  font-size: 18px;
  line-height: auto;
  padding: 9px;
  text-align: right;
`

function Header() {
  return (
    <Nav>
      <NavHome>
        <a href="/index.html">mollie.</a>
      </NavHome>

      <NavMain>
        <li><NavLink activeClassName="selectedNav" to="/" exact>home</NavLink></li>
        <li><NavLink activeClassName="selectedNav" to="/work/01" exact>work</NavLink></li>
        <li><a href="speaking.html">speaking</a></li>
        <li><a href="resume.html">resume</a></li>
        <li><a href="blog.html">blog</a></li> 
      </NavMain>

      <NavContact>
        <a href="log.html">say hi.</a>
      </NavContact> 
    </Nav>
  )
}

export default Header;