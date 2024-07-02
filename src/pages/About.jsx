import React from 'react'
import DescriptionPanel from '../components/DescriptionPanel.jsx'
import Banner from '../layout/Banner.jsx'
import "./About.scss"
import ImageBanner from '../components/ImageBanner.jsx'

function About() {
  return (
    <div>
       <div className="about__background">
        {/* <img src="https://unsplash.it/800/200" alt="banner" /> */}
      
    </div>
      <div className="about__container">
      <DescriptionPanel title="Fiabilité"/>
      <DescriptionPanel title="Respect"/>
      <DescriptionPanel title="Service"/>
      <DescriptionPanel title="Sécurité"/>
      </div>
    </div>
  )
}

export default About
