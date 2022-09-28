import React, { useEffect, useState } from 'react';
import OrderCard from '../../../Components/OrderCard/OrderCard';
import UserNavbar from '../../../Components/UserNavbar/UsersNavbar';

function Orders() {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchOrders = async () => {
      const result = await fetch('http://localhost:3001/sales', {
        method: 'GET',
      });
      const data = await result.json();
      const filterOrders = data.filter((item) => item.userId === user.id);
      setOrders(filterOrders);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <header>
        <UserNavbar />
      </header>
      <div>
        { orders.length === 0 ? 'Você ainda não tem pedidos finalizados'
          : orders.map((item) => (
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
