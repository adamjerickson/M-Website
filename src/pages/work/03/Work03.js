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
import img08 from './images/08.jpg';
import img09 from './images/09.jpg';

const Work03Line2 = styled.div`
  margin-left: 94px;
`
const WorkImage = styled.div`
  img {
    min-width: 100%;
    max-width: 100%;
    margin-bottom: 1em;
  }
`

const Work03 = () => {
  return (
    <WorkMain>
      <WorkCenter>
        <WorkTitle>
          <span>ui builders</span> <Work03Line2 className="larger lower">galore</Work03Line2>
        </WorkTitle>
        <WorkImage>
          <img alt="WedgeStudio login page" src={img01} />
          <img alt="Module selector" src={img02} />
          <img alt="Template chooser" src={img03} />
          <img alt="Dashboard" src={img04} />
          <img alt="UI builder start page" src={img05} />
          <img alt="UI builder with comments" src={img06} />
          <img alt="UI builder share modal" src={img07} />
          <img alt="UI builder with in process UI" src={img08} />
          <img alt="UI builder with comments open" src={img09} />
        </WorkImage>
      </WorkCenter>
      <WorkDescription>
        <h3>DMSi WedgeStudio</h3>
        <h3 className="workYear">2020</h3>
        <p>As DMSi is transitioning their ERP software to the web, we needed a tool for the scrum teams to create form pages quickly. In this project, I led the design sprint that made this application that would do just that. In addition, we created a wizard for those using it the first time and the capability to share the templates and comment on the build for approvals.</p>
        <p>User testing proved the success of this model, and teams were excited at the possibility of utilizing this. Once refined through design, the assigned PM created an epic and a scrum team to work on this. </p>
      </WorkDescription>
    </WorkMain>
  )
}

export default Work03;