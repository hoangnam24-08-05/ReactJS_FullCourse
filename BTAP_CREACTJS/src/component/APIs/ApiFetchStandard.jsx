import React, { useState } from "react";

const ApiFetchStandard = () => {
  const [data, setData] = useState(null);

  const handleFetch = () => {
    // Kiểu 1: Fetch dùng .then() .catch() chuẩn
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <h4>1. Fetch Standard (.then)</h4>
      <button onClick={handleFetch} style={{ backgroundColor: "yellow" }}>
        Click to Fetch User 1
      </button>
      {data && <p>KQ: {data.title}</p>}
    </div>
  );
};

export default ApiFetchStandard;
