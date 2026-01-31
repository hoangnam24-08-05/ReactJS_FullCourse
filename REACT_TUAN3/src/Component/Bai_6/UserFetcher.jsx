import React from "react";
import "./UserFetcher.css";
import { useReducer } from "react";

const initialState = {
  status: "idle",
  users: [],
  error: null,
};

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, status: "loading", error: null };
    case "FETCH_SUCCESS":
      return { ...state, status: "success", users: action.payload };
    case "FETCH_ERROR":
      return { ...state, status: "error", error: action.payload };
    default:
      return state;
  }
};
const UserFetcher = () => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const handleFetchUsers = async () => {
    dispatch({ type: "FETCH_INIT" });
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!reponse.ok) {
        throw new Error("Lỗi khi tải dữ liệu");
      }
      const data = await reponse.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };
  return (
    <div className="fetcher-box">
      <h2>User Fetcher</h2>
      {state.status === "idle" && (
        <div>
          <p>Chưa có dữ liệu</p>
          <button className="btn-action" onClick={handleFetchUsers}>
            Tải dữ liệu
          </button>
        </div>
      )}
      {state.status === "loading" && (
        <p className="status-loading">Đang tải dữ liệu...</p>
      )}
      {state.status === "error" && (
        <div>
          <p className="status-error">Lỗi: {state.error}</p>
          <button className="btn-action btn-retry" onClick={handleFetchUsers}>
            Thử lại
          </button>
        </div>
      )}
      {state.status === "success" && (
        <div>
          <p style={{ color: "green" }}>Dữ liệu đã tải thành công</p>
          <button className="btn-action" onClick={handleFetchUsers}>
            Tải lại
          </button>
          <div style={{ textAlign: "left" }}>
            {state.users.map((user) => (
              <div key={user.id} className="user-card">
                <strong>{user.name}</strong>
                <br />
                <span>{user.email}</span>
                <br />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserFetcher;
