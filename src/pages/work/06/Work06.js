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

const Work06Line2 = styled.div`
  margin-left: 72px;
`
const Work06Line3 = styled.div`
  margin-left: 188px;
`
const WorkImage = styled.div`
  img {
    min-width: 100%;
    max-width: 100%;
    margin-bottom: 1em;
  }
`

const Work06 = () => {
  return (
    <WorkMain>
      <WorkCenter>
        <WorkTitle>
          <span>new experience</span> <Work06Line2 className="larger lower">for a lincoln</Work06Line2><Work06Line3 className="larger lower">staple.</Work06Line3>
        </WorkTitle>
        <WorkImage>
          <img alt="Madonna logo" src={img01} />
          <img alt="Brand Book cover" src={img02} />
          <img alt="Brand book interior" src={img03} />
          <img alt="Madonna home page" src={img04} />
          <img alt="Madonna home page alternate" src={img05} />
          <img alt="Madonna Prospective Patient page" src={img06} />
        </WorkImage>
      </WorkCenter>
      <WorkDescription>
        <h3>Madonna Rehabilitation Hospital</h3>
        <h3 className="workYear">2013</h3>
        <p>Madonna is one of the region's premier medical rehabilitation and research facilities. A technological innovator with an exceptional staff, Madonna has produced countless success stories during its 50-plus years. But it was ready for an aesthetic update when it hired Thought District in 2011 to define, position and communicate its brand to core audiences. We completed an in-depth research study to gauge employee, patient and referring physician engagement, as well as to solidify Madonna's unique brand attributes. This research informed our creation of new brand and website that launched in late 2012. I was instrumental to the brand strategy, creative, website design, and digital strategy.   </p>
        <p>When beginning to restructure and design the website Madonna would present to the community my team began researching the different types of reasons and people that would find themselves there. We followed a standard UX process of profiling, journey mapping, sketching, wireframing and prototyping to reach the final product. One insight we held above all others in the construction was the sensitivity in which a user would find themselves being on this site. Chances are, if you go to madonna.org you were not hitting the destination under great circumstances. A user was more than likely emotional and already being inundated with complicated information from insurance and doctors. We wanted the experience on the site to be soft, one that would be highly intuitive and not cause lots of frustration because of too much information at one time. We used a pictorial navigation that helped guide the user and we created a menu that allowed a user to select who they were and why they were there in order to get taken to the correct place quickly.</p>
      </WorkDescription>
    </WorkMain>
  )
}

export default Work06;