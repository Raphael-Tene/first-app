import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import expenses from './expensesData/expensesData';

function addExpenseHandler(expense) {
  console.log(expense)
}

function App() {
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />

    </div>
  );
}

export default App;
