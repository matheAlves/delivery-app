import React, { useEffect, useContext, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../../Components/ProductCard/ProductCard';
import UserNavbar from '../../../Components/UserNavbar/UsersNavbar';
import ClientContext from '../../../Provider/ClientContext';
import MyContext from '../../../Provider/MyContext';
import './style.css';

function ClientProducts() {
  const { products, setUser } = useContext(MyContext);
  const { shoppingCart, setShoppingCart } = useContext(ClientContext);
  const navigate = useNavigate();
  const [totalValue, setTotalValue] = useState(0);

  const checkIsValid = useCallback(async () => {
    const url = 'http://localhost:3001/users/validate';
    const localUser = JSON.parse(localStorage.getItem('user'));
    const get = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localUser.token,
      } });
    const data = await get.json();

    if (!data.role) {
      localStorage.removeItem('user');
      navigate('/login');
    }
  }, [navigate]);

  const getUser = useCallback(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    if (!localUser) {
      navigate('/login');
    }
    setUser(localUser);
    checkIsValid();
  }, [setUser, navigate, checkIsValid]);

  const putQuantityIntoProducts = () => {
    const storedShoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if (!storedShoppingCart) {
      if (shoppingCart.length === 0) {
        setShoppingCart(products);
      } else if (!Object.keys(shoppingCart[0]).includes('quantity')) {
        setShoppingCart(products.map((product) => ({ ...product, quantity: 0 })));
      }
    } else {
      setShoppingCart(storedShoppingCart);
    }
  };

  const calculateTotalValue = () => {
    if (!shoppingCart.quantity) {
      putQuantityIntoProducts();
    }
    const calculatedTotalValue = shoppingCart.reduce((acc, product) => {
      const partial = acc;
      if (product.quantity > 0) {
        const productTotal = Number(product.quantity) * Number(product.price);
        const partialTotal = partial + productTotal;
        return partialTotal;
      } return acc;
    }, 0);
    setTotalValue(calculatedTotalValue);
  };

  useEffect(() => {
    getUser();
  }, [getUser]);

  useEffect(() => {
    putQuantityIntoProducts();
    calculateTotalValue();
  }, []);

  return (
    <>
      <UserNavbar />
      <section className="products_list">
        {shoppingCart.map((itm) => (
          <ProductCard
            cardName={ itm.name }
            cardPrice={ itm.price }
            cardId={ itm.id }
            key={ itm.id }
            cardImg={ itm.urlImage }
            cardQuantity={ itm.quantity }
            calculateTotalValue={ calculateTotalValue }
          />
        ))}
        <button
          type="button"
          className="cartButton"
          onClick={ () => navigate('/customer/checkout') }
          data-testid="customer_products__checkout-bottom-value"
          disabled={ totalValue === 0 }
        >
          {`Ver carrinho: R$ ${totalValue.toFixed(2).replace('.', ',') || 0}`}
        </button>
      </section>
    </>
  );
}

export default ClientProducts;
