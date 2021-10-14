import styled from 'styled-components';
import WorkMain from '../WorkMain';
import WorkCenter from '../WorkCenter';
import WorkTitle from '../WorkTitle';
import WorkDescription from '../WorkDescription';
import './Work04.css';
import img01 from './images/01.jpg';
import img02 from './images/02.jpg';
import img03 from './images/03.jpg';
import img04 from './images/04.jpg';
import img05 from './images/05.jpg';

const Work04Line2 = styled.div`
  margin-left: 94px;
`
const WorkImage = styled.div`
  position: relative;

  img {
    min-width: 100%;
    max-width: 100%;
    margin-bottom: 1em;
  }
`

const Work04 = () => {
  return (
    <WorkMain>
      <WorkCenter>
        <WorkTitle>
          <span>da bears &amp;</span> <Work04Line2 className="larger lower">da bulls.</Work04Line2>
        </WorkTitle>
        <WorkImage className="Work">
          <img className="img01" alt="Best Option Trading logo" src={img01} />
          <img className="img02" alt="Best Option Trading home page" src={img02} />
          <img className="img03" alt="Orca.Trade home page" src={img03} />
          <img className="img04" alt="Team page" src={img04} />
          <img className="img05" alt="Testimonials page" src={img05} />
        </WorkImage>
      </WorkCenter>
      <WorkDescription>
        <h3>Growth hacking, the start-up way - Orca Web App</h3>
        <h3 className="workYear">2014</h3>
        <p>Option trading can be rough, but Best Option Trading has created a product so traders don't have to go it alone. Orca.Trade is a tool for beginning traders that allows them to compose professional trading strategies within seconds, leveling the playing field with professionals. Building the web app product and both brands from the ground up, I played product designer on the team and created the marketing plan for growth and scalability. Designing the websites for each brand and orchestrating the digital strategy, and customer development, both brands were been positioned for sustainable growth.</p>
        <p>Version 1 - Go big or go home. Version 1 is always an exercise of getting your idea out on paper… even though we know it won’t be the one that sticks. This version was used in the beginning and then iterated upon in the final stages to use the same typographic styles, yet create a cleaner more sophisticated look.</p>
        <p>Version 2 - Alas, the cleaner and more sophisticated look. We created a product that was easier to parse, easier to navigate, and easier to execute seamless and strategic trades.</p>
      </WorkDescription>
    </WorkMain>
  )
}

export default Work04;