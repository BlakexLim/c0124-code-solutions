import { Link } from 'react-router-dom';
import './Pages.css';
import { RiEmotionSadLine } from 'react-icons/ri';

export function NotFound() {
  return (
    <div className="page-content">
      <div>
        <Link to="/" className="not-found">
          <h3>Page not found</h3>
          <div className="emoji">
            <RiEmotionSadLine />
          </div>
          Return to catalog
        </Link>
      </div>
    </div>
  );
}
