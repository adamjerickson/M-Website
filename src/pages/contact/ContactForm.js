import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 10px;
  row-gap: 20px;
  margin-right: 5vw;
  align-content: start;

  p {
    margin-top: 0;
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

const ContactForm = () => {
  return (
    <Form name="contact" method="POST" data-netlify="true" action="/contact/success">
      <input type="hidden" name="form-name" value="contact" />
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
    </Form>
  );
}

export default ContactForm;