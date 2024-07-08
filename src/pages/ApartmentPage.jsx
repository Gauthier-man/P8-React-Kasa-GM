import React, {useEffect, useState} from 'react'
import "./ApartmentPage.scss"
import  DescriptionPanel  from '../components/DescriptionPanel.jsx';
import ImageBanner  from '../components/ImageBanner.jsx';
import ApartmentHeader from '../components/ApartmentHeader.jsx';
import {useLocation} from "react-router-dom"; 



function ApartmentPage() {
  const location = useLocation();
  console.log("location", location);
  console.log("our apartment id is:", location.state.apartmentId);
  const [flat, setFlat] = useState(null);
  useEffect(fetchApartmentData, []);

  function fetchApartmentData() {
    fetch("../annonces_logements.json") 
      .then((res) => res.json())
      // .then((res) => console.log("res:", res))
      .then((flats) => {
          const flat =  flats.find((flat) => flat.id === location.state.apartmentId);
          setFlat(flat);
          // console.log("selectedFlat:", selectedFlat);
      })
      .catch(console.error);
  }
  if (flat == null) return <div>...Loading</div>
  return (
    <div className="apartment-page">
      {/* selected flat: {JSON.stringify(flat)} */}
        <ImageBanner imageUrl={flat.cover}/>
        <ApartmentHeader flat={flat}/>
          <div className="apartment__description__area">
          <DescriptionPanel title="Description" content={flat.description}  />
          <DescriptionPanel title="Equipements" content={flat.equipments.map((eq) => (<li>{eq}</li>))}/>
          </div>
        </div>
       
   
  )
}

export default ApartmentPage
