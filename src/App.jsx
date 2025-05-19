import React from 'react'
import { Hero } from './sections/Hero'
import { AboutMe } from './sections/AboutMe'
import { NavBar } from './components/NavBar'
import { Education } from './sections/Education'
import { Project } from './sections/Projects'
import { TechStack } from './sections/TechStack'
import { LogoSection } from './components/LogoSection'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export const App = ()=>{
  return (
    <>
      <NavBar/>
      <Hero/>
      <AboutMe/>
      <Education/>
      <Project/>
      <LogoSection/>
      <TechStack/>
      <Contact/>
      <Footer/>
    </>
  )
}
