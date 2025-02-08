import './App.css'
import { About } from './components/About'
import { Banner } from './components/Banner'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { Project } from './components/Project'
import { Service } from './components/Service'

function App() {


  return (
    <div className="">
      <NavBar/>
      <section id='banner'>
      <Banner/>
      </section>
      <section id="about">
        <About />
      </section>
      <section id='service'>
        <Service/>
      </section>
      <section id='project'>
      <Project/>
        
        </section>
      <section id='footer'>
      <Footer/>
        
        </section>
    </div>
  )
}

export default App
