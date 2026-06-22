import React, { useEffect, useState } from "react";
function DataFetcher() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}/>
        
      <table border="1" cellPadding="10">
        <thead>
          <tr><th>Name</th><th>Email</th><th>City</th></tr>
        </thead>

        <tbody>
          {users.filter(user =>user.name.toLowerCase().includes(search.toLowerCase()))
            .map(user => (
              <tr key={user.id}>
                <td>{user.name}</td><td>{user.email}</td><td>{user.address.city}</td></tr>
            ))}
        </tbody>
      </table>
      <button>Refresh</button>
    </div>
  );
}
export default DataFetcher;
