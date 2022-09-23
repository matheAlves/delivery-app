import { useContext } from 'react';
import ProductCard from '../../../Components/ProductCard/ProductCard';
import UserNavbar from '../../../Components/UserNavbar/UsersNavbar';
import MyContext from '../../../Provider/MyContext';

function ClientProducts() {
  const { products } = useContext(MyContext);

  return (
    <>
      <UserNavbar />
      <section className="products_list">
        {products.map((itm) => (
          <ProductCard
            cardName={ itm.name }
            cardPrice={ itm.price }
            cardId={ itm.id }
            key={ itm.id }
            cardImg={ itm.urlImage }
            cardQuantity={ 0 }
          />
        ))}
      </section>
    </>
  );
}

export default ClientProducts;
