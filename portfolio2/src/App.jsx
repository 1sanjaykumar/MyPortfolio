import React from 'react' //rfce
import Navbar from './components/Navbar'
import Home from './components/Home'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Achievements from './components/Achievements'
import Projects from './components/projects'


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Achievements/>
      <Projects/>
      <Certificates />
      <Contact />
      
    </div>
  )
}

export default App