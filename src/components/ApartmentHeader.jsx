import React from 'react'
import "./ApartmentHeader.scss";

function ApartmentHeader(props) {
  // console.log("props in apartment header:", props);
  const flat = props.flat
  const name = flat.host.name;
  const [firstName, lastName] = name.split(" ");
  return (
    <div className="apartment__header">
        <div className="apartment__title"> 
          <h1>{flat.title} </h1>
          <h2>{flat.location}</h2>
          <div className="apartment__tags">
            {/* <span>Cozy</span>
            <span>Canal</span>
            <span>Paris 10</span> */}
            {flat.tags.map((tag) => (<span key={tag}>{tag}</span>))}
            </div>
            </div>
        <div className="apartment__owner">
          <div className="apartment__owner__details">
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="apartment__owner__badge">
              <img src={flat.host.picture} alt="" />
              </div>
          </div>
          <div className="apartment__owner__stars">

            {[1, 2, 3, 4, 5].map((num) => <span key={num} className={props.flat.rating >= num ? "full" : "empty"}>
      <i className="fa-solid fa-star"></i>  </span>
  )}
          {/* <i className="fa-solid fa-star empty"></i>
          <i className="fa-solid fa-star empty"></i>
          <i className="fa-solid fa-star empty"></i>
          <i className="fa-solid fa-star empty"></i>
          <i className="fa-solid fa-star empty"></i> */}
          </div>
          </div>
          </div>
  )
}

export default ApartmentHeader
