import React from "react";
import "./MenuCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MenuCard = (props) => {
  return (
    <div className='menu-card'>
      <div className='menu-card-image'>
        <img src={props.image} alt='menu' height={167}></img>
      </div>
      <div className='menu-card-body'>
        <div className='menu-card-body-header'>
          <div className='menu-card-body-title'>
            <p className='menu-card-title'>{props.title}</p>
            <p className='menu-card-price'>{props.price}</p>
          </div>
          <p className='menu-card-description'>{props.description}</p>
        </div>

        <Link to='/orders'>
          <FontAwesomeIcon icon={faCartShopping} />
          Order Food
        </Link>
      </div>
    </div>
  );
};

export default MenuCard;
