import styled from 'styled-components'

import behance from '../images/behancebox.svg';
import facebook from '../images/facebookbox.svg';
import instagram from '../images/instagrambox.svg';
import linkedin from '../images/linkedinbox.svg';
import twitter from '../images/twitterbox.svg';

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    width: 46px;
    margin-right: 20px;
  }

  a:last-child img {
    margin-right: 0;
  }
`

function Footer() {
  return (
    /* Social Icons */
    <FooterWrapper>
      <a href="https://www.instagram.com/molliecox/?hl=en">
        <img src={twitter} alt="twitter" />
      </a>
      <a href="https://www.instagram.com/molliecox/?hl=en">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="https://www.instagram.com/molliecox/?hl=en">
        <img src={linkedin} alt="linkdin" />
      </a>
      <a href="https://www.instagram.com/molliecox/?hl=en">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="https://www.instagram.com/molliecox/?hl=en">
        <img src={behance} alt="behancebox" />
      </a>
    </FooterWrapper>
  )
}

export default Footer;