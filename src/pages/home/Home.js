import Beliefs from './Beliefs';
import Greeting from './Greeting';
import Skills from './Skills';
import '../../App.css';

const Home = () => {
  return (
    <div>
      <Greeting />
      <Beliefs />
      <Skills />
    </div>
  );
}

export default Home;
