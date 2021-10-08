import styled from 'styled-components';
import { Switch, Route, NavLink } from "react-router-dom";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Work01 from './01/Work01';
import Work02 from './02/Work02';
import Work03 from './03/Work03';
import Work04 from './04/Work04';
import Work05 from './05/Work05';
import Work06 from './06/Work06';
import Work07 from './07/Work07';
import Work08 from './08/Work08';
import Work09 from './09/Work09';
import Work10 from './10/Work10';

import '../../App.css';
import React from 'react';

const Spacer = styled.div`
  width: 100vw;
  height: ${props => props.height};
`
const WorkContainer = styled.section`
  margin-left: 5vw;
  margin-right: 5vw;
  display: grid;
  grid-template-columns: 100px auto;

`
const WorkNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 39px;
  }

  a {
    font-size: 41px;
    font-weight: 500;
    color: #b7b7b7;
  }
  
  a.selected {
    font-size: 55px;
    font-weight: 600;
    color: black;
  }
`

const Work = () => {
  return (
    <div>
      <Header />
      <Spacer height="100px" />
      <WorkContainer>
        <WorkNav>
          <li><NavLink activeClassName="selected" to="/work/01" exact>01.</NavLink></li>
          <li><NavLink activeClassName="selected" to="/work/02" exact>02.</NavLink></li> {/* Turn these into <Link> elements */}
          <li><NavLink activeClassName="selected" to="/work/03" exact>03.</NavLink></li>
          <li><NavLink activeClassName="selected" to="/work/04" exact>04.</NavLink></li>
          <li><NavLink activeClassName="selected" to="/work/05" exact>05.</NavLink></li>
          <li><NavLink activeClassName="selected" to="/work/06" exact>06.</NavLink></li>
          <li><NavLink activeClassName="selected" to="/work/07" exact>07.</NavLink></li>
          <li><NavLink activeClassName="selected" to="/work/08" exact>08.</NavLink></li>
          <li><NavLink activeClassName="selected" to="/work/09" exact>09.</NavLink></li>
          <li><NavLink activeClassName="selected" to="/work/10" exact>10.</NavLink></li>
        </WorkNav>
        <div>
          <Switch>
            <Route path={"/work/01"} component={Work01} />
            <Route path={"/work/02"} component={Work02} />
            <Route path={"/work/03"} component={Work03} />
            <Route path={"/work/04"} component={Work04} />
            <Route path={"/work/05"} component={Work05} />
            <Route path={"/work/06"} component={Work06} />
            <Route path={"/work/07"} component={Work07} />
            <Route path={"/work/08"} component={Work08} />
            <Route path={"/work/09"} component={Work09} />
            <Route path={"/work/10"} component={Work10} />
          </Switch>
        </div>
      </WorkContainer>
      <Footer />
    </div>
  );
}

export default Work;
