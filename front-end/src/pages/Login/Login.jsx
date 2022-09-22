import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [valid, setValid] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const MIN_PASSWORD_LENGTH = 6;
    const loginRegex = /\S+@\S+\.com/;

    if (password.length >= MIN_PASSWORD_LENGTH && loginRegex.test(login)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [login, password]);

  return (
    <form>
      <label htmlFor="login">
        Login
        <input
          id="login"
          type="text"
          placeholder="email@tryber.com"
          data-testid="common_login__input-email"
          value={ login }
          onChange={ ({ target }) => setLogin(target.value) }
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

      { !valid && (
        <p data-testid="common_login__element-invalid-email">
          Elemento oculto (mensagem de erro)
        </p>
      )}
    </form>
  );
}

export default Login;
