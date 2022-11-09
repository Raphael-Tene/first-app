import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import expenses from './expensesData/expensesData';

function App() {
  return (
    <div className="App">
      <NewExpense />
      <Expenses expenses={expenses} />

    </div>
  );
}

export default App;
