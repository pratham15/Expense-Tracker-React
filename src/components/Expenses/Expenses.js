import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredItems = props.items.filter((elements) => {
    return elements.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const items = filteredItems.map(elements => 
    <ExpenseItem
      key={elements.id}
      title={elements.title}
      amount={elements.amount}
      date={elements.date}
    />
  );
  let display = <p>No items</p>;
  if (items.length > 0) display = items;
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {display}
      </Card>
    </div>
  );
};

export default Expenses;
