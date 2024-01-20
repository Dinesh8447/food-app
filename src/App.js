import Food from './compoents/Food';
import Headercards from './compoents/Headercards';
import Hero from './compoents/Hero';
import Navbar from './compoents/Navbar';
import Category from './compoents/Category'
import './index.css';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <Headercards/>
    <Food/>
    <Category/>
    </div>
  );
}

export default App;
