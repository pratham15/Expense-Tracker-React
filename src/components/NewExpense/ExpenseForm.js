import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const titleHandler  = e => {
        console.log(e.target.value);
        setTitle(e.target.value);
    }
    const dateHandler  = e => {
        console.log(e.target.value);
        setDate(e.target.value);
    }
    const amountHandler  = e => {
        console.log(e.target.value);
        setAmount(e.target.value);
    }
    
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange ={titleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange= {amountHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange = {dateHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
