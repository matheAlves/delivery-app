import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OrderCardClient({ id, status, saleDate, totalPrice }) {
  const [newDate] = saleDate.split('T');
  const newPrice = totalPrice.replace('.', ',');
  const [year, month, day] = newDate.split('-');
  const newYear = year;
  return (
    <div>
      <Link to={ `/customer/orders/${id}` }>
        <div>
          <p data-testid={ `customer_orders__element-order-id-${id}` }>
            {`Pedido ${id}`}
          </p>
        </div>
        <div>
          <p data-testid={ `customer_orders__element-delivery-status-${id}` }>
            { `${status}` }
          </p>
        </div>
        <div>
          <p data-testid={ `customer_orders__element-order-date-${id}` }>
            { `${day}/${month}/${newYear}` }
          </p>
          <p data-testid={ `customer_orders__element-card-price-${id}` }>
            { `${newPrice}` }
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
