import React, { useState } from 'react';
import Card from './UI/Card';
import DateItem from './util/DateItem';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    

    function clickHandler() {
        setTitle('Updated');
    };

    return (
        <Card className="expense-item">
            <DateItem date={props.date} />
            <div className="expense-item__description">
                <h2 className='expense-item__h2'>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Click here</button>
        </Card>


    )
};

export default ExpenseItem;