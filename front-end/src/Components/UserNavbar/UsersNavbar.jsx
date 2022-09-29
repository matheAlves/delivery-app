import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MyContext from '../../Provider/MyContext';
import './style.css';

function UserNavbar() {
  const { setUser, user } = useContext(MyContext);
  const [userRole, setUserRole] = useState('')
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('shoppingCart');
    setUser('');
    navigate('/login');
  };

  const getUserData = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    setUserRole(user.role);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <nav className="nav">
      {userRole !== 'customer' ?
        <>
          <button
            type="button"
            onClick={() => navigate('/customer/orders')}
            className="navBoxContent pedidos"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </button>
          <p
            className="navBoxContent usuarioNome"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {user ? user.name : 'user'}
          </p>
          <button
            type="button"
            className="navBoxContent logout"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={logout}
          >
            Sair
          </button>
        </>
        :
        <>
          <button
            type="button"
            onClick={() => navigate('/customer/products')}
            className="navBoxContent produtos"
            data-testid="customer_products__element-navbar-link-products"
          >
            PRODUTOS
          </button>
          <button
            type="button"
            onClick={() => navigate('/customer/orders')}
            className="navBoxContent pedidos"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </button>
          <p
            className="navBoxContent usuarioNome"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {user ? user.name : 'user'}
          </p>
          <button
            type="button"
            className="navBoxContent logout"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={logout}
          >
            Sair
          </button>
        </>
      }
    </nav>
  );
}

export default UserNavbar;
