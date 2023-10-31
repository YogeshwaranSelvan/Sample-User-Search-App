import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
  ]);
  const [searchName, setSearchName] = useState("");
  const [foundUser, setFoundUser] = useState(null);

  const handleSearch = () => {
    const index = users.findIndex((user) => user.name === searchName);

    if (index !== -1) {
      setFoundUser(users[index]);
    } else {
      setFoundUser(null);
    }
  };

  return (
    <div className="App">
      <h1>User Search</h1>
      <div className="search-input">
        <input
          type="text"
          placeholder="Enter a name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {foundUser ? (
        <div className="user-info">
          <h2>User Details</h2>
          <p>Name: {foundUser.name}</p>
          <p>Age: {foundUser.age}</p>
        </div>
      ) : (
        <div>User not found</div>
      )}
    </div>
  );
}

export default App;
