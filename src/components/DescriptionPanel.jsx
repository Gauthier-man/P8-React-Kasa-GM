import React, {useState} from "react";
import "./DescriptionPanel.scss";

function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const ShowContent = () => {
      setIsContentVisible(!isContentVisible);
  }
  
    return (
      <div className="description__panel">
      <p className="description__header">
        <span>{props.title}</span>
          <i
          className={`fa-solid ${isContentVisible ? 'fa-chevron-down' : 'fa-chevron-up'}`}
          onClick={ShowContent}
        ></i>
        </p>

        {isContentVisible && <p className="description__content">{props.content}
          </p>}
        </div>
    )


}

export default DescriptionPanel;



