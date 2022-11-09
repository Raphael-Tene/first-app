import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

function NewExpense(props) {
    //enteredExpenseData will be the form data passed down from NewExpenseForm expenseData const
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData) //onAddExpense is a function created in app.js NewExpense component as a listener
    }
    //onSaveExpenseData and saveExpenseDataHandler will enable us pass data from newExpenseForm
    // 
    return (
        <div className="new-expense">
            <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
};

export default NewExpense;