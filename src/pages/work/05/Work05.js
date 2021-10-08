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

const Work05Line2 = styled.div`
  margin-left: 72px;
`
const WorkImage = styled.div`
  img {
    min-width: 100%;
    max-width: 100%;
    margin-bottom: 1em;
  }
`

const Work05 = () => {
  return (
    <WorkMain>
      <WorkCenter>
        <WorkTitle>
          <span>the law gets</span> <Work05Line2 className="larger lower">its own site.</Work05Line2>
        </WorkTitle>
        <WorkImage>
          <img alt="Build Your Character page" src={img01} />
          <img alt="Why Choose Nebraska Law page" src={img02} />
          <img alt="We've Opened Doors; Your Move page" src={img03} />
          <img alt="Make History With Your Future page" src={img04} />
          <img alt="Calendar and Activites page" src={img05} />
        </WorkImage>
      </WorkCenter>
      <WorkDescription>
        <h3>Big 10 College Receives New User Experience and Strategy</h3>
        <h3 className="workYear">2015</h3>
        <p>The University of Nebraska College of Law aims to harness their unique strengths to improve the law and the administration of justice and to educate lawyers and leaders who will pursue satisfying careers and contribute positively to the world. As the marketing director and user experience designer, I designed a new brand strategy that would uphold the philosophies of the college and a strategic plan that would resonate with the demographic of incoming first-year students. To run in tandem with the new strategies in place, I created a new website that encompassed the story the college was telling and an experience that was consistent throughout the University network.</p>
        <p>The beginning stages of the user strategy began with creating the user profiles of alumni, new students, current students and faculty. After mapping out the journey each would use for the site, I conducted a card sort with all groups represented. Once the card sort was compete I moved the team on to wireframes, and then prototypes with current and new student testing. Once the feedback loop was in full swing, iterations were completed to run in accordance with the incoming feedback the team was receiving. Once all revisions were made, I worked with the administration team and the communications department at the university for full launch. There was a very short window of time for this build and we made the deadline comfortably.</p>
      </WorkDescription>
    </WorkMain>
  )
}

export default Work05;