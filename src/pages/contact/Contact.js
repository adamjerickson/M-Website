import { Switch, Route} from "react-router-dom";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactMain from './ContactMain';
import ContactSuccess from './ContactSuccess';

const Contact = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path={"/contact/success"} component={ContactSuccess} />
        <Route path={"/contact"} component={ContactMain} />
      </Switch>
      <Footer />

    </div>
  )
}

export default Contact;