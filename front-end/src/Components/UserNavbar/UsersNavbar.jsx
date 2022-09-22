import React, { Link } from 'react-router-dom';
import './style.css';

function UserNavbar() {
  return (
    <nav className="nav">
      <div className="navBox">
        <Link
          to="/customer/products"
          className="navBoxContent produtos"
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </Link>
        <Link
          to="/customer/checkout"
          className="navBoxContent pedidos"
          datatest-id="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </Link>
      </div>
      <div className="navBox">
        <p
          className="navBoxContent usuarioNome"
          datatest-id="customer_products__element-navbar-user-full-name"
        >
          Nome do usuario
        </p>
        <button
          type="button"
          className="navBoxContent logout"
          datatest-id="customer_products__element-navbar-link-logout"
          onClick={ () => { console.log('logout function called'); } }
        >
          Sair
        </button>
      </div>
    </nav>
  );
}

export default UserNavbar;
