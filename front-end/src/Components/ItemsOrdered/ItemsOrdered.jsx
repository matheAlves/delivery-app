import React, { useContext, useState, useEffect } from 'react';
import ClientContext from '../../Provider/ClientContext';
import Items from './Items';

function ItemsOrdered() {
  const { shoppingCart } = useContext(ClientContext);
  const [totalValue, setTotalValue] = useState(0);
  const [soldItems, setSoldItems] = useState([]);

  const getItemsFromLocalStorage = () => {
    const items = JSON.parse(localStorage.getItem('shoppingCart'));

    if (!items) {
      setSoldItems(shoppingCart);
    } else {
      setSoldItems(items);
    }
  };

  function getTotalValue() {
    const data = localStorage.getItem('totalValue');
    const converted = data.replace(',', '.');
    setTotalValue(Number(converted));
  }

  const removeCartItem = (e) => {
    const [find] = soldItems.filter((c) => c.id === Number(e.target.id));
    const result = (Number(totalValue) - Number(find.quantity * find.price)).toFixed(2);
    setTotalValue(result);
    find.quantity = 0;
    soldItems.splice(e.target.id - 1, 1, find);
    setSoldItems(soldItems);
    localStorage.setItem('shoppingCart', JSON.stringify(soldItems));
    localStorage.setItem('totalValue', (result).replace('.', ','));
  };

  useEffect(() => {
    getTotalValue();
    getItemsFromLocalStorage();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
            soldItems
              .filter(({ quantity }) => quantity > 0)
              .map(({ id, name, price, quantity }, index) => (
                <Items
                  id={ id }
                  description={ name }
                  quantity={ quantity }
                  unitValue={ Number(price) }
                  itemNumber={ index }
                  key={ index }
                  removeCartItem={ removeCartItem }
                />
              ))
          }
        </tbody>
      </table>
      <h2>
        <span>Total: R$ </span>
        <span data-testid="customer_checkout__element-order-total-price">
          {Number(totalValue).toFixed(2).replace('.', ',')}
        </span>
      </h2>
    </div>
  );
}

export default ItemsOrdered;
