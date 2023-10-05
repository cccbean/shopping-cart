import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Card from './Card';

const Header = ({ cart, setCart }) => {
  const modal = useRef();

  const showModal = () => {
    modal.current.showModal();
  };

  const closeModal = () => {
    modal.current.close();
  };

  return (
    <header>
      <h1>Shopping Cart</h1>
      <nav className="primary-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
        <button onClick={showModal}>Cart</button>
        <dialog className="shopping-cart" ref={modal}>
          <h2>Here&apos;s what&apos;s in your cart:</h2>
          {cart.map((item) => {
            return (
              <Card
                key={item.id}
                item={item}
                cart={cart}
                setCart={setCart}
              />
            );
          })}
          <button onClick={closeModal}>Close</button>
        </dialog>
      </nav>
    </header>
  );
};

export default Header;
