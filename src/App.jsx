import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Headline from './Components/Headline/Headline.jsx'
import Services from './Components/Services/Services.jsx'
import Aboutme from './Components/AboutMe/Aboutme.jsx'
import Projects from './Components/Projects/Projects.jsx'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Headline />
      <Services />
      <Aboutme />
      <Projects />
    </div>
  )
}

export default App
