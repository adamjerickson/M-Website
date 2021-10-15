import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../contact/ContactForm';
import '../../App.css';
import conveyux from './images/conveyux.jpg';
import nebraskacode from './images/nebraskacode.jpg';
import mollieadamlogo from './images/mollieadamlogo.png';



const SpeakingContainer = styled.div`
  margin-left: 5vw;
  margin-right: 5vw;
  display: grid;
  grid-template-columns: 50% 50%;

  h3 {
    font-size: 24px;
    font-weight: 600;
  }

  @media screen and (max-width: 975px) {
    grid-template-columns: 100%;
  }
`
const SpeakingLeft = styled.div`
`
const SpeakingRight = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 62px auto;

`
const FloatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 134px;
  margin-top: 15px;
`
const FloatingText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 21.5px;
`
const Convey = styled.div`
  width: 205px;
  margin-left: 14px;

  img {
    min-width: 100%;
    max-width: 100%;
  }
`
const NebraskaCode = styled.div`
  margin-left: 114px;
  margin-bottom: 50px;
  max-width: 364px;
  
  img {
    max-width: 100%;
    min-width: 100%;
  }
`
const FormWrapper = styled.div`
  max-width: 570px;
`
const Logo = styled.img`
  width: 62px;
`
const SpeakingText = styled.p`
  width: 354px;
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 0;
`
const SpeakingBigText = styled.div`
  font-size: 72px;
  font-weight: 600;
  grid-row: 2;
  grid-column: 1 / -1;
  line-height: 67px;
  margin-top: -100px;

  @media screen and (max-width: 975px) {
    margin-top: 0;
    margin-bottom: 50px;
  }
`
const Line2 = styled.div`
  margin-left: 25px;
  font-size: 96px;
  font-weight: 600;
`

const Speaking = () => {
  return (
    <div>
      <Header />
        <SpeakingContainer>
          <SpeakingLeft>
            <div>
              <FloatingWrapper>
                <FloatingText>
                  
                  these are some<br/>
                  national conferences<br/>
                  I have been a part of.<br/>
                  
                </FloatingText>
                <Convey><img alt="ConveyUX Logo" src={conveyux} /></Convey>
              </FloatingWrapper>
              <NebraskaCode><img alt="Nebraska.Code() Logo" src={nebraskacode} /></NebraskaCode>
            </div>
            <FormWrapper>
              <h3>book mollie to speak.</h3>
              <ContactForm />
            </FormWrapper>
          </SpeakingLeft>
          <SpeakingRight>
            <Logo alt="Mollie and Adam Logo" src={mollieadamlogo} />
            <SpeakingText>I travel far and wide with my good buddy, adam erickson. adam is a software architect and the two of us wax poetic on how to collaborate and plan together as designers and developers. always garnering fantastic reviews, we would love to be a part of your conference as well. adam and I make priority in our schedules. in fact, we even have a logo.</SpeakingText>
            <SpeakingBigText>i say words <Line2>at big places.</Line2></SpeakingBigText>
          </SpeakingRight>
        </SpeakingContainer>
      <Footer />
    </div>
  )
}

export default Speaking;