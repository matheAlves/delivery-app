import { useParams } from 'react-router-dom';
import OrderDetailsTable from '../../../Components/OrderDetailsTable/OrderDetailsTable';

function OrderDetails() {
  const { id } = useParams();
  return (
    <>
      <h1>
        Pedido
        {' '}
        {id}
      </h1>
      <OrderDetailsTable />
    </>

  );
}

export default OrderDetails;
