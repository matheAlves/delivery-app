import { useParams } from 'react-router-dom';

function OrderDetails() {
  const { id } = useParams();
  return (
    <h1>
      Pedido
      {' '}
      {id}
    </h1>
  );
}

export default OrderDetails;
