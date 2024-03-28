import './Pages.css';
import { type Product } from '../lib';
import { useEffect, useState } from 'react';
import { readCatalog } from '../lib';
import { Link } from 'react-router-dom';
import { toDollars } from '../lib';

export function Catalog() {
  const [items, setItems] = useState<Product[]>([]);
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState(true);

  // use Effect to asynchronously fetch product data from the array of products in data.ts
  useEffect(() => {
    async function loadCatalog() {
      try {
        const val = await readCatalog();
        setItems(val);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    loadCatalog();
  }, []);

  // if data is taking a while to load, display a msg to the user
  if (loading) {
    return <div>Loading...</div>;
  }

  // if error occurs while fetching, let user know
  if (error) {
    return (
      <div>
        Error! Unable to retrieve products, <Link to="/">try again</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="page-title">Catalog</h2>
      <div className="row">
        {items.map((item) => (
          <div key={item.productId} className="card">
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
// create a function to render the product layout, then pass into Catalog JSX
type CardProps = {
  product: Product;
};
function ProductCard({ product }: CardProps) {
  const { productId, name, imageUrl, price, shortDescription } = product;
  return (
    <Link to={`/details/${productId}`} className="product-card">
      <h4 className="card-title">{name}</h4>
      <img className="card-img" src={imageUrl}></img>
      <h5 className="card-price">{toDollars(price)}</h5>
      <p className="card-s-desc">{shortDescription}</p>
    </Link>
  );
}
