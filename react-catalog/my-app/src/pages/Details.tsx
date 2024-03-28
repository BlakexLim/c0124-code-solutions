import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiFillCaretLeft } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { toDollars, type Product } from '../lib';
import { readProduct } from '../lib';
import { NotFound } from './NotFound';

export function Details() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState(true);

  function handleAdd(): void {
    alert(`${name} added to cart`);
    navigate('/');
  }

  // use Effect to asynchronously fetch loadProduct data
  useEffect(() => {
    async function loadProduct(productId: number) {
      try {
        const product = await readProduct(productId);
        setProduct(product);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    if (productId) {
      setLoading(true);
      loadProduct(+productId);
    }
  }, [productId]);

  if (loading) return <div>Loading...</div>;
  if (error || !product) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  const { name, imageUrl, price, longDescription } = product;
  return (
    <div className="product-container">
      <Link to="/" className="back-btn">
        <AiFillCaretLeft />
        Back to catalog
      </Link>
      <div className="p-row">
        <div>
          <h2 className="p-name">{name}</h2>
        </div>
        <div>
          <img src={imageUrl} className="image" />
        </div>
        <div>
          <h3 className="p-price">{toDollars(price)}</h3>
        </div>
        <div>
          <p className="p-l-desc">{longDescription}</p>
        </div>
      </div>
      <button className="add" onClick={handleAdd}>
        Add to cart
      </button>
    </div>
  );
}
