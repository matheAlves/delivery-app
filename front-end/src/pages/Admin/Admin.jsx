import React, { useState } from 'react';
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar';

function Admin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <AdminNavbar />
      <form>
        <h2>Cadastrar novo usuário</h2>

        <label htmlFor="name">
          Nome
          <input
            id="name"
            data-testid="customer_checkout__input-address"
            type="text"
            value={ name }
            onChange={ ({ target: { value } }) => setName(value) }
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            id="email"
            data-testid="customer_checkout__input-address"
            type="text"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            id="password"
            data-testid="customer_checkout__input-address"
            type="password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>
      </form>
    </>
  );
}

export default Admin;
