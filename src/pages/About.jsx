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
      <DescriptionPanel title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
      <DescriptionPanel title="Respect"   content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
      <DescriptionPanel title="Service"   content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
      <DescriptionPanel title="Sécurité"  content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que  pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont  bien respectés. Nous organisons également des ateliers sur la sécurité  domestique pour nos hôtes."/>
      </div>
    </div>
  )
}

export default About
