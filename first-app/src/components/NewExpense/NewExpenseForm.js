import { useState } from 'react';
import './NewExpenseForm.css';

function NewExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [expenseDate, setExpenseDate] = useState('');

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
    };

    function expenseAmountHandler(event) {
        setEnteredAmount(event.target.value);
    };


    function expenseDateHandler(event) {
        setExpenseDate(event.target.value);
    };

    function submitHandler(event) {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(expenseDate)
        };
        props.onSaveExpenseData(expenseData); //passing form data to onSaveExpenseData created in NewExpense component
        setEnteredAmount('')
        setEnteredTitle('')
        setExpenseDate('')
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={expenseAmountHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2022-01-01" max="2023-12-31" value={expenseDate} onChange={expenseDateHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default NewExpenseForm;