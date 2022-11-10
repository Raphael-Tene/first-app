import './ExpenseFilter.css';

function ExpenseFilter(props) {
    //sharing data **step 1, step 2 in Expenses.js
    function selectDateHandler(event) {
        event.preventDefault()
        // step 5, this line uses the fuction created in Expenses.js step 4
        props.onFilterDate(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label className='expenses-filter__label'>Filter by year</label>
                <select value={props.selected} className='expenses-filter__select' onChange={selectDateHandler}>//listening to onChange event
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;