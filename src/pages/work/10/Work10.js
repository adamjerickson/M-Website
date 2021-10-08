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

const Work10Line2 = styled.div`
  margin-left: 207px;
`
const Work10Line3 = styled.div`
  margin-left: 149px;
`
const WorkImage = styled.div`
  img {
    min-width: 100%;
    max-width: 100%;
    margin-bottom: 1em;
  }
`

const Work10 = () => {
  return (
    <WorkMain>
      <WorkCenter>
        <WorkTitle>
          <span>there's a new web</span> <Work10Line2 className="larger extraLow">hobby in</Work10Line2><Work10Line3>the town.</Work10Line3>
        </WorkTitle>
        <WorkImage>
          <img alt="HobbyTown site navigation" src={img01} />
          <img alt="Hobbytown Shop By Brand feature" src={img02} />
          <img alt="HobbyTown Product Category page" src={img03} />
          <img alt="HobbyTown Featured Products page" src={img04} />
          <img alt="HobbyTown Store Finder" src={img05} />
        </WorkImage>
      </WorkCenter>
      <WorkDescription>
        <h3>E-Commerce Website for a Respected National Franchise</h3>
        <h3 className="workYear">2009</h3>
        <p>With more than 180 franchises across the country, HobbyTown USA is a retail hobby and toy store franchise that offers a full line of radio control hobbies, models, games, toys, educational items, paints, tools and model railroad items. As Associate Vice President of Marketing and Creative, I was responsible for the nationwide, local level, and in-store marketing operations including the design and implementation of all branding and marketing strategies, marketing tools, policies, and processes. I ensured the brand standards were upheld and profitability rose by providing guidance to franchisees while maintaining the Company vision throughout all implementation of strategies.</p>
        <p>My role in this project was to work with multiple teams to coordinate the distribution strategy, in-store sales strategy, a unified user experience, inventory APIs, shopping cart experience. My team and I created the design system for the website, as well as the continual iteration of the site. We worked very closely with franchisees  and customers every step of the way for user testing and feedback.</p>
      </WorkDescription>
    </WorkMain>
  )
}

export default Work10;