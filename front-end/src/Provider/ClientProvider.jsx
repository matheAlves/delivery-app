import React, { useState, useMemo, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import ClientContext from './ClientContext';
import MyContext from './MyContext';

function ClientProvider({ children }) {
  const { products } = useContext(MyContext);
  const [shoppingCart, setShoppingCart] = useState(products);

  const setItemQuantity = (id, operation) => {
    const [productId] = shoppingCart.filter((product) => product.id === id);

    if (!operation.innerHTML) {
      productId.quantity = Number(operation.value);
    } else if (operation.innerHTML === '+') {
      productId.quantity += 1;
    } else if (productId.quantity > 0) {
      productId.quantity -= 1;
    } else {
      productId.quantity = 0;
    }

    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  };

  const contextObject = useMemo(() => ({
    shoppingCart,
    setShoppingCart,
    setItemQuantity,
  }), [shoppingCart, setItemQuantity]);

  useEffect(() => {
    if (!localStorage.getItem('shoppingCart')) {
      setShoppingCart(products);
      console.log(shoppingCart);
      localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
      console.log(localStorage.getItem('shoppingCart'));
    }
  }, []);

  return (
    <ClientContext.Provider value={ contextObject }>
      { children }
    </ClientContext.Provider>
  );
}

ClientProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default ClientProvider;
