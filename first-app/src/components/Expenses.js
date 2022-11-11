
import Card from './UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import './p.css'
import ExpenseFilter from './NewExpense/ExpenseFilter';
import { useState } from 'react';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');

    //step 2 of passing down data from ExpenseFilter, create function to receive the data
    //step 3 is to create a custom event listener onFilterDate, then pass filterChangeHandler to this event ==> step 4
    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear)
    };

    //filtering expenses by year (replaced props.expenses with filteredExpenses)
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })



    return (
        <div>

            <Card className='expenses'>
                <ExpenseFilter onFilterDate={filterChangeHandler} selected={filteredYear} />
                {
                    filteredExpenses.length === 0 ? (<p className='p'>No expenses found!</p>) : (
                        filteredExpenses.map(expense => <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date} />)
                    )}

            </Card>
        </div>



    )
};

export default Expenses;