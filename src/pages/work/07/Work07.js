import styled from 'styled-components';
import WorkMain from '../WorkMain';
import WorkCenter from '../WorkCenter';
import WorkTitle from '../WorkTitle';
import WorkDescription from '../WorkDescription';
import img01 from './images/01.jpg';
import img02 from './images/02.jpg';
import img03 from './images/03.jpg';
import img04 from './images/04.jpg';
import img05 from './images/05.jpg';

const Work07Line2 = styled.div`
  margin-left: 72px;
`
const WorkImage = styled.div`
  img {
    min-width: 100%;
    max-width: 100%;
    margin-bottom: 1em;
  }
`

const Work07 = () => {
  return (
    <WorkMain>
      <WorkCenter>
        <WorkTitle>
          <span>the current</span> <Work07Line2 className="larger lower">current.</Work07Line2>
        </WorkTitle>
        <WorkImage>
          <img alt="CED Home page" src={img01} />
          <img alt="CED About page" src={img02} />
          <img alt="CED Successes page" src={img03} />
          <img alt="CED Opportunities page" src={img04} />
          <img alt="CED Careers page" src={img05} />
        </WorkImage>
      </WorkCenter>
      <WorkDescription>
        <h3>An electrical company gets savvy with their recruitment</h3>
        <h3 className="workYear">2011</h3>
        <p>Consolidated Electrical Distributors (CED) is one of the nation’s largest electrical supply distribution networks, with more than 600 locations in 47 states. They distribute just about every piece of equipment that keeps your lights on, your energy flowing and your lifestyle comfortable. My team used that powerful truth to create a tagline — "We're All Around You" — a company manifesto and a dynamic, video-driven website targeting the company's sought-after target: the top 5 percent of the country's college graduates for CED's management training program. I conducted all user research, led the team in wireframing and prototyping, as well as full development. I was also integral in the new brand strategy, the creative strategy and execution, as well as the digital strategy for launch.</p>
      </WorkDescription>
    </WorkMain>
  )
}

export default Work07;