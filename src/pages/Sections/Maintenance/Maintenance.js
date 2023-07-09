import React from "react";
import "./Maintenance.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

const Maintenance = () => {
  return (
    <div id='maintenance' className='container' data-testid='maintenance'>
      <h1 className='maintenance-title'>
        <FontAwesomeIcon icon={faScrewdriverWrench} />
        Maintenance
      </h1>
    </div>
  );
};
export default Maintenance;
