import {useLocation} from 'react-router-dom'

const ProductPage = () => {
  let { state } = useLocation();
  const item = state.item;

  return (
    <>
      <h3>{item.title}</h3>
      <img src={item.image} alt="" />
      <p>{item.description}</p>
    </>
  );
};

export default ProductPage;
