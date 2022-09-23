import ItemsOrdered from '../../../Components/ItemsOrdered/ItemsOrdered';
import UserNavbar from '../../../Components/UserNavbar/UsersNavbar';

function ClientOrders() {
  return (
    <>
      <header>
        <UserNavbar />
      </header>

      <section>
        <h2>Finalizar Pedido</h2>
        <ItemsOrdered />
        <h2 data-testid="customer_checkout__element-order-total-price">Total</h2>
      </section>

      <section>
        <select data-testid="customer_checkout__select-seller">
          <option>Vendedores</option>
        </select>

        <label htmlFor="addres">
          Endereço
          <input
            id="addres"
            data-testid="customer_checkout__input-address"
            type="text"
          />
        </label>

        <label htmlFor="number-addres">
          Número
          <input
            id="number-addres"
            data-testid="customer_checkout__input-address-number"
            type="number"
          />
        </label>

        <div>
          <button
            type="button"
            data-testid="customer_checkout__button-submit-order"
          >
            Finalizar pedido
          </button>
        </div>
      </section>
    </>
  );
}

export default ClientOrders;
