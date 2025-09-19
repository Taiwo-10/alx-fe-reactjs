import { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>React Counter App</h2>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Current Count: {count}</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => setCount(count + 1)} style={{ padding: '10px 15px' }}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ padding: '10px 15px' }}>Decrement</button>
        <button onClick={() => setCount(0)} style={{ padding: '10px 15px' }}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
