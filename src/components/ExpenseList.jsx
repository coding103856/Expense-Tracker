import React, { useState } from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  const [filter, setFilter] = useState('all');

  const handleDelete = (id) => {
    onDeleteExpense(id);
  };

  const handleEdit = (expense) => {
    onEditExpense(expense);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredExpenses = filter === 'all' ? expenses : expenses.filter(expense => expense.category === filter);

  const totalAmount = filteredExpenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="expense-list">
      <div className="filter-group">
        <label>Filter by Category:</label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="stationary">Stationary</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
        </select>
      </div>
      <ul>
        {filteredExpenses.map((expense, index) => (
          <li key={index} className="expense-item">
            <div className="expense-details">
              <span>{expense.description}</span>
              <span>{expense.amount}</span>
              <span>{expense.date}</span>
              <span>{expense.category}</span>
            </div>
            <div className="expense-actions">
              <button onClick={() => handleEdit(expense)}>Edit</button>
              <button onClick={() => handleDelete(expense.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total-expense">
        <strong>Total Expense:</strong> {totalAmount}
      </div>
    </div>
  );
};

export default ExpenseList;
