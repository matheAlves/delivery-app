import React, { useContext } from 'react';
import MyContext from '../../Provider/MyContext';
import OrderDetailsItems from './OrderDetailsItems';

function OrderDetailsTable() {
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
        </tr>
      </thead>
      <tbody>
        {
          products.map((product, index) => (
            <OrderDetailsItems
              index={ index }
              description={ product.name }
              quantity={ 6 }
              unitValue={ Number(product.price) }
              key={ index }
            />
          ))
        }
      </tbody>
    </table>
  );
}

export default OrderDetailsTable;
