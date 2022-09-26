import PropTypes from 'prop-types';

function ProductCard({ cardImg, cardName, cardPrice, cardId, cardQuantity }) {
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
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${cardId}` }
          value={ cardQuantity }
          type="text"
          className="quantity"
          readOnly
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${cardId}` }
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
};

export default ProductCard;
