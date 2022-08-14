import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";


const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        props.onAddExpense(enteredExpenseData);
        setIsEditing(false)
    };

    const startEditing = () => {
        setIsEditing(true);
    }
    const stopEditing = () => {
        setIsEditing(false)
    }

    let formContent = <button onClick={startEditing}>Add New Expense</button>

    if(isEditing){
        formContent = <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCansel={stopEditing}
        />
    }

    return (<div className="new-expense">
        {formContent}
    </div>)
};

export default NewExpense;