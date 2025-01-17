import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Work from './pages/work/Work';
import Contact from './pages/contact/Contact';
import Speaking from './pages/speaking/Speaking';
import Resume from './pages/resume/Resume';
import './normalize.css';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/work/:id" component={Work} />
        <Route path="/contact" component={Contact} />
        <Route path="/speaking" component={Speaking} />
        <Route path="/resume" component={Resume} />
        <Route path="/" component={Home} />
      </Switch>   
    </div>
  );
}

export default App;
