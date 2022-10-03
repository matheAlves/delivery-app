import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function OrderCardClient({ id, status, saleDate, totalPrice }) {
  const [newDate] = saleDate.split('T');
  const newPrice = totalPrice.replace('.', ',');
  const [year, month, day] = newDate.split('-');
  const newYear = year;

  const color = () => {
    if (status === 'Preparando') return 'yellow-300';
    if (status === 'Em Trânsito') return 'green-200';
    if (status === 'Entregue') return 'green-400';
    return 'yellow-400';
  };

  return (
    <div className="bg-neutral-100 mx-4 rounded-md my-4">
      <Link
        to={ `/customer/orders/${id}` }
        className="flex flex-row space-x-3 items-center px-6"
      >
        <div>
          <p
            data-testid={ `customer_orders__element-order-id-${id}` }
            className="font-bold text-xl text-center"
          >
            {`Pedido ${id}`}
          </p>
        </div>
        <div>
          <p
            data-testid={ `customer_orders__element-delivery-status-${id}` }
            className={ `text-xl w-36 text-center bg-${color()} p-6` }
          >
            { `${status}` }
          </p>
        </div>
        <div>
          <p
            data-testid={ `customer_orders__element-order-date-${id}` }
            className="text-l font-bold"
          >
            { `${day}/${month}/${newYear}` }
          </p>
          <p
            data-testid={ `customer_orders__element-card-price-${id}` }
            className="text-l font-bold"
          >
            { `R$${newPrice}` }
          </p>
        </div>
      </Link>
    </div>
  );
}

OrderCardClient.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default OrderCardClient;
