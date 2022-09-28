import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetailsTable from '../../../Components/OrderDetailsTable/OrderDetailsTable';
import UserNavbar from '../../../Components/UserNavbar/UsersNavbar';
import { fetchSaleById } from '../../../services/clientAPI';
import { fetchUserById } from '../../../services/userAPI';

function OrderDetails() {
  const [order, setOrder] = useState({});

  const { id } = useParams();

  const getSaleData = async () => {
    const data = await fetchSaleById(id);
    const [newDateFormat] = data.saleDate.split('T');
    data.saleDate = newDateFormat;
    const { name } = await fetchUserById(data.sellerId);
    data.seller = name;
    setOrder(data);
  };

  useEffect(() => {
    getSaleData();
  }, []);

  return (
    <>
      <UserNavbar />
      <h1
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        Pedido
        {' '}
        {id}
        ;
      </h1>
      {order
      && (
        <>
          <span
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {`P.Vend: ${order.seller}`}
          </span>
          {' '}
          <span
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {order.saleDate}
          </span>
          {' '}
          <span>
            {order.status}
          </span>
          {' '}
        </>)}
      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
      >
        Marcar como entregue
      </button>
      <OrderDetailsTable orderId={ Number(id) } />
      <h1>{`Total: R$ ${order.totalPrice}`}</h1>
    </>

  );
}

export default OrderDetails;
