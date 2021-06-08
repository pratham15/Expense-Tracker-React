import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Update');
  }
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick = {clickHandler}>hi</button>
    </div>
  );
}

export default ExpenseItem;
