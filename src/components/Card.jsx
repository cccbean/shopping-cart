import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ item, cart, setCart }) => {
  const addToCart = () => {
    item.inCart = true;
    setCart([...cart, item]);
  };

  const removeFromCart = () => {
    const tempCart = cart.filter((obj) => obj.title !== item.title);
    item.inCart = false;
    setCart(tempCart);
  };

  return (
    <div className="card">
      <Link to={`/shop/${item.id}`} state={{ item: item }}>
        <img src={item.image} alt="" />
      </Link>
      <h3>{item.title}</h3>
      <p>Category: {item.category}</p>
      <p>{item.price}</p>
      {!item.inCart ? (
        <button onClick={addToCart}>Add to Cart</button>
      ) : (
        <button onClick={removeFromCart}>Remove from Cart</button>
      )}
    </div>
  );
};

export default Card;
