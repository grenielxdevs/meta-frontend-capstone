import React from "react";
import "./Button.css";

const Button = ({ text, onClick, type }) => {
  const handleSubmit = (e) => {
    if (type !== "submit") {
      e.preventDefault();
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button type={type} className='button' onClick={handleSubmit}>
      {text}
    </button>
  );
};

export default Button;
