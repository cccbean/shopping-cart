import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Card from './Card';
import { useState, useEffect } from 'react';

const Header = ({ cart, setCart }) => {
  const [closing, setClosing] = useState(true);
  const modal = useRef();

  useEffect(() => {
    if (closing) {
      setTimeout(() => {
        modal.current.close();
      }, 500);
    } else {
      modal.current.showModal();
    }
  }, [closing]);

  return (
    <header>
      <h1>A Totally Real Store</h1>
      <nav className="primary-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <button onClick={() => setClosing(false)}>Cart</button>
          </li>
        </ul>
        <dialog
          className={`shopping-cart ${closing ? 'closing' : ''}`}
          ref={modal}
        >
          <div className="modal-header">
            <h2>Here&apos;s what&apos;s in your cart:</h2>
            <button onClick={() => setClosing(true)}>X</button>
          </div>
          {cart.map((item) => {
            return (
              <Card key={item.id} item={item} cart={cart} setCart={setCart} />
            );
          })}
          
        </dialog>
      </nav>
    </header>
  );
};

export default Header;
