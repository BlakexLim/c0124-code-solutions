import { Link } from 'react-router-dom';
import './Pages.css';

export function About() {
  return (
    <div className="container">
      <h2 className="page-title">About</h2>
      <div className="page-content">
        <h3>Welcome to seen it!</h3>
        <Link to="/" className="link-to-index">
          Browse our extensive selection of as seen on tv products
        </Link>
      </div>
    </div>
  );
}
