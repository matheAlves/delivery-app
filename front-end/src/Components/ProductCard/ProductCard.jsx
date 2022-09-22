function ProductCard({ cardImg, cardName, cardPrice, cardId, cardQuantity }) {
  return (
    <div className="card_body">
      <div
        className="upper_card_body"
      >
        <p
          className="card_price"
          datatest-id={ `customer_products__element-card-price-${cardId}` }
        >
          { cardPrice }
        </p>
        <img src={ cardImg } alt={ cardName } className="card_img" width={ 250 } />
      </div>
      <p>{ cardName }</p>
      <div
        className="lower_card_body"
      >
        <button
          type="button"
        >
          -
        </button>
        <p>{ cardQuantity }</p>
        <button
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
