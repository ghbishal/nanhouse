import "./menu.scss";
import {useState} from "react";

// From react Reveal
import {Zoom, Fade} from "react-reveal";

// From Materail UI
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import DirectionsCarFilledSharpIcon from "@mui/icons-material/DirectionsCarFilledSharp";
import DiningIcon from "@mui/icons-material/Dining";
import TakeoutDiningSharpIcon from "@mui/icons-material/TakeoutDiningSharp";
import BentoSharpIcon from "@mui/icons-material/BentoSharp";

import TANDOORI from "../../assets/bgimg/ichigayakabab.jpg";

import Categories from "../categories/Categories";
import items from "../../database/ItemsData";
import MenuItems from "../menuItems/MenuItems";

const allCategories = ["All", ...new Set(items.map((item) => item.category))]; // category = from data table

const Menu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((items) => items.category === category);
    setMenuItems(newItems);
  };

  return (
    <main id="menu" className="menu-container">
      <section className="ourServices">
        <div className="bgimage">
          <Zoom delay={60} duration={2000}>
            <div className="header">
              <h1>Our Services</h1>
              <h2>Everything at your doorstep.</h2>
              <div className="divider">
                <span className="left"></span>
                <LocalDiningIcon className="spoonFork" />
                <span className="right"></span>
              </div>
            </div>
          </Zoom>

          <div className="services ">
            <Fade left big delay={60} duration={2000}>
              <div className="container">
                <div className="card">
                  <div className="imgbox">
                    <DiningIcon className="img" />
                  </div>
                  <div className="contextBox">
                    <h2>Dine In</h2>
                    <a href="#">Reservation</a>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="card">
                  <div className="imgbox">
                    <TakeoutDiningSharpIcon className="img" />
                  </div>
                  <div className="contextBox">
                    <h2>Take Out</h2>
                    <a href="#">Call Us</a>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade right big delay={60} duration={2000}>
              <div className="container">
                <div className="card">
                  <div className="imgbox">
                    <DirectionsCarFilledSharpIcon className="img" />
                  </div>
                  <div className="contextBox">
                    <h2>Delivery</h2>
                    <a href="#">Order Now</a>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="card">
                  <div className="imgbox">
                    <BentoSharpIcon className="img" />
                  </div>
                  <div className="contextBox">
                    <h2>Bento </h2>
                    <a href="#">Call Us</a>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="menuSlogan">
        <div className="slogan">
          <Zoom delay={40} duration={2000}>
            <h1>Find Our Menu</h1>
            <h2>Hundreds of flavors under one roof.</h2>
            <div className="divider">
              <span className="left"></span>
              <LocalDiningIcon className="spoonFork" />
              <span className="right"></span>
            </div>
          </Zoom>
          <div className="categories-section">
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              filterItems={filterItems}
            />
          </div>
        </div>
      </section>
      <MenuItems items={menuItems} className="menu-items" />
    </main>
  );
};

export default Menu;
