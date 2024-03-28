import { Link, Outlet } from 'react-router-dom';
import './Header.css';
// add Outlet at the very bottom of the JSX to render child elements
// use Link to send user to directed page
export function Header() {
  return (
    <div>
      <nav className="header-title">
        <div>
          <Link to="/about" className="title">
            About
          </Link>
          <Link to="/" className="title">
            Catalog
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
