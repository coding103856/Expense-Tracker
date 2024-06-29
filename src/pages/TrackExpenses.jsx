
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import AddExpenseForm from '../components/AddExpenseForm';
import ExpenseList from '../components/ExpenseList';

const TrackExpenses = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const [editExpense, setEditExpense] = useState(null);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    if (editExpense) {
      setExpenses((prevExpenses) =>
        prevExpenses.map((exp) =>
          exp.id === editExpense.id ? { ...expense, id: editExpense.id } : exp
        )
      );
      setEditExpense(null);
    } else {
      setExpenses((prevExpenses) => [
        { ...expense, id: Date.now() },
        ...prevExpenses,
      ]);
    }
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  const editExpenseHandler = (expense) => {
    setEditExpense(expense);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <AddExpenseForm onAddExpense={addExpenseHandler} expenseToEdit={editExpense} />
        <ExpenseList
          expenses={expenses}
          onDeleteExpense={deleteExpenseHandler}
          onEditExpense={editExpenseHandler}
        />
      </div>
    </>
  );
};

export default TrackExpenses;
