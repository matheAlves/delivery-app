import React from 'react';
import PropTypes from 'prop-types';

function Items({ id, description, quantity, unitValue }) {
  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${id}` }
      >
        { id + 1 }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${id}` }
      >
        { description }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${id}` }
      >
        { quantity }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${id}` }
      >
        { `R$ ${unitValue.toFixed(2).replace('.', ',')}` }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }
      >
        { `R$ ${(quantity * unitValue).toFixed(2).replace('.', ',')}` }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-remove-${id}` }
      >
        Remover Item
      </td>
    </tr>
  );
}

Items.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  unitValue: PropTypes.number.isRequired,
};

export default Items;
