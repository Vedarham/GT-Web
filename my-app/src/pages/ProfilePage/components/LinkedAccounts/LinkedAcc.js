import React, { useState } from 'react';
import './LinkedAcc.style.css';
import { FaSteam, FaPlaystation, FaXbox, FaGamepad } from 'react-icons/fa';

const platformIcons = {
  Steam: <FaSteam />,
  PlayStation: <FaPlaystation />,
  Xbox: <FaXbox />,
  'Epic Games': <FaGamepad />,
};

const LinkedAccounts = () => {
  const [linkedAccounts, setLinkedAccounts] = useState([
    { platform: 'Steam', username: 'GamerX123', icon: <FaSteam /> },
    { platform: 'PlayStation', username: 'PlayerOne007', icon: <FaPlaystation /> },
  ]);

  const [newAccount, setNewAccount] = useState({ platform: '', username: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAccount((prev) => ({ ...prev, [name]: value }));
  };

  const handleConnectAccount = () => {
    if (newAccount.platform && newAccount.username) {
      setLinkedAccounts((prev) => [
        ...prev,
        { ...newAccount, icon: platformIcons[newAccount.platform] || <FaGamepad /> },
      ]);
      setNewAccount({ platform: '', username: '' });
    }
  };

  return (
    <div className="linked-accounts-container">
      <h2>Your Linked Accounts</h2>
      <div className="account-cards">
        {linkedAccounts.map((account, index) => (
          <div key={index} className="account-card">
            <div className="icon">{account.icon}</div>
            <h3>{account.platform}</h3>
            <p>{account.username}</p>
          </div>
        ))}
      </div>

      <div className="connect-account-form">
        <h3>Connect New Account</h3>
        <input
          type="text"
          name="platform"
          placeholder="Platform (e.g., Steam)"
          value={newAccount.platform}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={newAccount.username}
          onChange={handleInputChange}
        />
        <button onClick={handleConnectAccount}>Connect Account</button>
      </div>
    </div>
  );
};

export default LinkedAccounts;
