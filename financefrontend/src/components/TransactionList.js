// TransactionList.js
import React, { useState } from 'react';
import './TransactionList.css';

function TransactionList({ transactions }) {
  const [sortField, setSortField] = useState('date'); // Default sort by date
  const [sortOrder, setSortOrder] = useState('desc'); // Default sort order

  const sortedTransactions = [...transactions].sort((a, b) => {
    let comparison = 0;
    if (sortField === 'amount') {
      comparison = a.amount - b.amount; // Compare amounts
    } else if (sortField === 'description') {
      comparison = a.description.localeCompare(b.description); // Compare descriptions
    } else {
      comparison = new Date(a.date) - new Date(b.date); // Compare dates
    }
    return sortOrder === 'asc' ? comparison : -comparison; // Adjust for ascending/descending order
  });

  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      <div className="sort-options">
        <label>
          Sort by:
          <select value={sortField} onChange={(e) => setSortField(e.target.value)}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            <option value="description">Description</option>
          </select>
        </label>
        <label>
          Order:
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </label>
      </div>
      {sortedTransactions.length === 0 ? (
        <p>No transactions available.</p>
      ) : (
        <ul>
          {sortedTransactions.map((transaction) => (
            <li key={transaction.id} className="transaction-item">
              <div className="transaction-details">
                <span className="transaction-date">{transaction.date}</span>
                <span className="transaction-description">{transaction.description}</span>
                <span className="transaction-category">{transaction.category}</span>
              </div>
              <div className={`transaction-amount ${transaction.amount < 0 ? 'expense' : 'income'}`}>
                ${Math.abs(Number(transaction.amount)).toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
