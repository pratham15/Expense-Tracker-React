import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredItems = props.items.filter(elements => {
    return elements.date.getFullYear().toString() === filteredYear;
  });
  const K = filteredItems.map((elements) => {
    return (
      <ExpenseItem
        key = {elements.id}
        title={elements.title}
        amount={elements.amount}
        date={elements.date}
      />
    );
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {K}
      </Card>
    </div>
  );
};

export default Expenses;
