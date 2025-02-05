import './App.css'
import { About } from './components/About.jsx'
import { Banner } from './components/Banner.jsx'
import { Footer } from './components/Footer.jsx'
import { NavBar } from './components/NavBar.jsx'
import { Project } from './components/Project.jsx'
import { Service } from './components/Service.jsx'

function App() {


  return (
    <div className="">
      <NavBar/>
      <Banner/>
      <About/>
      <Service/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App
