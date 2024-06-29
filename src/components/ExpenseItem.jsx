import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = ({ expense }) => {
  return (
    <div className="expense-item">
      <div>{expense.description}</div>
      <div>${expense.amount.toFixed(2)}</div>
      <div>{expense.category}</div>
      <div>{expense.date}</div>
    </div>
  );
};

export default ExpenseItem;
