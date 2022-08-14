import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        title: "Toilet Paper",
        date: new Date(2022, 11, 15),
        amount: 225.13
    },
    {
        title: "New TV",
        date: new Date(2022, 5, 22),
        amount: 123.13
    },
    {
        title: "New phone",
        date: new Date(2022, 3, 13),
        amount: 664.22
    },
    {
        title: "Car insurance",
        date: new Date(2021, 4, 12),
        amount: 124.20
    },
    {
        title: "New Desk",
        date: new Date(2020, 2, 17),
        amount: 251.40
    }
]

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const addExpenseHandler = expense => {
        setExpenses(prevState => {
            return [expense, ...prevState];
        });
    }


    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
