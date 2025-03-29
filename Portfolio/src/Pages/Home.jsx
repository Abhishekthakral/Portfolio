import React from 'react'
import Hero from '../Components/Hero'
import AboutMe from '../Components/AboutMe'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <div id='skills'>
      <Skills />
      </div>
      <div id='projects'>
      <Projects />
      </div>
      <Contact />
    </div>
  )
}

export default Home