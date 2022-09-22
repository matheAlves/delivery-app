import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [valid, setValid] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SUCCESSFULLY_HTTP_STATUS = 200;

  useEffect(() => {
    const MIN_PASSWORD_LENGTH = 6;
    const loginRegex = /\S+@\S+\.com/;

    if (password.length >= MIN_PASSWORD_LENGTH && loginRegex.test(email)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [email, password]);

  const login = async () => {
    const result = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await result.json();

    if (result.status !== SUCCESSFULLY_HTTP_STATUS) {
      setAuthenticated(true);
      setErrorMessage(data.message);
    } else {
      setAuthenticated(false);
      navigate('/customer/products');
    }
  };

  return (
    <form>
      <label htmlFor="login">
        Login
        <input
          id="login"
          type="text"
          placeholder="email@tryber.com"
          data-testid="common_login__input-email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>

      <label htmlFor="password">
        Senha
        <input
          id="password"
          type="password"
          data-testid="common_login__input-password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="common_login__button-login"
        disabled={ !valid }
        onClick={ login }
      >
        LOGIN
      </button>

      <button
        type="button"
        data-testid="common_login__button-register"
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho conta
      </button>

      { authenticated && (
        <p data-testid="common_login__element-invalid-email">
          { errorMessage }
        </p>
      )}
    </form>
  );
}

export default Login;
