const fetchProducts = async () => {
  const url = 'http://localhost:3001/products';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchProducts;
