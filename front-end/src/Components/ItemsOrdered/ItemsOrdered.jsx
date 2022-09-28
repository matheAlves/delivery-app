import React, { useContext, useState, useEffect } from 'react';
import ClientContext from '../../Provider/ClientContext';
import Items from './Items';

function ItemsOrdered() {
  const { shoppingCart } = useContext(ClientContext);
  const [soldItems, setSoldItems] = useState([]);

  const getItemsFromLocalStorage = () => {
    const items = JSON.parse(localStorage.getItem('shoppingCart'));

    if (!items) {
      setSoldItems(shoppingCart);
    } else {
      setSoldItems(items);
    }
  };

  useEffect(() => {
    getItemsFromLocalStorage();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {
          soldItems
            .filter(({ quantity }) => quantity > 0)
            .map(({ id, name, price, quantity }, index) => (
              <Items
                id={ index }
                description={ name }
                quantity={ quantity }
                unitValue={ Number(price) }
                key={ id }
              />
            ))
        }
      </tbody>
    </table>
  );
}

export default ItemsOrdered;
