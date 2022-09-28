import React from 'react';
import PropTypes from 'prop-types';

function OrderDetailsItems({ index, description, quantity, price }) {
  return (
    <tr>
      <td
        data-testid="customer_checkout__element-order-table-item-number-1"
      >
        { index + 1 }
      </td>
      <td
        data-testid="customer_order_details__element-order-table-name-1"
      >
        { description }
      </td>
      <td
        data-testid="customer_order_details__element-order-table-quantity-1"
      >
        { quantity }
      </td>
      <td
        data-testid="customer_order_details__element-order-table-unit-price-1"
      >
        { `R$ ${price.toFixed(2)}` }
      </td>
      <td
        data-testid="customer_order_details__element-order-table-sub-total-<index>"
      >
        { `R$ ${(quantity * price).toFixed(2)}` }
      </td>
    </tr>
  );
}

OrderDetailsItems.propTypes = {
  index: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default OrderDetailsItems;
