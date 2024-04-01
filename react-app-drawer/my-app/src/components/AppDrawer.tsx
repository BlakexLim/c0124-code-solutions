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
  header: string;
};
export function AppDrawer({ menuItems, header }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="app-drawer">
      <div className={`menu-drawer ${open ? 'is-open' : ''}`}>
        <FaBars onClick={() => setOpen(!open)} className="menu-icon" />
        {open && <h2 className="menu-heading">{header}</h2>}
        <ul className="menu-items">
          {menuItems.map((menu) => (
            <li key={menu.name} className="menu-item">
              <Link to={menu.path} className="menu-link">
                <img src={menu.iconUrl} className="item-icon" />
                {open && menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}
