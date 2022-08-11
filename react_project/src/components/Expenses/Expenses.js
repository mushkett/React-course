import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpenseItem
                    title={props.expenses[0].title}
                    date={props.expenses[0].date}
                    amount={props.expenses[0].amount}
                />
                <ExpenseItem
                    title={props.expenses[1].title}
                    date={props.expenses[1].date}
                    amount={props.expenses[1].amount}
                />
                <ExpenseItem
                    title={props.expenses[2].title}
                    date={props.expenses[2].date}
                    amount={props.expenses[2].amount}
                />
                <ExpenseItem
                    title={props.expenses[3].title}
                    date={props.expenses[3].date}
                    amount={props.expenses[3].amount}
                />
                <ExpenseItem
                    title={props.expenses[4].title}
                    date={props.expenses[4].date}
                    amount={props.expenses[4].amount}
                />
            </Card>
        </div>
    );
};
export default Expenses;
