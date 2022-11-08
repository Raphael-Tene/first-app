import './ExpenseItem.css';

function ExpenseItem(props) {
    const expenseDate = new Date(2021, 2, 28).toDateString();
    const expenseTitle = 'Car insurance';
    const expenseAmount = 456.8;

    return (
        <div className="expense-item">
            <div>
                {props.date.toDateString()}
            </div>
            <div className="expense-item__description">
                <h2 className='expense-item__h2'>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>

        </div>
    )
};

export default ExpenseItem;