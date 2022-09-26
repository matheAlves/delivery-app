import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import ClientContext from './ClientContext';
// import MyContext from './MyContext';

function ClientProvider({ children }) {
  // const { products } = useContext(MyContext);
  const [shoppingCart, setShoppingCart] = useState([]);

  // const test = useCallback((id, operation) => {
  //   products.forEach((itm) => {
  //     if (shoppingCart[`${itm.productId}`] === id) {
  //       if (operation === '+') shoppingCart[`${itm.productId}`].quantity += 1;
  //       shoppingCart[`${itm.productId}`].quantity -= 1;
  //     }
  //     if (itm.id === id) {
  //       const obj = {
  //         productId: itm.id,
  //         name: itm.name,
  //         quantity: 0,
  //         unitPrice: itm.price,
  //         subTotal: '0,00',
  //       };
  //       obj.quantity = operation === '+' ? obj.quantity += 1 : obj.quantity -= 1;
  //       obj.subTotal = obj.quantity === 0 ? '0,00' : obj.quantity * obj.unitPrice;
  //       setShoppingCart([...shoppingCart, obj]);
  //       console.log(obj);
  //     }
  //   });
  // }, [products, shoppingCart]);

  const contextObject = useMemo(() => ({
    shoppingCart, setShoppingCart }), [shoppingCart]);

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
