import Header from './components/Header';
import Home from './pages/home/Home';
import Footer from './components/Footer';
import './normalize.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home ></Home>
      <Footer ></Footer>
    </div>
  );
}

export default App;
