import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "TANG":
      return { count: state.count + 1 };
    case "GIAM":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

function ChildC() {
  const count = useSelector((state) => state.count); // Lấy state
  const dispatch = useDispatch(); // Hàm bắn action

  return (
    <div
      style={{
        paddingLeft: "10px",
        borderLeft: "2px solid black",
        marginTop: "10px",
      }}
    >
      <p>
        Giá trị từ Redux Core: <strong>{count}</strong>
      </p>
      <button
        onClick={() => dispatch({ type: "TANG" })}
        style={{ marginRight: "10px" }}
      >
        Tăng
      </button>
      <button onClick={() => dispatch({ type: "GIAM" })}>Giảm</button>
    </div>
  );
}

function CauC() {
  return (
    <Provider store={store}>
      <div style={{ padding: "20px" }}>
        <h2>Câu c: Redux (Core/Legacy)</h2>
        <ChildC />
      </div>
    </Provider>
  );
}

export default CauC;
