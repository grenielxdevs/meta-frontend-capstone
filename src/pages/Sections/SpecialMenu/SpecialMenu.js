import React from "react";
import "./SpecialMenu.css";
import FoodCard from "../../../components/MenuCard/MenuCard";
import Lumpia from "../../../assets/lumpia.jpg";
import Tinola from "../../../assets/tinola.jpg";
import Torta from "../../../assets/tortang.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import pages from "../../../utils/pages";

const specialMenus = [
  {
    id: 1,
    title: "Shanghai Rolls",
    description:
      "Lumpiang Shanghai is Filipino-style spring rolls made of ground pork, chicken, or beef filling wrapped in thin crepes called lumpia wrappers.",
    image: Lumpia,
    price: "₱ 250",
  },
  {
    id: 2,
    title: "Tinolang Manok",
    description:
      "Tinolang Manok is a great tasting and healthy dish to prepare for your family. It is easy to cook and friendly on the budget.",
    image: Tinola,
    price: "₱ 320",
  },
  {
    id: 3,
    title: "Tortang Talong",
    description:
      "Tortang Talong or Eggplant Omelet is a simple yet satisfying recipe. It is eaten with steamed rice and ketchup.",
    image: Torta,
    price: "₱ 180",
  },
];

const SpecialMenu = () => {
  return (
    <div id='special-menu' className='special-menu' data-testid='special-menu'>
      <div className='container'>
        <div className='header-container'>
          <h2 className='specials-title'>Special Menu</h2>
          <Link to={pages.get("orders").path}>
            View More Menus
            <FontAwesomeIcon icon={faArrowRightToBracket} />
          </Link>
        </div>

        <div className='header-list'>
          {specialMenus.map(({ id, title, description, image, price }) => (
            <FoodCard
              key={id}
              title={title}
              description={description}
              image={image}
              price={price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
