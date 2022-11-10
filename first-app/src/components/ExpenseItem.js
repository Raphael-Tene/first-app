
import Card from './UI/Card';
import DateItem from './util/DateItem';
import './ExpenseItem.css';

function ExpenseItem(props) {
    
    return (
        <Card className="expense-item">
            <DateItem date={props.date} />
            <div className="expense-item__description">
                <h2 className='expense-item__h2'>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>

        </Card>


    )
};

export default ExpenseItem;