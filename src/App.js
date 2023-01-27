import './App.css';
import Home from './pages/Home';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <> 
      <Navbar />
      <div className='container'>
        <Home />
        <Works />
        <Contact />
      </div>
    </>
   
  );
}
