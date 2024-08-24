// TransactionForm.js
import React, { useState } from 'react';
import './TransactionForm.css'; // Import the CSS file for styling

function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('income'); // New state for transaction type

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount && category && date) {
      const transactionAmount = parseFloat(amount);
      const signedAmount = type === 'expense' ? -transactionAmount : transactionAmount;
      onAddTransaction({ description, amount: signedAmount, category, date, type });
      setDescription('');
      setAmount('');
      setCategory('');
      setDate('');
      setType('income');
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value >= 0) { // Ensure only positive values
      setAmount(value);
    }
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Amount"
        min="0"
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)} required>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
