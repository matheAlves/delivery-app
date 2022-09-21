import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [exemplo, setExemplo] = useState('Esse é um texto de exemplo galerinha.');

  const contextObject = useMemo(() => ({
    // Exemplo de como setar estado de maneira global com o provider.//
    // criando um estado e passando pro objeto do provider ele pode ser recuperado por props//
    // globalmente, deixando esse exemplo caso alguem precise. Podem apagar esse estado e comment depois.//

    // o hook useMemo ele funciona para evitar renderizações indesejadas.//
    // passando no array no segundo parametro qual dependencia vai causar outro render//
    // somente quando aquela dependencia especifica for chamada, bom levar isso em conta futuramente. ;D//
    exemplo,
    setExemplo,
  }), [exemplo]);

  return (
    <MyContext.Provider value={ contextObject }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default MyProvider;
