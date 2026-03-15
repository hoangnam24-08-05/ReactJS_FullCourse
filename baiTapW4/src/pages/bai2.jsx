import { useEffect, useState } from "react";
import React from "react";

function Bai2() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setTimeout(() => {
          setLoading(false);
          setUsers(data);
        }, 2000);
      } catch (err) {
        setError("Không thể tải dữ liệu: ");
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Bai2;
