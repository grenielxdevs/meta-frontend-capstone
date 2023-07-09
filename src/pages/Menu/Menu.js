import React from "react";
import MenuCard from "../../components/MenuCard/MenuCard";
import "./Menu.css";
import Lumpia from "../../assets/lumpia.jpg";
import Tinola from "../../assets/tinola.jpg";
import Torta from "../../assets/tortang.jpg";

const menuLists = [
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

const Menu = () => {
  return (
    <div id='menu' data-testid='menu-page'>
      <div className='container'>
        <div className='header-container'>
          <h2 className='title'>Menus</h2>
        </div>

        <div className='header-list'>
          {menuLists.map(({ id, title, description, image, price }) => (
            <MenuCard
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
export default Menu;
