import './App.css';
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";
import {useState} from "react";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
      setUsersList((prevState) => {
          return [
              ...prevState,
              {name: uName, age: uAge}
          ];
      });
    };


  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
        <UsersList users={usersList}/>
    </div>
  );
}

export default App;
