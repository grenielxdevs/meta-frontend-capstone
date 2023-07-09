import React from "react";
import "./Visuals.css";
import Button from "../../../components/Button/Button";
import VisualImage from "../../../assets/visuals-image.png";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const Visuals = () => {
  const navigate = useNavigate();
  const onHandleReserve = () => {
    navigate(pages.get("reservations").path);
  };

  return (
    <div id='visuals' className='visuals-background' data-testid='visuals'>
      <div className='container'>
        <div className='visuals-contents'>
          <div className='visuals-content'>
            <h1 className='visuals-title'>Little Lemon</h1>
            <h2 className='visuals-subtitle'>Manila</h2>
            <p>
              Flavored in the heart of Manila, Philippines, experience the rich
              and tasty dishes that were passed down through generations of
              hardwork and dedication. Our food will not only satisfy your
              cravings, but will also provide you with a great memory for us to
              remember.
            </p>
            <Button text={"Book A Reservation"} onClick={onHandleReserve} />
          </div>
          <img
            className='visuals-image'
            src={VisualImage}
            alt='Little Lemon Food Visuals'
            width={450}
          />
        </div>
      </div>
    </div>
  );
};

export default Visuals;
