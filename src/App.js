import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Work from './pages/work/Work';
import './normalize.css';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/work/:id" component={Work} />
        <Route path="/" component={Home} />
      </Switch>   
    </div>
  );
}

export default App;
