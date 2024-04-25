import './App.css'
import About from './components/About';
import Tours from './components/Tours';
import Home from './components/Home';
import MyFooter from './components/MyFooter';
import Navbar from './components/Navbar'
import Testimonial from './components/Testimonial';
import OurServices from './components/OurServices';
import OurClients from './components/OurClients';
import ContactUs from './components/ContactUs';
function App() {

  return (
    <div className='bg-neutralSilver'>
    <Navbar />
    <Home/>
    <About/>
    <Tours/>
    <OurClients/>
    
    <OurServices/>
    
    <Testimonial/>
    <ContactUs/>
    <MyFooter/>
    
  </div>
  )
}

export default App;
