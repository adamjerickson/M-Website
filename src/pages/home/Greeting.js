import styled from 'styled-components'
import mollie from '../../images/mollie.jpg';

const GreetingWrapper = styled.div`
  width: 100vw;
  position: relative;

  div.GreetingInnerWrapper {
    //position: relative;
  }
`;

const Headline = styled.h1`
  position: absolute;
  top: -38px;
  left: -0.08em;
  margin: 0;
  
  font-weight: 600;
  font-size: 164px;
  // line-height: 10px;

  /* Second line, "familiar" */
  span {
    position: absolute;
    top: 152px;
    left: 210px;
    
  }

  @media screen and (max-width: 925px) {
    font-size: 82px;
    left: -0.08em;

    span {
      top: 70px;
      left: 100px;
    }
  }
`;

const LittleBox = styled.div`
  float: right;
  margin-top: 50px;
  margin-right: 5vw;
  width: 200px;
  height: 63px;
  font-size: 18px;
  line-height: 21px;
  text-align: left;
  z-index: 1;

  @media screen and (min-width: 1252px) {
    float: left;
    margin-left: 1029px;
    margin-top: 25px;
  }

  @media screen and (max-width: 950px) {
    display: none;
  }
`
const MollieImage = styled.div`
  padding-top: 228px;
  margin-left: 5vw;

  img {
    max-width: 100%;    
  }

  @media screen and (max-width: 925px) {
    padding-top: 82px;
  }
`

const AboutMollie = styled.div`
  margin-left: 10vw;
  margin-right: 20vw;

  p {
    font-size: 58px;
    line-height: 69px;

    @media screen and (max-width: 925px) {
      font-size: 27px;
      line-height: 34px;
    }
  }
`

const Greeting = () => {
  return (  
    <GreetingWrapper>
        <Headline>let's get <span>familiar.</span> </Headline>
        
        <LittleBox>
          <p>
            director of product<br/>
            professor of design<br/>
            lover of candy<br/>
          </p>
        </LittleBox>

        <MollieImage>
          <img src={mollie} alt="Mollie Cox"  />
        </MollieImage>

        <AboutMollie>
          <p>hello. i am mollie cox. i am a product design director happily
            creating experiences for over 15 years. i
            want to live in a world where collaboration
            is never an after thought, products and
            functionality are always created with a
            user-centered design, and great design is
            considered a moral imperative.
          </p>
        </AboutMollie>
    </GreetingWrapper>
  );
}

export default Greeting;
