import React from 'react';
import './Navigation.css';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Tournaments', href: '#' },
  { name: 'Wallet', href: '#' },
  { name: 'Leaderboards', href: '#' },
  { name: 'Esports Academy', href: '#' },
  { name: 'Profile', href: '#', active: true },
];

export default function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={`nav-link ${item.active ? 'active' : ''}`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}