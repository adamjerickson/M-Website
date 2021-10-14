import styled from 'styled-components';

const Item = styled.div`
  width: 353px;
  break-inside: avoid;
  margin-bottom: 50px;
`

const Company = styled.div`
  background-color: black;
  color: white;
  font-size: 24px;
  font-weight: 600;
  line-height: 16.78px;
  padding: 13px;

  span {
    margin-left: -15px;
  }
`
const TitleDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 7px;
  color: #B3B3B3;
  font-size: 14px;
  font-weight: 600;
`
const Title = styled.span`
`
const Date = styled.span`
`
const Detail = styled.div`
  p {
    font-size: 14px;
    line-height: 1.3em;
    margin-block-start: 1.3em;
    margin-block-end: 1.3em;
  }
  p > span {
    display: block;
    margin: 0;
  }
`
const ResumeItem = (props) => {
  return (
    <Item>
      <Company><span>{props.company}</span></Company>
      <TitleDate><Title>{props.title}</Title><Date>{props.date}</Date></TitleDate>
      <Detail>{props.children}</Detail>
    </Item>
  )
}

export default ResumeItem;