import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setDisabled] = useState(true);
  const [hiddenMessage, setHiddenMessage] = useState(false);

  useEffect(() => {
    const MIN_NAME_LENGTH = 12;
    const MIN_PASSWORD_LENGTH = 6;
    const emailRegex = /\S+@\S+\.com/;
    const isValid = name.length >= MIN_NAME_LENGTH && emailRegex.test(email)
      && password.trim().length >= MIN_PASSWORD_LENGTH;
    setDisabled(!isValid);
  }, [name, email, password]);

  const handleClick = async () => {
    const STATUS_CODE = 201;
    try {
      const result = await fetch('http://localhost:3001/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          password,
          role: 'customer',
        }),
      });
      const data = await result.json();
      console.log(result, data);
      if (result.status !== STATUS_CODE) {
        setHiddenMessage(true);
      } else {
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/customer/products');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Cadastro</h1>
      <form className="flex">
        <label htmlFor="name">
          Nome
          <input
            data-testid="common_register__input-name"
            type="text"
            id="name"
            placeholder="Seu nome"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            data-testid="common_register__input-email"
            type="text"
            id="email"
            placeholder="seu-email@site.com.br"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            data-testid="common_register__input-password"
            type="password"
            id="password"
            placeholder="Senha"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          data-testid="common_register__button-register"
          type="button"
          disabled={ isDisabled }
          onClick={ handleClick }
        >
          CADASTRAR
        </button>

        { hiddenMessage && (
          <p data-testid="common_register__element-invalid_register">
            User already exists
          </p>
        )}
      </form>
    </div>
  );
}

export default Register;
