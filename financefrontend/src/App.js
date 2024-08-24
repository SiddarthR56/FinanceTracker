import React, { useState, useEffect } from 'react';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import Summary from './components/Summary';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('summary'); // Default tab is Summary
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const response = await fetch('http://localhost:8000/api/transactions/');
    const data = await response.json();
    setTransactions(data);
  };

  const addTransaction = async (transaction) => {
    const response = await fetch('http://localhost:8000/api/transactions/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    });
    const newTransaction = await response.json();
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Personal Finance Tracker</h1>
        <div className="tabs">
          <button onClick={() => setActiveTab('summary')} className={activeTab === 'summary' ? 'active' : ''}>Summary</button>
          <button onClick={() => setActiveTab('transactions')} className={activeTab === 'transactions' ? 'active' : ''}>Transactions</button>
          <button onClick={() => setActiveTab('add-transaction')} className={activeTab === 'add-transaction' ? 'active' : ''}>Add Transaction</button>
        </div>
      </header>
      <main className="app-main">
        {activeTab === 'summary' && <Summary transactions={transactions} />}
        {activeTab === 'transactions' && <TransactionList transactions={transactions} />}
        {activeTab === 'add-transaction' && <TransactionForm onAddTransaction={addTransaction} />}
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 Finance Tracker</p>
      </footer>
    </div>
  );
}

export default App;
