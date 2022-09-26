import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import ClientContext from '../../Provider/ClientContext';

function ProductCard({
  cardImg,
  cardName,
  cardPrice,
  cardId,
  cardQuantity,
  calculateTotalValue,
}) {
  const { setItemQuantity } = useContext(ClientContext);
  const [quantity, setQuantity] = useState(cardQuantity || 0);

  const setInputQuantity = ({ target }) => {
    calculateTotalValue();
    if (target.value >= 0) {
      setQuantity(target.value);
      setItemQuantity(cardId, target);
    } else {
      setQuantity(0);
      setItemQuantity(cardId, target);
    }
  };

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
          onClick={ ({ target }) => setItemQuantity(cardId, target) }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${cardId}` }
          value={ quantity }
          type="text"
          className="quantity"
          onChange={ setInputQuantity }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${cardId}` }
          onClick={ ({ target }) => setItemQuantity(cardId, target) }
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
  cardQuantity: PropTypes.number.isRequired,
  cardImg: PropTypes.string.isRequired,
  calculateTotalValue: PropTypes.func.isRequired,
};

export default ProductCard;
