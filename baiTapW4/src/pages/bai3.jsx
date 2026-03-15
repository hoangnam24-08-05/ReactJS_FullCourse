import { useState, useEffect } from "react";
import React from "react";

function Bai3() {
  const [userID, setUserID] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userID || userID < 1 || userID > 10) {
      setUser(null);
      setError("ID phải từ 1 đến 10");
      return;
    }
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userID}`,
        );
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError("Không thể tải dữ liệu", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [userID]);

  return (
    <div>
      <h2>Thông tin người dùng</h2>
      <label>Nhập Id cần tìm</label>
      <input
        type="number"
        value={userID}
        onChange={(e) => setUserID(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && !loading && <p>{error}</p>}
      {!loading && !error && user && (
        <div>
          <h3>Name: {user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      )}
    </div>
  );
}
export default Bai3;
