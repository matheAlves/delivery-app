import React from 'react';
import OrderCard from '../../../Components/OrderCard/OrderCard';
import UserNavbar from '../../../Components/UserNavbar/UsersNavbar';

function Orders() {
  const [orders] = useState([]); // ver de colocar no provider

  return (
    <div>
      <header>
        <UserNavbar />
      </header>
      <div>
        { orders.map((item) => (
          <OrderCard
            key={ item.id }
            id={ item.id }
            status={ item.status }
            saleDate={ item.saleDate }
            totalPrice={ item.totalPrice }
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
