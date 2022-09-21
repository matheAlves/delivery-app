import React, { useContext } from 'react';
import MyContext from '../Provider/MyContext';

function Exemplo() {
  const { exemplo } = useContext(MyContext);
  return (
    <h1>{exemplo}</h1>
  );
}

export default Exemplo;
