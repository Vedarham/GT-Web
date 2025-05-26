import React from 'react';

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
    <nav className="ml-8">
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={`text-white hover:text-blue-200 transition-colors ${
                item.active ? 'border-b-2 border-blue-400' : ''
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}