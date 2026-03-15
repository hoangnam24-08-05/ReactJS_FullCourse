import { useState, useEffect } from "react";
function Bai1() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setUser(data);
    }; fetchUser();
  }, []);
  //   var res = fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((respone) => respone.json())
  //   .then((data) => setUser(data));
  return (
    <div>
      <h2>UserList</h2>
      {user.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default Bai1;
