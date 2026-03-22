import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

// 1. Tạo Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    tang: (state) => {
      state.value += 1;
    },
    giam: (state) => {
      state.value -= 1;
    },
  },
});

// SỬA LỖI TẠI ĐÂY: Xóa chữ "export" đi vì ta chỉ dùng nó trong file này
const { tang, giam } = counterSlice.actions;

// 2. Tạo Store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// 3. Component Con
function ChildD() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        paddingLeft: "10px",
        borderLeft: "2px solid black",
        marginTop: "10px",
      }}
    >
      <p>
        Giá trị từ Redux Toolkit: <strong>{count}</strong>
      </p>
      <button onClick={() => dispatch(tang())} style={{ marginRight: "10px" }}>
        Tăng
      </button>
      <button onClick={() => dispatch(giam())}>Giảm</button>
    </div>
  );
}

// 4. Component Cha
function CauD() {
  return (
    <Provider store={store}>
      <div style={{ padding: "20px" }}>
        <h2>Câu d: Redux Toolkit (RTK)</h2>
        {/* SỬA LỖI: Đã xóa thẻ <ChildC /> bị thừa ở đây */}
        <ChildD />
      </div>
    </Provider>
  );
}

export default CauD;
