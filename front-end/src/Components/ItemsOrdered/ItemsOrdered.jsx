import React, { useContext } from 'react';
import ClientContext from '../../Provider/ClientContext';
import Items from './Items';

function ItemsOrdered() {
  const { shoppingCart } = useContext(ClientContext);
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
          shoppingCart
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
