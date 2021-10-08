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

const Work09Line2 = styled.div`
  margin-left: 72px;
`
const WorkImage = styled.div`
  img {
    min-width: 100%;
    max-width: 100%;
    margin-bottom: 1em;
  }
`

const Work09 = () => {
  return (
    <WorkMain>
      <WorkCenter>
        <WorkTitle>
          <span>complete the</span> <Work09Line2 className="larger extraLow">music.</Work09Line2>
        </WorkTitle>
        <WorkImage>
          <img alt="Complete logo" src={img01} />
          <img alt="Complete home page" src={img02} />
          <img alt="Complete Wedding Photography page" src={img03} />
          <img alt="Complete Video Gallery page" src={img04} />
          <img alt="Complete Franchise page" src={img05} />
          <img alt="Complete Locations page" src={img06} />
          <img alt="Complete About page" src={img07} />
        </WorkImage>
      </WorkCenter>
      <WorkDescription>
        <h3>A longstanding wedding event company gets a new brand accompanied by digital experience</h3>
        <h3 className="workYear">2012</h3>
        <p>Complete has helped people dance, laugh and cry together through more than 300,000 weddings and a wide variety of other events as North America’s most popular wedding DJ entertainment franchise since 1973. Now a leader in multimedia event production, offering a full range of photo, photo booth, video and other interactive services for brides’ big day, it continues to expand rapidly across the country. My team developed a new brand for Complete that streamlines, modernizes and pays tribute to the unmatched event-management company’s aesthetic history — including a logo with tight new bowtie that makes you want to push “play.” Its new tagline succinctly and powerfully captures its proven message: “We do.” A website was created to serve the National franchise, but also individual sites for each franchise across the network. I was integral in brand strategy, creative, digital strategy, website design, and marketing strategy.</p>
      </WorkDescription>
    </WorkMain>
  )
}

export default Work09;