import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import OrderDetailsItems from './OrderDetailsItems';
import { fetchSalesProductsById, fetchProductById } from '../../services/clientAPI';

function OrderDetailsTable(props) {
  const [order, setOrder] = useState([]);

  const { orderId } = props;

  const getSale = async () => {
    const getIds = await fetchSalesProductsById(orderId);
    await getIds.forEach(async (p) => {
      const product = await fetchProductById(p.productId);
      product.quantity = p.quantity;
      setOrder((prevState) => [...prevState, product]);
    });
  };

  useEffect(() => {
    getSale();
  }, []);

  return (
    <div>
      {order
      && (
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
              order.map((product, index) => (
                <OrderDetailsItems
                  index={ index }
                  description={ product.name }
                  quantity={ product.quantity }
                  price={ Number(product.price) }
                  key={ index }
                />
              ))
            }
          </tbody>
        </table>)}
    </div>
  );
}

OrderDetailsTable.propTypes = {
  orderId: PropTypes.number.isRequired,
};

export default OrderDetailsTable;