import UserNavbar from '../../../Components/UserNavbar/UsersNavbar';
import ClientProvider from '../../../Provider/ClientProvider';

function ClientOrders() {
  return (
    <ClientProvider>
      <header>
        <UserNavbar />
      </header>
      <section>
        <h1>Pedidos</h1>
      </section>
    </ClientProvider>
  );
}

export default ClientOrders;
