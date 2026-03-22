import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// 1. Reducer & Store
const reducer = (state = 2, action) => {
  if (action.type === 'INCREASE') return state + 1;
  return state;
};
const store = createStore(reducer);

// UI Components
const ComponentA = () => {
  const count = useSelector(state => state);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: 80, height: 80, backgroundColor: '#c5e1a5', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #7cb342', fontSize: '24px' }}>{count}</div>
      <p style={{ marginTop: '5px', fontWeight: 'bold' }}>A</p>
    </div>
  );
};

const ComponentB = () => {
  const count = useSelector(state => state);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: 80, height: 80, backgroundColor: '#c5e1a5', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #7cb342' }}>
        <div style={{ width: 50, height: 50, backgroundColor: 'white', clipPath: 'polygon(0 0, 0 100%, 100% 50%)', display: 'flex', alignItems: 'center', paddingLeft: '10px', fontSize: '18px' }}>{count}</div>
      </div>
      <p style={{ marginTop: '5px', fontWeight: 'bold' }}>B</p>
    </div>
  );
};

const AppContainer = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ border: '2px solid black', padding: '30px', width: '300px', textAlign: 'center' }}>
      <h4 style={{ marginBottom: '20px' }}>b. Redux Core</h4>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '40px' }}>
        <ComponentA />
        <ComponentB />
      </div>
      <button onClick={() => dispatch({ type: 'INCREASE' })} style={{ padding: '8px 30px', border: '1px solid black', borderRadius: '5px', background: 'white', cursor: 'pointer' }}>
        Increase
      </button>
    </div>
  );
};

export default function CauB() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}