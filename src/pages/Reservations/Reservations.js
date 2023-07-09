import React, { useState } from "react";
import "./Reservations.css";
import ReservationForm from "../../components/ReservationForm/ReservationForm";
import Popup from "../../components/Popup/Popup";
import pages from "../../utils/pages";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { fetchAPI } from "../../utils/Api";

const Reservations = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (e, formValues) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    const areAllFieldsFilled = Object.values(formValues).every(
      (value) => value
    );

    if (areAllFieldsFilled) {
      setIsPopupVisible(true);
    }
  };

  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
  };

  const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
  ];

  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <div data-testid='reservations' id='reservation'>
      <div className='container'>
        <div className='reservation-card'>
          <h1 className='reservation-title'>Reservation Form</h1>
          <ReservationForm
            availableTimes={availableTimes}
            dispatchOnDateChange={dispatchOnDateChange}
            onFormSubmit={handleFormSubmit}
            isFormSubmitted={isFormSubmitted}
          />
        </div>

        {isPopupVisible && (
          <Popup
            onClose={() => {
              setIsPopupVisible(false);
              navigate(pages.get("home").path);
            }}
            text='Reservation Successful!'
            description='Your Reservation has been successful. Thank you for choosing Little Lemon. Your reference will be sent via Email.'
          />
        )}
      </div>
    </div>
  );
};

export default Reservations;
