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

const Work08Line2 = styled.div`
  margin-left: 72px;
`
const WorkImage = styled.div`
  img {
    min-width: 100%;
    max-width: 100%;
    margin-bottom: 1em;
  }
`

const Work08 = () => {
  return (
    <WorkMain>
      <WorkCenter>
        <WorkTitle>
          <span>complete the</span> <Work08Line2 className="larger extraLow">nutrition.</Work08Line2>
        </WorkTitle>
        <WorkImage>
          <img alt="ReFirm Carousel 1" src={img01} />
          <img alt="ReFirm Carousel 2" src={img02} />
          <img alt="ReFirm Why Nutrition page" src={img03} />
          <img alt="ReFirm What's your Reason page" src={img04} />
          <img alt="ReFirm Support page" src={img05} />
          <img alt="ReFirm Why Exercise page" src={img06} />
          <img alt="ReFirm Testimonial page" src={img07} />
          <img alt="ReFirm Product page 1" src={img08} />
          <img alt="ReFirm Product page 2" src={img09} />
        </WorkImage>
      </WorkCenter>
      <WorkDescription>
        <h3>Well-known Complete Nutrition launches Refirm and Mancore</h3>
        <h3 className="workYear">2012</h3>
        <p>Complete Nutrition launched a new 60-day weight loss system and enlisted the help of my team at Thought District to create a microsite in order to give consumers more information about the new product. We devised a strategy to launch the site around the new year with the concept of "ReFirm Your Reason For Success" that we developed. I led the team that created a content database of nutrition and exercise plans, along with workout videos, that gave customers extra resources to help them on their journey of weight loss. Using the packing with its bold, solid colors as our inspiration, my team created the campaign strategy, website, Facebook campaign, email campaign, and workout/nutrition plans. I was integral in the website design, launch strategy, digital strategy, and content strategy.</p>
        <p>Complete Nutrition launched a new men's health program and enlisted the help of help my team and I at Thought District to create a micro and mobile site to give consumers more information about the new product. The campaign was at the beginning of the new year with the concept of "Mike Alstott - Your Playbook". Included on the site was database of nutrition exercise plans to give customers extra resources to help them on their journey. Using the packaging and it's dark, metallic colors as our inspiration, our team created the look and experience of the site. I was integral in the website design, launch strategy, digital strategy, and content strategy.</p>
      </WorkDescription>
    </WorkMain>
  )
}

export default Work08;