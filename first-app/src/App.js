import { useState } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import expenses from './expensesData/expensesData';


function App() {
  const [userExpenses, setUserExpenses] = useState(expenses);

  function addExpenseHandler(expense) {
    setUserExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={userExpenses} />

    </div>
  );
}

export default App;



