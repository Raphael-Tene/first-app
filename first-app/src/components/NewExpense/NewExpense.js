import { useState } from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

function NewExpense(props) {

    const [isEditting, setIsEditting] = useState(false);

    //enteredExpenseData will be the form data passed down from NewExpenseForm expenseData const
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData) //onAddExpense is a function created in app.js NewExpense component as a listener
        setIsEditting(false)
    }

    function startEdittingHandler() {
        setIsEditting(true)
    }
    //onSaveExpenseData and saveExpenseDataHandler will enable used to pass data from newExpenseForm
    // 

    function stopEdittingHandler() {
        setIsEditting(false)
    }
    return (
        <div className="new-expense">
            {!isEditting && <button onClick={startEdittingHandler}>Add New Expense</button>}
            {isEditting && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEdittingHandler}/>}
        </div>
    )
};

export default NewExpense;