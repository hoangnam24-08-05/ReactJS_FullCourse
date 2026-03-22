import React, { createContext, useReducer, useContext } from 'react';

// 1. Tạo Context
const AppContext = createContext();

// 2. Reducer
const countReducer = (state, action) => {
  if (action.type === 'INCREASE') return state + 1;
  return state;
};

// Component A (Hình vuông)
const ComponentA = () => {
  const count = useContext(AppContext);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: 80, height: 80, backgroundColor: '#c5e1a5', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #7cb342', fontSize: '24px' }}>
        {count}
      </div>
      <p style={{ marginTop: '5px', fontWeight: 'bold' }}>A</p>
    </div>
  );
};

// Component B (Hình tam giác)
const ComponentB = () => {
  const count = useContext(AppContext);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: 80, height: 80, backgroundColor: '#c5e1a5', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #7cb342' }}>
        {/* Vẽ tam giác bằng clip-path */}
        <div style={{ width: 50, height: 50, backgroundColor: 'white', clipPath: 'polygon(0 0, 0 100%, 100% 50%)', display: 'flex', alignItems: 'center', paddingLeft: '10px', fontSize: '18px' }}>
          {count}
        </div>
      </div>
      <p style={{ marginTop: '5px', fontWeight: 'bold' }}>B</p>
    </div>
  );
};

// Component App (Main)
export default function CauA() {
  const [count, dispatch] = useReducer(countReducer, 2); // Bắt đầu bằng 2 giống trong ảnh

  return (
    <AppContext.Provider value={count}>
      <div style={{ border: '2px solid black', padding: '30px', width: '300px', textAlign: 'center' }}>
        <h4 style={{ marginBottom: '20px' }}>a. useReducer + useContext</h4>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '40px' }}>
          <ComponentA />
          <ComponentB />
        </div>
        <button 
          onClick={() => dispatch({ type: 'INCREASE' })}
          style={{ padding: '8px 30px', border: '1px solid black', borderRadius: '5px', background: 'white', cursor: 'pointer' }}
        >
          Increase
        </button>
      </div>
    </AppContext.Provider>
  );
}