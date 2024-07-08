import React, {useState, useEffect} from 'react'
import "./ApartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.jsx";



function ApartmentGrid() {
  // let numberOfAvailableApartments = null;
  const [apartments, setApartments] = useState([]);
  useEffect(fetchApartments, []);
  //useEffect avec une array vide == exécute cette fonction au chargement du composant

  function fetchApartments() {
  fetch("../annonces_logements.json").then(res => (res.json())).then((res) => setApartments(res)).catch(console.error);
}
  // const myArray = useState(0);
  // const seconds = myArray[0];
  // const setSeconds = myArray[1];
  // const myArray = useState(0);
  // const seconds = myArray[0];
  // const setSeconds = myArray[1];

  
 //  console.log("myArray:", myArray);

  //destructuring
 //  const [seconds, setSeconds] = myArray;

  
  
 
  return (
    <div className="grid">
      {/* Nous avons {numberOfAvailableApartments} appartements disponibles */}
      {/* {apartments.map((apartment) => ( <div>{ apartment.title}</div>))} */}
      {apartments.map((apartment) => (  <ApartmentCard title={apartment.title} imageUrl={apartment.cover} id={apartment.id}/>))}
     
    
      {/* apartments: {JSON.stringify(apartments)} */}
      {/* <ApartmentCard /> 
      <ApartmentCard /> 
      <ApartmentCard /> 
      <ApartmentCard /> 
      <ApartmentCard /> 
      <ApartmentCard />  */}
    </div>
  )
}

export default ApartmentGrid
