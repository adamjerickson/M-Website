import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import img01 from './images/contactImage.jpg';

const ContactMain = styled.div`
  margin-left: 5vw;
  margin-bottom: 5vh;

  @media screen and (max-width: 925px) {
    margin-right: 5vw;
  }
  
`
const ContactIntro = styled.p`
  font-size: 18px;
  width: 135px;
`
const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  @media screen and (max-width: 925px) {
    grid-template-columns: 1fr;
  }
`
const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 10px;
  margin-right: 5vw;
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
const FormLabel = styled.label`
  font-size: 18px;
  
`
const Input = styled.input`
  display: block;
  margin-top: 10px;
  border-radius: 4px;
  border: 1px solid #999B9B;
  padding: 12px;
  width: 100%;
`
const NameInput = styled.input`
  display: block;
  margin-top: 10px;
  border-radius: 4px;
  border: 1px solid #999B9B;
  padding: 12px;
  width: 90%;
`
const TextAreaContainer = styled.div`
  grid-column: 1 / 3;
`
const TextArea = styled.textarea`
  display: block;
  margin-top: 10px;
  border-radius: 4px;
  border: 1px solid #999B9B;
  padding: 12px;
  width: 100%;
`
const Button = styled.button`
  color: white;
  background-color: black;
  border-radius: 4px;
  padding: 12px;
  font-size: 12px;
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

const Contact = () => {
  return (
    <div>
      <Header />
      <ContactMain>
        <ContactIntro>let's get to know one another</ContactIntro>
        <FormContainer>
          <ContactForm name="contact" method="POST" data-netlify="true">
              <FormLabel>name
                <NameInput type="text" name="name" placeholder="name"/>
              </FormLabel>
            
              <FormLabel>email
                <Input type="email" name="email" placeholder="email" />
              </FormLabel>
            <TextAreaContainer>
              <FormLabel>message
                <TextArea name="message" placeholder="type your message here..."></TextArea>
              </FormLabel>
            </TextAreaContainer>
            <p>
              <Button type="submit">Submit</Button>
            </p>
          </ContactForm>
          <ContactImage>
            <img alt="map" src={img01}/>
          </ContactImage>
        </FormContainer>
        <ContactGreeting>drop me a line;<ContactGreetingLine2 className="larger extraLow">let's talk.</ContactGreetingLine2></ContactGreeting>
      </ContactMain>
      <Footer />

    </div>
  )
}

export default Contact;