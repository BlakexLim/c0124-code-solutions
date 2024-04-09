import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiFillCaretLeft } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { toDollars } from '../lib';

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
        const res = await fetch(`/api/products/${productId}`);
        if (!res.ok) throw new Error(`Response Error, status ${res.status}`);
        const result = await res.json();
        setProduct(result);
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
    console.error('Fetch Error:', error);
    return (
      <div>
        <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
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
