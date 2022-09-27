import PropTypes from 'prop-types';
import { useState, useContext, useEffect } from 'react';
import ClientContext from '../../Provider/ClientContext';
import MyContext from '../../Provider/MyContext';

function ProductCard({
  cardImg,
  cardName,
  cardPrice,
  cardId,
  calculateTotalValue,
}) {
  const { products } = useContext(MyContext);
  const { setItemQuantity, shoppingCart, setShoppingCart } = useContext(ClientContext);
  const [quantity, setQuantity] = useState(0);

  const getQuantityItem = () => {
    const storedShoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if (!storedShoppingCart) {
      if (shoppingCart.length === 0) {
        setShoppingCart(products);
      } else if (!Object.keys(shoppingCart[0]).includes('quantity')) {
        setShoppingCart(products.map((product) => ({ ...product, quantity: 0 })));
      }
    } else {
      setShoppingCart(storedShoppingCart);
    }
  };

  const setInputQuantity = (target) => {
    if (target.value >= 0) {
      setQuantity(Number(target.value));
      setItemQuantity(cardId, target);
    } else {
      setQuantity(0);
      setItemQuantity(cardId, target);
    }
    calculateTotalValue();
  };

  const changeInputValue = ({ target }) => {
    const operation = target.innerHTML;
    let n = Number(quantity);
    setItemQuantity(cardId, target);
    calculateTotalValue();
    if (operation === '+') {
      setQuantity(n += 1);
    } else if (operation === '-') {
      if (n <= 0) {
        setQuantity(0);
      } else {
        setQuantity(n -= 1);
      }
    }
  };

  useEffect(() => {
    calculateTotalValue();
    getQuantityItem();
    setQuantity(shoppingCart[Number(cardId) - 1].quantity || 0);
  }, []);

  return (
    <div className="card_body">
      <div
        className="upper_card_body"
      >
        <p
          className="card_price"
          data-testid={ `customer_products__element-card-price-${cardId}` }
        >
          { cardPrice.replace('.', ',') }
        </p>
        <img
          src={ cardImg }
          alt={ cardName }
          className="card_img"
          width={ 250 }
          data-testid={ `customer_products__img-card-bg-image-${cardId}` }
        />
      </div>
      <p data-testid={ `customer_products__element-card-title-${cardId}` }>
        { cardName }
      </p>
      <div
        className="lower_card_body"
      >
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${cardId}` }
          onClick={ changeInputValue }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${cardId}` }
          value={ quantity }
          type="number"
          min={ 0 }
          className="quantity"
          onChange={ ({ target }) => {
            setInputQuantity(target);
            setQuantity(target.value);
          } }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${cardId}` }
          onClick={ changeInputValue }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardId: PropTypes.number.isRequired,
  cardPrice: PropTypes.string.isRequired,
  cardImg: PropTypes.string.isRequired,
  calculateTotalValue: PropTypes.func.isRequired,
};

export default ProductCard;
