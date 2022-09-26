import React, { useEffect, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../../Components/ProductCard/ProductCard';
import UserNavbar from '../../../Components/UserNavbar/UsersNavbar';
import MyContext from '../../../Provider/MyContext';
import './style.css';

function ClientProducts() {
  const { products, setUser } = useContext(MyContext);
  const navigate = useNavigate();

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

  useEffect(() => getUser(), [getUser]);

  return (
    <>
      <UserNavbar />
      <section className="products_list">
        {products.map((itm) => (
          <ProductCard
            cardName={ itm.name }
            cardPrice={ itm.price }
            cardId={ itm.id }
            key={ itm.id }
            cardImg={ itm.urlImage }
            cardQuantity={ 0 }
          />
        ))}
        <button
          type="button"
          className="cartButton"
        >
          {`Ver carrinho: ${'valor futuro'}`}
        </button>
      </section>
    </>
  );
}

export default ClientProducts;
