import React from 'react';
import './AuthTabs.style.css';

 function AuthTabs({ isLogin, onToggle }) {
  return (
    <div className="auth-tabs">
      <button
        onClick={() => !isLogin && onToggle()}
        className={`tab-button ${isLogin ? 'active' : ''}`}
      >
        Login
      </button>
      <button
        onClick={() => isLogin && onToggle()}
        className={`tab-button ${!isLogin ? 'active' : ''}`}
      >
        Sign Up
      </button>
    </div>
  );
}

export default AuthTabs