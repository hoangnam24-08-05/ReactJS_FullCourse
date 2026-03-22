import React, { createContext, useReducer, useContext } from "react";

const ScoreContext = createContext();

const initialState = { score: 0 };

function scoreReducer(state, action) {
  switch (action.type) {
    case "TANG_DIEM":
      return { score: state.score + 10 };
    case "GIAM_DIEM":
      return { score: state.score - 5 };
    default:
      return state;
  }
}

function ChildComponent() {
  const { state, dispatch } = useContext(ScoreContext);

  return (
    <div
      style={{
        marginLeft: "20px",
        borderLeft: "2px solid black",
        paddingLeft: "10px",
        marginTop: "20px",
      }}
    >
      <h3>Component Con (Child)</h3>
      <p>
        Điểm số lấy từ Context: <strong>{state.score}</strong>
      </p>
      <button
        onClick={() => dispatch({ type: "TANG_DIEM" })}
        style={{ marginRight: "10px" }}
      >
        Tăng 10 điểm
      </button>
      <button onClick={() => dispatch({ type: "GIAM_DIEM" })}>
        Giảm 5 điểm
      </button>
    </div>
  );
}

function CauB() {
  const [state, dispatch] = useReducer(scoreReducer, initialState);

  return (
    <ScoreContext.Provider value={{ state, dispatch }}>
      <div style={{ padding: "20px" }}>
        <h2>Câu b: useReducer + useContext (Global State)</h2>

        <ChildComponent />
      </div>
    </ScoreContext.Provider>
  );
}

export default CauB;
