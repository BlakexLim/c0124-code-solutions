import { Link, Outlet } from 'react-router-dom';
import './AppDrawer.css';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};
export function AppDrawer({ menuItems }: Props) {
  const [onOpen, setOnOpen] = useState(false);
  function handleOpen(): void {
    if (onOpen === false) {
      setOnOpen(true);
    } else {
      setOnOpen(false);
    }
  }

  return (
    <div className="d-flex flex-column vw-100">
      <nav className={onOpen ? ' drawer-open' : ' drawer-closed'}>
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <div>
              <FaBars onClick={handleOpen} className="bar-icon" />
              {onOpen && <h2>Hylian Shopping</h2>}
            </div>
            {menuItems.map((menu) => (
              <li key={menu.name} className="nav-item nav-link">
                <Link to={menu.path} className="title">
                  <img src={menu.iconUrl} className="icons" />
                  {onOpen && menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
