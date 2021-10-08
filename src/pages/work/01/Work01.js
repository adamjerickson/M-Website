import styled from 'styled-components';
import WorkMain from '../WorkMain';
import WorkCenter from '../WorkCenter';
import WorkTitle from '../WorkTitle';
import WorkDescription from '../WorkDescription';
import img01 from './images/01.jpg';
import img03 from './images/03.jpg';
import img04 from './images/04.jpg';
import img05 from './images/05.jpg';
import img06 from './images/06.jpg';
import img07 from './images/07.jpg';
import img08 from './images/08.jpg';
import img09 from './images/09.jpg';


const Work01Line2 = styled.div`
  margin-left: 22px;
`
const Work01Line3 = styled.div`
  margin-left: 367px;
  line-height:67.1px;
`
const WorkImage = styled.div`
  img {
    min-width: 100%;
    max-width: 100%;
    margin-bottom: 1em;
  }
`

const Work01 = () => {
  return (
    <WorkMain>
      <WorkCenter>
        <WorkTitle>
          <span>a new project</span> <Work01Line2 className="larger">management</Work01Line2> <Work01Line3>tool</Work01Line3>
        </WorkTitle>
        <WorkImage>
          <img alt="early project notes" src={img01} />
          <img alt="user persona" src={img03} />
          <img alt="journey map" src={img04} />
          <img alt="design sketch (hand drawn)" src={img05} />
          <img alt="design sprint whiteboards" src={img06} />
          <img alt="prototype thumbnails" src={img07} />
          <img alt="prototype screens" src={img08} />
          <img alt="prototype screenshot" src={img09} />

        </WorkImage>
      </WorkCenter>
      <WorkDescription>
        <h3>DMSi Contractor Project Management for Installed Sales</h3>
        <h3 className="workYear">2018-2021</h3>
        <p>As DMSi begins to extend into the builder materials dealers market, one product that sector needs is a project management platform for their installers and labor. Contractors need a good method to track projects, sales orders, purchase orders, credit memos, profit margin, timelines, tasks, costs of goods sold, invoices, etc. Of course, they could always use a task management platform such as Trello, but that just isn’t enough. Our installers run all of their transactions through Agility and have a record of all purchases and orders for each step of the process. It was imperative that we create a platform that will not only track each project, but also tie back to Agility proper and track all customers, accounting, and orders for each project. Thus the idea of the installed sales platform was born. With no web UI, no design system, and no past project management tool, we were off to the races.</p>
        <p>Because this product was brand new in our line-up, and we had never created a project management tool, much research needed to go into the base profiles and roles of those that would be using it. Early on, we identified the primary profiles of Sales Agent, Installed Sales Manager, Accountant, Installer, Billing Manager, and Project Manager. Once the roles were identified we confirmed with users that these were the proper roles to begin journey mapping. As the journey map evolved, we tracked every detail of what it takes to build a house from beginning to end, from getting the bid, ,to completing the project. The journey map outlined each and every task along with the users desires, goals, and frustrations in those moments.</p>
        <p>Armed with the information from the journey map and user profiles, the sketching and user flows began. First, we had to identify the overarching screens that would be used throughout the platform. After identifying these, a rough flow was created in how a user would run through project creation. There were two key factors we had to keep in mind while ideating 1) We would need a home-base for ALL projects within the platform, and 2) we would need individual project that would mimic the structure of the overall project flow.</p>
        <p>Within the initial sketches, this is where an inventory of all needed components began to form. As DMSi is in the infancy stages of transitioning their product to the web, there was/is no defined UI to begin with. Thus, as each component was determined as needed, it would be added to the list of needs for the new design system we were to create.</p>
        <p>In order to rapidly prototype, we use InVision and Sketch to get the job done. We created prototypes for each primary category of design sprint and ran those fully with users to receive feedback and iterate. In order to do full justice to our prototypes, we took the source code InVision gives and added a little of our own magic to create elements such as drag and drop and type ahead search.</p>
        <p>Once all prototypes were complete the team created all the mockup and spec documents. We kept the format in standard agile and ran design/ux a sprint ahead of the dev teams.</p>
        <p>Once the initial sketches were created it was time to gather a larger team to run multiple design sprints to pull the separate ideas together. We ran sprints for the following modules: </p>
        <ul>
          <li>All Project Dashboard</li>
          <li>Labor Scheduler</li>
          <li>Task Management Tool</li>
          <li>Singular Project Creation and Management</li>
        </ul>
        <p>When introducing the sprints (which had never been done at DMSi) I played the role of the facilitator and took the team through the five day process. Upon the completion of each sprint, we were armed with a working prototype to begin refining for hand-off to the agile development team.</p>
        <p>Alpha version of the installed sales platform releases June of 2019. We have recruited users to be the test base for product iteration moving into beta release. There are many things left to consider before full launch of the product, however, for an alpha release, we feel well ahead of the curve.</p>
      </WorkDescription>
    </WorkMain>
  )
}

export default Work01;