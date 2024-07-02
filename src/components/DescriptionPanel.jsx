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
        <i className="fa-solid fa-chevron-up" onClick={ShowContent}></i>
        </p>

        {isContentVisible && <p className="description__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>}
        </div>
    )


}

export default DescriptionPanel;



