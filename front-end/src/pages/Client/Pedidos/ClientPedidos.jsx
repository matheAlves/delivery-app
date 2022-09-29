import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemsOrdered from '../../../Components/ItemsOrdered/ItemsOrdered';
import UserNavbar from '../../../Components/UserNavbar/UsersNavbar';
import getSellers from '../../../services/userAPI';

function ClientOrders() {
  const navigate = useNavigate();
  const [sellers, setSellers] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [address, setAddress] = useState('');
  const [numberAddress, setNumberAddress] = useState('');
  const [seller, setSeller] = useState('Fulana Pereira');
  const SUCCESSFULLY_HTTP_STATUS = 201;

  const setSellersFromDB = async () => {
    const sellersFound = await getSellers();
    setSellers(sellersFound);
  };

  function getTotalValue() {
    const data = localStorage.getItem('totalValue');
    const converted = data.replace(',', '.');
    setTotalValue(Number(converted));
  }

  const getItemsFromLocalStorageToRequest = () => {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

    const soldItems = shoppingCart
      .filter(({ quantity }) => quantity > 0)
      .map(({ id, quantity }) => ({ productId: id, quantity }));

    return soldItems;
  };

  const getSellerAndUserIdFromLocalStorage = () => {
    let [sellerId] = sellers
      .filter(({ name }) => name === seller)
      .map(({ id }) => id);

    const { id: userId } = JSON.parse(localStorage.getItem('user'));

    if (!sellerId) {
      sellerId = 2;
    }
    return { sellerId, userId };
  };

  const getTokenFromLocalStorage = () => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    return token;
  };

  const conclusionOfSale = async () => {
    const url = 'http://localhost:3001/sales';
    const sales = {
      ...getSellerAndUserIdFromLocalStorage(),
      totalPrice: totalValue,
      deliveryAddress: address,
      deliveryNumber: numberAddress,
      saleDate: new Date(),
      status: 'Pendente',
    };
    const saleProducts = getItemsFromLocalStorageToRequest();
    const sale = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getTokenFromLocalStorage(),
      },
      body: JSON.stringify({ sales, saleProducts }),
    });
    const data = await sale.json();

    console.log(data);

    if (sale.status === SUCCESSFULLY_HTTP_STATUS) {
      navigate(`/customer/orders/${data.id}`);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    setSellersFromDB();
    getTotalValue();
  }, []);

  return (
    <>
      <header>
        <UserNavbar />
      </header>

      <section>
        <h2>Finalizar Pedido</h2>
        <ItemsOrdered />
      </section>

      <section>
        <label htmlFor="seller">
          Vendedor:
          <select
            id="seller"
            data-testid="customer_checkout__select-seller"
            value={ seller }
            onChange={ ({ target: { value } }) => setSeller(value) }
          >
            <option disabled={ !!seller }>Selecione uma opção...</option>
            {
              sellers.map(({ name }) => (
                <option key={ name } value={ name }>{ name }</option>
              ))
            }
          </select>
        </label>

        <label htmlFor="addres">
          Endereço
          <input
            id="addres"
            data-testid="customer_checkout__input-address"
            type="text"
            value={ address }
            onChange={ ({ target: { value } }) => setAddress(value) }
          />
        </label>

        <label htmlFor="number-addres">
          Número
          <input
            id="number-addres"
            data-testid="customer_checkout__input-address-number"
            type="number"
            value={ numberAddress }
            onChange={ ({ target: { value } }) => setNumberAddress(value) }
          />
        </label>

        <div>
          <button
            type="button"
            data-testid="customer_checkout__button-submit-order"
            onClick={ conclusionOfSale }
          >
            Finalizar pedido
          </button>
        </div>
      </section>
    </>
  );
}

export default ClientOrders;
