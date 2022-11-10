
import Card from './UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import ExpenseFilter from './NewExpense/ExpenseFilter';
import { useState } from 'react';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2022');

    //step 2 of passing down data from ExpenseFilter, create function to receive the data
    //step 3 is to create a custom event listener onFilterDate, then pass filterChangeHandler to this event ==> step 4
    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear)
    }



    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter onFilterDate={filterChangeHandler} selected={filteredYear} /> //step 4
                <ExpenseItem title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date}
                ></ExpenseItem>

                <ExpenseItem title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                    date={props.expenses[1].date}
                ></ExpenseItem>

                <ExpenseItem title={props.expenses[2].title}
                    amount={props.expenses[2].amount}
                    date={props.expenses[2].date}
                ></ExpenseItem>

                <ExpenseItem title={props.expenses[3].title}
                    amount={props.expenses[3].amount}
                    date={props.expenses[3].date}
                ></ExpenseItem>
            </Card>
        </div>



    )
};

export default Expenses;