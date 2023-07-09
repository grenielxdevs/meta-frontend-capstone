import React from "react";
import "./ReviewCard.css";
import starIcon from "../../assets/star.svg";

const ReviewCard = ({ author, description, image, rating }) => {
  return (
    <div className='review-card' data-testid='review-card'>
      <div className='review-card-container'>
        <img
          className='review-profile-picture'
          src={image}
          alt='author'
          height={50}
        ></img>
        <div>
          <h3 className='review-card-author'>{author}</h3>
          <div className='review-rating'>
            {rating &&
              [...Array(rating)].map((_, index) => (
                <img
                  key={index}
                  src={starIcon}
                  alt='star'
                  height={15}
                  width={15}
                />
              ))}
          </div>
        </div>
      </div>
      <p className='review-description'>{description}</p>
    </div>
  );
};

export default ReviewCard;
