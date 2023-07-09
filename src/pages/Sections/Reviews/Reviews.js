import React from "react";
import "./Reviews.css";
import ReviewCard from "../../../components/ReviewCard/ReviewCard";
import User1 from "../../../assets/review-user-img-1.png";
import User2 from "../../../assets/review-user-img-2.png";
import User3 from "../../../assets/review-user-img-3.png";
import User4 from "../../../assets/review-user-img-4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import pages from "../../../utils/pages";

const reviews = [
  {
    id: 1,
    author: "Jona Sorth",
    description:
      "I love the vegetables and how they cook eat, cripsy torta and lumpia",
    image: User1,
    rating: 4,
  },
  {
    id: 2,
    author: "Rico Lim",
    description:
      "I love the service and the food, the food are all fresh and the aroma is calming",
    image: User2,
    rating: 5,
  },
  {
    id: 3,
    author: "Myla Rinta",
    description:
      "I love the ice cream dessert, the filipino sorbetes is the best ice cream in the world",
    image: User3,
    rating: 5,
  },
  {
    id: 4,
    author: "Ron Hart",
    description:
      "The Tinolang Manok is so refreshing. The chicken broth is tasty and the chiken is super tender",
    image: User4,
    rating: 4,
  },
];

const Reviews = () => {
  return (
    <div className='reviews-background'>
      <div className='container'>
        <div className='reviews'>
          <div className='reviews-container'>
            <h2 className='reviews-title'>Customer Reviews</h2>
            <Link to={pages.get("reviews").path}>
              View More Reviews
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </Link>
          </div>
          <div className='reviews-list' data-testid='reviews-card'>
            {reviews.map(({ id, author, description, image, rating }) => (
              <ReviewCard
                key={id}
                author={author}
                description={description}
                image={image}
                rating={rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
