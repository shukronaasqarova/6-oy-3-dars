import React, { useState } from "react";
import './App.css'; 

function App() {
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "" });
  const [users, setUsers] = useState([]);


  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value; 
    setUser({
      ...user,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); 
    setUsers([...users, user]); 
    setUser({ firstName: "", lastName: "", email: "" }); 
  }

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <button type="submit">Add User</button>
      </form>

      <div className="card-container">
        {users.map(function(user, index) {
          return (
            <div key={index} className="card">
              <h3>{user.firstName} {user.lastName}</h3>
              <p>{user.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
