import './App.css'
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import MyFooter from './components/MyFooter';
import Navbar from './components/Navbar'
import NewsLetter from './components/NewsLetter';
import OurServices from './components/OurServices';
import OurClients from './components/OurClients';
function App() {

  return (
    <>
    <Navbar />
    <Home/>
    <OurClients/>
    <About/>
    <OurServices/>
    <Blog/>
    <NewsLetter/>
    <MyFooter/>
  </>
  )
}

export default App;
