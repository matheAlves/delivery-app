import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

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
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      if (user.role === 'administrator') navigate('/admin/manage');
      if (user.role === 'customer') navigate('/customer/products');
    }

    if (password.length >= MIN_PASSWORD_LENGTH && loginRegex.test(email)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [email, password, navigate]);

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
    console.log(data);

    if (result.status !== SUCCESSFULLY_HTTP_STATUS) {
      setAuthenticated(true);
      setErrorMessage(data.message);
    } else {
      setAuthenticated(false);
      localStorage.setItem('user', JSON.stringify(data));
      if (data.role === 'administrator') {
        navigate('/admin/manage');
      } else {
        navigate('/customer/products');
      }
    }
  };

  return (
    <form className="form display-flex">
      { authenticated && (
        <p data-testid="common_login__element-invalid-email">
          { errorMessage }
        </p>
      )}
      <label
        htmlFor="login"
        className="display-flex font-size"
      >
        Login
        <input
          id="login"
          type="text"
          placeholder="email@tryber.com"
          data-testid="common_login__input-email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
          className="font-size"
        />
      </label>

      <label
        htmlFor="password"
        className="display-flex font-size"
      >
        Senha
        <input
          id="password"
          type="password"
          data-testid="common_login__input-password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
          className="font-size"
        />
      </label>

      <div className="button">
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ !valid }
          onClick={ login }
          className="font-size"
        >
          Login
        </button>
      </div>

      <div className="button-outlined">
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => navigate('/register') }
          className="font-size"
        >
          Ainda não tenho conta
        </button>
      </div>
    </form>
  );
}

export default Login;
