import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OrderCard({ id, status, saleDate, totalPrice }) {
  return (
    <div>
      <Link to={ `/customer/orders/${id}` }>
        <p data-testid={ `customer_orders__element-order-id-${id}` }>
          {`Pedido ${id}`}
        </p>
        <p data-testid={ `customer_orders__element-delivery-status-${id}` }>
          { `Status ${status}` }
        </p>
        <p data-testid={ `customer_orders__element-order-date-${id}` }>
          { `${saleDate}` }
        </p>
        <p data-testid={ `customer_orders__element-card-price-${id}` }>
          { `${totalPrice}` }
        </p>
      </Link>
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default OrderCard;
