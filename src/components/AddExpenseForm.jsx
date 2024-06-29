import React, { useState, useEffect } from 'react';
import './AddExpenseForm.css';

const AddExpenseForm = ({ onAddExpense, expenseToEdit }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (expenseToEdit) {
      setDescription(expenseToEdit.description);
      setAmount(expenseToEdit.amount);
      setCategory(expenseToEdit.category);
      setIsValid(true);
    }
  }, [expenseToEdit]);

  useEffect(() => {
    validateForm();
  }, [description, amount, category]);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const validateForm = () => {
    if (description && amount && category) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      description,
      amount: parseFloat(amount),
      category,
      date: new Date().toLocaleString(),
    };
    onAddExpense(newExpense);
    setDescription('');
    setAmount('');
    setCategory('');
    setIsValid(false);
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Description</label>
        <input type="text" value={description} onChange={handleDescriptionChange} />
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div className="form-group">
        <label>Category</label>
        <select value={category} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          <option value="stationary">Stationary</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
        </select>
      </div>
      <button type="submit" disabled={!isValid}>
        {expenseToEdit ? 'Update Expense' : 'Add Expense'}
      </button>
    </form>
  );
};

export default AddExpenseForm;
