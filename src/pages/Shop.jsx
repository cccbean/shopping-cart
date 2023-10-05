import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../components/Card';
import './Shop.css';

const Shop = ({ cart, setCart }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        actualData.forEach((item) => item.inCart = false);
        console.log(actualData);
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main>
      <h1>Shop</h1>
      <ul className="product-filters">
        <li>
          <button onClick={() => setCategory(`men's clothing`)}>
            Men&apos;s Clothing
          </button>
        </li>
        <li>
          <button onClick={() => setCategory(`jewelery`)}>Jewelry</button>
        </li>
        <li>
          <button onClick={() => setCategory(`electronics`)}>
            Electronics
          </button>
        </li>
        <li>
          <button onClick={() => setCategory(`women's clothing`)}>
            Women&apos;s Clothing
          </button>
        </li>
        <li>
          <button onClick={() => setCategory(``)}>Clear</button>
        </li>
      </ul>
      <div className="card-container">
        {data.map((item) => {
          if (category === '') {
            return (
              <Card
                key={item.id}
                item={item}
                cart={cart}
                setCart={setCart}
              />
            );
          } else {
            if (item.category === category) {
              return (
                <Card
                  key={item.id}
                  item={item}
                  cart={cart}
                  setCart={setCart}
                />
              );
            } else {
              return null;
            }
          }
        })}
      </div>
    </main>
  );
};

export default Shop;
