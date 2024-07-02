import React from 'react'
import "./ApartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.jsx";



function ApartmentGrid() {
  // let numberOfAvailableApartments = null;
  // fetch("../annonces_logements.json").then(res => (res.json())).then((res) => (numberOfAvailableApartments = res.length)).catch(console.error);
  return (
    <div className="grid">
      {/* Nous avons {numberOfAvailableApartments} appartements disponibles */}
      <ApartmentCard /> 
      <ApartmentCard /> 
      <ApartmentCard /> 
      <ApartmentCard /> 
      <ApartmentCard /> 
      <ApartmentCard /> 
    </div>
  )
}

export default ApartmentGrid
