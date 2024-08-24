// Summary.js
import React from 'react';
import './Summary.css'; // Import the CSS file for styling

function Summary({ transactions }) {
  const income = transactions
    .filter((t) => Number(t.amount) > 0)
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const expenses = transactions
    .filter((t) => Number(t.amount) < 0)
    .reduce((acc, t) => acc + Math.abs(Number(t.amount)), 0);

  return (
    <div className="summary">
      <h2>Summary</h2>
      <div className="summary-item income">
        <span>Total Income:</span>
        <span>${income.toFixed(2)}</span>
      </div>
      <div className="summary-item expense">
        <span>Total Expenses:</span>
        <span>${expenses.toFixed(2)}</span>
      </div>
      <div className="summary-item balance">
        <span>Balance:</span>
        <span>${(income - expenses).toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Summary;
