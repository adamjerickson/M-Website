import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ResumeItem from './ResumeItem';

const ResumeContainer = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  column-count: 3;
  margin-bottom: 50px;

  @media screen and (max-width: 1439px) {
    margin-left: 5vw;
    margin-right: 5vw;
  }

  @media screen and (max-width: 1334px) {
    column-count: 2;
  }

  @media screen and (max-width: 780px) {
    column-count: 1;
  }
`
const FifteenYears = styled.div`
  font-size: 72px;
  font-weight: 600;
  line-height: 72px;
  padding-top: 100px;
  margin-bottom: 50px;
  break-inside: avoid;
  
  @media screen and (max-width: 1334px) {
    display: none;
  }
`
const FifteenYearsAlt = styled.div`
  font-size: 72px;
  font-weight: 600;
  line-height: 72px;
  padding-top: 100px;
  margin-bottom: 50px;
  break-inside: avoid;

  @media screen and (min-width: 1334px) {
    display: none;
  }

  @media screen and (max-width: 780px) {
    display: none;
  }
`
const FifteenYearsAlt2 = styled.div`
  font-size: 72px;
  font-weight: 600;
  line-height: 72px;
  padding-top: 30px;
  margin-bottom: 50px;
  break-inside: avoid;

  @media screen and (min-width: 780px) {
    display: none;
  }
`


const Line2 = styled.div`
  font-size: 96px;
  padding-left: 30px;
`
const Line3 = styled.div`
  font-size: 36px;
  padding-left: 185px;
`

const Resume = () => {
  return (
    <div>
      <Header />
      <ResumeContainer>
        <ResumeItem company="dmsi software." title="director of product design" date="2017-present">
          <p><span>&gt;&gt;</span>Researched, identified, and strategized the new design and experience of DMSi's core ERP product to the web.</p>
          <p><span>&gt;&gt;</span>Crafted product roadmaps, journey maps, user profiles, wireframes, and prototypes.</p>
          <p><span>&gt;&gt;</span>Facilitate design sprints for the conception of new product and modules.</p>        
          <p><span>&gt;&gt;</span>Built the current design team from ground zero.</p>
          <p><span>&gt;&gt;</span>Created the new design and brand standards of the future of the product and instrumental in product conversion.</p>
          <p><span>&gt;&gt;</span>Responsible for the execution of user experience, interface design and implementation of those into the software.</p>
          <p><span>&gt;&gt;</span>Collaborated with multiple roles and departments to drive product alignment.</p>
          <p><span>&gt;&gt;</span>Travel consistently to users across the country for in-depth interviewing and shadowing of product usage.</p>
          <p><span>&gt;&gt;</span>Responsible for the coaching, mentoring, and development of the design department.</p>
        </ResumeItem>
        <FifteenYearsAlt2>here's that <Line2>15&nbsp;years.</Line2><Line3>(highlights)</Line3></FifteenYearsAlt2>
        <ResumeItem company="resort lifestyle." title="ux designer" date="2016-2017">
          <p><span>&gt;&gt;</span>Responsible for building and maintaining a national website featuring individual sites for each of the 30 communities.</p>
          <p><span>&gt;&gt;</span>On-site travel for user research, surveys, and interviews.</p>
          <p><span>&gt;&gt;</span>Creative and digital management.</p>
          <p><span>&gt;&gt;</span>Wireframing, Prototyping, Usability testing.</p>
          <p><span>&gt;&gt;</span>Analytics monitoring.</p>
        </ResumeItem>

        <ResumeItem company="university of nebraska." title="adjunct professor" date="2013-present">
          <p><span>&gt;&gt;</span>ADPR 358 - UX / UI Design</p>
          <p><span>&gt;&gt;</span>ADPR 398 - Atomic Design</p>
          <p><span>&gt;&gt;</span>ADPR 398 - Design Systems</p>
          <p><span>&gt;&gt;</span>ADPR 398 - Intro to Sketch </p>
          <p><span>&gt;&gt;</span>ADPR 433 - Art Direction</p>
          <p><span>&gt;&gt;</span>ADPR 333 - Layout and Design </p>
          <p><span>&gt;&gt;</span>ADPR483 - Portfolio Development </p>
          <p><span>&gt;&gt;</span>JOUR 160 - Photo and Video</p>
        </ResumeItem>
        <FifteenYearsAlt>here's that <Line2>15&nbsp;years.</Line2><Line3>(highlights)</Line3></FifteenYearsAlt>
        <ResumeItem company="thought district." title="director of interactive" date="2010-2013">
          <p><span>&gt;&gt;</span>Integral to leading the company in new client on-boarding while driving digital billing up 60% over a one-year period of time.</p>
          <p><span>&gt;&gt;</span>Strategic plans through intensive goal sessions with the C-suite of each new client.</p>
          <p><span>&gt;&gt;</span>Led a team of 12 creative professionals to create work on time, on budget, and on strategy for over 1.2 million dollars in client budget.</p>
          <p><span>&gt;&gt;</span>Guided all creative and digital strategy and execution that resulted in award-winning work and created proprietary website process for clients.</p>
          <p><span>&gt;&gt;</span>Created and led the strategic marketing plan of 4 national retail franchise clients simultaneously.</p>
          <p><span>&gt;&gt;</span>Ideated, analyzed, and executed annual digital plans with national clients.</p>
        </ResumeItem>
        <FifteenYears>here's that <Line2>15&nbsp;years.</Line2><Line3>(highlights)</Line3></FifteenYears>
        <ResumeItem company="hobbytown usa." title="avp marketing and creative" date="2005-2010">
          <p><span>&gt;&gt;</span>Created the first corporate retail website consisting of multiple user levels, national inventory, user-centered design including many user profiles, and a new method for localized fullfillment.</p>
          <p><span>&gt;&gt;</span>User research, wireframing, prototyping, iterative design, and measurement.</p>
          <p><span>&gt;&gt;</span>Implemented new campaign strategies for retail sales growth nationally across the franchise system and aided in successfully increasing annual sales to over $300M.</p>
          <p><span>&gt;&gt;</span>Served as the direct contact for 180 franchisees and revised the national strategy to work on the local level for each individual store.</p>
        </ResumeItem>

        <ResumeItem company="education.">
          <p><span>&gt;&gt;</span>University of Nebraska, Lincoln<br/>2002, BA, Theatre Performance</p>
          <p><span>&gt;&gt;</span>California Insititute of the Arts<br/>2003. MFA, Acting</p>
          <p><span>&gt;&gt;</span>Kaplan University<br/>2009, MBA</p>
        </ResumeItem>
      </ResumeContainer>
      <Footer />
    </div>
  )
}

export default Resume;