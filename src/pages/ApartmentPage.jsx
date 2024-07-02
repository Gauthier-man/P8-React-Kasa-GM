import React from 'react'
import "./ApartmentPage.scss"
import  DescriptionPanel  from '../components/DescriptionPanel.jsx';
import ApartmentBanner from '../components/ImageBanner.jsx';
import ApartmentHeader from '../components/ApartmentHeader.jsx';


function ApartmentPage() {
  return (
    <div className="apartment-page">
        <ApartmentBanner />
        <ApartmentHeader />
          <div className="apartment__description__area">
          <DescriptionPanel title="Description"  />
          <DescriptionPanel title="Equipements" />
          </div>
        </div>
       
   
  )
}

export default ApartmentPage
