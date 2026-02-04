import React, { useState } from "react";
import axios from "axios"; //npm install axios

const ApiAxios = () => {
  const [data, setData] = useState(null);

  // Kiểu 3: Dùng thư viện Axios
  const handleAxios = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/3")
      .then((response) => {
        // Axios tự động trả về data trong response.data
        setData(response.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div style={{ border: "1px solid red", padding: "10px", margin: "10px" }}>
      <h4>3. Axios Library</h4>
      <button onClick={handleAxios} style={{ backgroundColor: "lightblue" }}>
        Click to Fetch User 3
      </button>
      {data && <p>KQ: {data.title}</p>}
    </div>
  );
};

export default ApiAxios;
