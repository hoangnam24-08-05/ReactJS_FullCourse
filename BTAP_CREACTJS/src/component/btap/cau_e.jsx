import React from "react";
import { RecoilRoot, atom, useRecoilState } from "recoil";

const countState = atom({
  key: "countState", // key phải là duy nhất
  default: 0,
});

function ChildE() {
  // Dùng y hệt như useState của React
  const [count, setCount] = useRecoilState(countState);

  return (
    <div
      style={{
        paddingLeft: "10px",
        borderLeft: "2px solid black",
        marginTop: "10px",
      }}
    >
      <p>
        Giá trị từ Recoil: <strong>{count}</strong>
      </p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ marginRight: "10px" }}
      >
        Tăng
      </button>
      <button onClick={() => setCount(count - 1)}>Giảm</button>
    </div>
  );
}

function CauE() {
  return (
    <RecoilRoot>
      <div style={{ padding: "20px" }}>
        <h2>Câu e: Recoil</h2>
        <ChildE />
      </div>
    </RecoilRoot>
  );
}

export default CauE;
