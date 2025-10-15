import { useState } from 'react';

export default function Counter({ initial = 0, step = 1 }) {
  const [count, setCount] = useState(initial);

  const increment = () => setCount(previous => previous + step);
  const decrement = () => setCount(previous => (previous - step < 0 ? 0 : previous - step));

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 12, padding: 16 }}>
      <strong style={{ fontSize: 20 }}>Counter</strong>
      <div aria-live="polite" aria-atomic="true" style={{ fontSize: 48, fontWeight: 800 }}>{count}</div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} disabled={count === 0}>Decrement</button>
      </div>
    </div>
  );
}


