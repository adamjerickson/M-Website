import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Work01 from './01/Work01';

import '../../App.css';

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
    font-size: 41px;
    font-weight: 500;
    color: #b7b7b7;
    margin-bottom: 39px;
  }

  li.selected {
    font-size: 55px;
    font-weight: 600;
    color: black;
  }
`

const WorkMain = styled.div`
  
`

const Work = () => {
  return (
    <div>
      <Header />
      <Spacer height="100px" />
      <WorkContainer>
        <WorkNav>
          <li className="selected">01.</li>
          <li>02.</li>
          <li>03.</li>
          <li>04.</li>
          <li>05.</li>
          <li>06.</li>
          <li>07.</li>
          <li>08.</li>
          <li>09.</li>
          <li>10.</li>
        </WorkNav>
        <WorkMain>
          <Work01/>
        </WorkMain>
      </WorkContainer>
      <Footer />
    </div>
  );
}

export default Work;
