import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([])

  const addUserDataHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {username: uName, age: uAge, id: Math.random().toString() }]
    })
  }


  return (
    <div>
      <AddUser onAddUser={addUserDataHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
