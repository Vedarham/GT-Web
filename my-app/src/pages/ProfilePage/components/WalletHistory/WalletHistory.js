import React, { useState } from "react";
import "./WalletHistory.style.css";

const WalletHistory = () => {
  const [wallet, setWallet] = useState({
    cash: 1500, // Amount in INR
    trophies: 45, // Trophies earned
  });

  const transactions = [
    {
      id: 1,
      type: "Tournament Reward",
      cash: 500,
      trophies: 10,
      date: "2025-01-18",
    },
    {
      id: 2,
      type: "Bank Deposit",
      cash: 1000,
      trophies: 0,
      date: "2025-01-10",
    },
    {
      id: 3,
      type: "Purchase (Shop Item)",
      cash: -200,
      trophies: -5,
      date: "2025-01-15",
    },
    {
      id: 4,
      type: "Tournament Reward",
      cash: 300,
      trophies: 6,
      date: "2025-01-08",
    },
  ];

  return (
    <div className="wallet-container">
      <h1>Wallet History</h1>
      <WalletSummary wallet={wallet} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

const WalletSummary = ({ wallet }) => {
  return (
    <div className="wallet-summary">
      <div className="summary-card cash">
        <h2>Total Cash</h2>
        <p>₹{wallet.cash}</p>
      </div>
      <div className="summary-card trophies">
        <h2>Total Trophies</h2>
        <p>{wallet.trophies}</p>
      </div>
    </div>
  );
};

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="transaction-history">
      <h2>Transactions</h2>
      <div className="transaction-list">
        {transactions.map((transaction) => (
          <div className="transaction-card" key={transaction.id}>
            <div className="transaction-details">
              <h3>{transaction.type}</h3>
              <p>Date: {transaction.date}</p>
            </div>
            <div className="transaction-values">
              <span className={`cash ${transaction.cash < 0 ? "negative" : ""}`}>
                ₹{transaction.cash}
              </span>
              <span
                className={`trophies ${
                  transaction.trophies < 0 ? "negative" : ""
                }`}
              >
                {transaction.trophies} Trophies
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletHistory;
