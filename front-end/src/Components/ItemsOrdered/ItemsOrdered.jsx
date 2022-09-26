import React, { useContext } from 'react';
import MyContext from '../../Provider/MyContext';
import Items from './Items';

function ItemsOrdered() {
  const { products } = useContext(MyContext);
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
          products.map(({ id, name, price }, index) => (
            <Items
              id={ index }
              description={ name }
              quantity={ 2 }
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
