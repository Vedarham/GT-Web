import React from 'react';
import { Bell, Settings, Wallet } from 'lucide-react';
import Navigation from './Navigation';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-nav">
          <div className="logo">
            GamersHub
          </div>
          <Navigation />
        </div>
        
        <div className="actions">
          <div className="notification-bell">
            <Bell className="icon" />
            <span className="notification-dot"></span>
          </div>
          <Settings className="icon" />
          <div className="wallet-display">
            <Wallet className="icon" />
            <span className="wallet-amount">₹500</span>
          </div>
        </div>
      </div>
    </header>
  );
}