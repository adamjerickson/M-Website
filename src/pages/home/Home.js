import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Beliefs from './Beliefs';
import Greeting from './Greeting';
import Skills from './Skills';
import '../../App.css';

const Home = () => {
  return (
    <div>
      <Header />
      <Greeting />
      <Beliefs />
      <Skills />
      <Footer />
    </div>
  );
}

export default Home;
