import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Card from './Card';
import { useState, useEffect } from 'react';
import cartSvg from '../assets/cart.svg';

const Header = ({ cart, setCart }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modal = useRef();

  useEffect(() => {
    if (modalIsOpen) {
      modal.current.showModal();
    } else {
      setTimeout(() => {
        modal.current.close();
      }, 500);
    }
  }, [modalIsOpen]);

  const handleESC = (e) => {
    if (e.code === 'Escape') {
      e.preventDefault();
      setModalIsOpen(false);
    }
  }

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
            <button onClick={() => setModalIsOpen(true)}>
              <img src={cartSvg} alt="cart" />
            </button>
          </li>
        </ul>
        <dialog
          className={`shopping-cart ${!modalIsOpen ? 'closing' : ''}`}
          ref={modal}
          onKeyDown={handleESC}
        >
          <div className="modal-header">
            <h2>Here&apos;s what&apos;s in your cart:</h2>
            <button onClick={() => setModalIsOpen(false)}>X</button>
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
