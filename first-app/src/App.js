import Expenses from './components/Expenses';
import expenses from './expensesData/expensesData';

function App() {
  return (
    <div className="App">
      <Expenses expenses={expenses} />

    </div>
  );
}

export default App;
