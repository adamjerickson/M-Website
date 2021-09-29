import behance from '../images/behancebox.svg';
import facebook from '../images/facebookbox.svg';
import instagram from '../images/instagrambox.svg';
import linkedin from '../images/linkedinbox.svg';
import twitter from '../images/twitterbox.svg';

function Footer() {
  return (
  /* Social Icons */
  <div>
    <ul class="twitterLogo">
    <li><a href="https://www.instagram.com/molliecox/?hl=en">
        <img src={twitter} alt="twitter" class="responsive" />
    </a></li> 

    <li><a href="https://www.instagram.com/molliecox/?hl=en">
        <img src={instagram} alt="instagram" class="responsive" />
    </a></li>   

  <li><a href="https://www.instagram.com/molliecox/?hl=en">
        <img src={linkedin} alt="linkdin" class="responsive" />
    </a></li> 

    <li><a href="https://www.instagram.com/molliecox/?hl=en">
        <img src={facebook} alt="facebook" class="responsive" />
    </a></li>  

    <li><a href="https://www.instagram.com/molliecox/?hl=en">
        <img src={behance} alt="behancebox" class="responsive" />
    </a></li>  
  </ul>
  </div>
  )
}

export default Footer;