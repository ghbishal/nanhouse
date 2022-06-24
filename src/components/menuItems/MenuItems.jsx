import "./menuItems.scss";

// Inside the categories
// Items inside the menu;

const MenuItems = ({items}) => {
  return (
    <div className="section">
      {items.map((item) => {
        const {id, title, img, desc, price} = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4 className="title">{title}</h4>
                <h4 className="price">¥{price}</h4>
              </header>
              <div className="item-text">{desc}</div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default MenuItems;
