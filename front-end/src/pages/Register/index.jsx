import React, { useEffect, useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    const MIN_NAME_LENGTH = 12;
    const MIN_PASSWORD_LENGTH = 6;
    const emailRegex = /\S+@\S+\.com/;
    const isValid = name.length >= MIN_NAME_LENGTH && emailRegex.test(email)
      && password.trim().length >= MIN_PASSWORD_LENGTH;
    setDisabled(!isValid);
  }, [name, email, password]);

  return (
    <div>
      <h1>Cadastro</h1>
      <form>
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
            type="text"
            id="password"
            placeholder="Senha"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ isDisabled }
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}

export default Register;
