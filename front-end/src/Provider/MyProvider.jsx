import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import fetchProducts from '../services/clientAPI';

function MyProvider({ children }) {
  const [products, setProducts] = useState([]);

  const contextObject = useMemo(() => ({ products, setProducts }), [products]);

  const getProducts = async () => {
    const get = await fetchProducts();
    setProducts(get);
  };

  useEffect(() => {
    getProducts();
  }, []);

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
