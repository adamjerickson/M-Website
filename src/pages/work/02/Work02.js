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
import img06 from './images/06.jpg';
import img07 from './images/07.jpg';

const Work02Line2 = styled.div`
  margin-left: 16px;
`
const WorkImage = styled.div`
  img {
    min-width: 100%;
    max-width: 100%;
    margin-bottom: 1em;
  }
`

const Work02 = () => {
  return (
    <WorkMain>
      <WorkCenter>
        <WorkTitle>
          <span>design systems</span> <Work02Line2 className="larger">oh my.</Work02Line2>
        </WorkTitle>
        <WorkImage>
          <img alt="early project notes" src={img01} />
          <img alt="early project notes" src={img02} />
          <img alt="user persona" src={img03} />
          <img alt="journey map" src={img04} />
          <img alt="design sketch (hand drawn)" src={img05} />
          <img alt="design sprint whiteboards" src={img06} />
          <img alt="prototype thumbnails" src={img07} />
        </WorkImage>
      </WorkCenter>
      <WorkDescription>
        <h3>A New Design System for DMSi’s Agility</h3>
        <h3 className="workYear">2017 - Present</h3>
        <p>With DMSi moving their primary tool to the web and no existing product to date, it was clear a design system needed to begin. By creating a user interface pattern library in sketch the team is able to create rapid prototypes, and rapid iteration for screen and mod completion. The system was design from the very foundational principles of design, up to color, and all the way up to components. All components have been built with atomic theory - starting with the atoms and ending at the layouts. As a design system is a product serving a product, and will never be complete, this tool is under constant monitoring and updated anytime changes are made to the UI or code structure.</p>
      </WorkDescription>
    </WorkMain>
  )
}

export default Work02;