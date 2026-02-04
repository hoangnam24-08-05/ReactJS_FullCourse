import React, { useState } from "react";

const ApiFetchAsync = () => {
  const [data, setData] = useState(null);

  // Kiểu 2: Dùng async/await
  const handleFetchAsync = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/2",
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ border: "1px solid green", padding: "10px", margin: "10px" }}>
      <h4>2. Fetch Async/Await</h4>
      <button onClick={handleFetchAsync} style={{ backgroundColor: "red" }}>
        Click to Fetch User 2
      </button>
      {data && <p>KQ: {data.title}</p>}
    </div>
  );
};

export default ApiFetchAsync;
