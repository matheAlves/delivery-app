import ProductCard from '../../../Components/ProductCard/ProductCard';
import UserNavbar from '../../../Components/UserNavbar/UsersNavbar';

function ClientProducts() {
  const img = 'https://e7.pngegg.com/pngimages/116/398/png-clipart-beer-cocktail-ice-beer-beer-glassware-ice-beer-decoration-pattern-glass-geometric-pattern.png';

  return (
    <>
      <header>
        <UserNavbar />
      </header>
      <section className="products_list">
        <h1>Produtos</h1>
        <ProductCard
          cardName="Test cerveja"
          cardPrice={ 4.20 }
          cardId={ 1 }
          key={ 1 }
          cardImg={ img }
          cardQuantity={ 0 }
        />
      </section>
    </>
  );
}

export default ClientProducts;
