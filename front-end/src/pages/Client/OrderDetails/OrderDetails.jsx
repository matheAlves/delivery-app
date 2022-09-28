import { useParams } from 'react-router-dom';
import OrderDetailsTable from '../../../Components/OrderDetailsTable/OrderDetailsTable';
import UserNavbar from '../../../Components/UserNavbar/UsersNavbar';

function OrderDetails() {
  const { id } = useParams();
  return (
    <>
      <UserNavbar />
      <h1>
        Pedido
        {' '}
        {id}
        ;
        P.Vend:
      </h1>
      <OrderDetailsTable orderId={ Number(id) } />
    </>

  );
}

export default OrderDetails;
