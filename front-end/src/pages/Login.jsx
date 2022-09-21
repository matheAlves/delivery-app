import React from 'react';

function Login() {
  return (
    <form>
      <label htmlFor="login">
        Login
        <input
          id="login"
          placeholder="email@tryber.com"
          data-testid="common_login__input-email"
        />
      </label>

      <label htmlFor="password">
        Senha
        <input
          id="password"
          placeholder="email@tryber.com"
          data-testid="common_login__input-password"
        />
      </label>

      <button
        type="button"
        data-testid="common_login__button-login"
      >
        LOGIN
      </button>

      <button
        type="button"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </button>

      <p data-testid="common_login__element-invalid-email">
        Elemento oculto (mensagem de erro)
      </p>
    </form>
  );
}

export default Login;
