import React, { useState } from "react";

function CauA() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Câu a: useState (Local State)</h2>
      <p>Giá trị đếm: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ marginRight: "10px" }}
      >
        Tăng (+1)
      </button>
      <button onClick={() => setCount(count - 1)}>Giảm (-1)</button>
    </div>
  );
}

export default CauA;
