import React, {useState} from 'react'
import "./ImageBanner.scss";

function ImageBanner(props) {
  // const imageUrl = props.imageUrl ? props.imageUrl : "https://picsum.photos/1920/1080";
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };
  
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  return (
      
        <div className="image__banner">
          <div className="image__container">
          {pictures.map((pic, i) => ( 
            <img key={pic} src={pic} alt="" className={getClassName(i)} />))}
            </div>
          {/* <img src={props.imageUrl} alt="" /> */}
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fas fa-chevron-left"></i>
          </button>
         <span className="slide-counter">
                {currentPicture + 1} / {pictures.length} 
          </span>
          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
         
          
        </div>
    
  )
}

export default ImageBanner
