import React from "react";
import "./Popup.css";
import Button from "../Button/Button";

const Popup = ({ text, description, onClose }) => {
  return (
    <>
      <div
        data-testid='popup-background'
        className='popup-background'
        onClick={onClose}
      ></div>
      <div className='popup'>
        <h2 className='popup-title'>{text}</h2>
        <p className='popup-description'>{description}</p>
        <div className='popup-button'>
          <Button onClick={onClose} text='Confirm' />
        </div>
      </div>
    </>
  );
};

export default Popup;
