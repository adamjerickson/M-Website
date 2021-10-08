import styled from 'styled-components';
import img01 from './images/contactImage.jpg';

const ContactContainer = styled.div`
  margin-left: 5vw;
  margin-bottom: 5vh;

  @media screen and (max-width: 925px) {
    margin-right: 5vw;
  }
  
`
const ContactIntro = styled.p`
  font-size: 18px;
  width: 135px;
  height: 60px;
`
const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  @media screen and (max-width: 925px) {
    grid-template-columns: 1fr;
  }
`
const SuccessMessage = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 600;
  }
  
  p {
    font-size: 18px;
  }
`
const ContactImage = styled.div`
  img {
    min-width: 100%;
    max-width: 100%;
  }

  @media screen and (max-width: 925px) {
    display: none;
  }
`
const ContactGreeting = styled.h1`
  margin-left: -5.3vw;
  margin-top: 0;
  font-size: 72px;
  font-weight: 600;
  line-height: 50.23px;

  .larger {
    font-size: 96px;
    line-height:67.1px;
  }

  .lower {
    line-height: 77px;
  }

  .extraLow {
    line-height: 100px;
  }
`
const ContactGreetingLine2 = styled.div`
  margin-left: 27px;
`

const ContactSuccess = () => {
  return (
    <div>
      <ContactContainer>
        <ContactIntro></ContactIntro>
        <FormContainer>
          <SuccessMessage>
            <h3>success.</h3>
            <p>your form was sent flying to me. don't worry, it's faster than a pigeon.</p>
          </SuccessMessage>
          <ContactImage>
            <img alt="map" src={img01}/>
          </ContactImage>
        </FormContainer>
        <ContactGreeting>drop me a line;<ContactGreetingLine2 className="larger extraLow">let's talk.</ContactGreetingLine2></ContactGreeting>
      </ContactContainer>

    </div>
  )
}

export default ContactSuccess;