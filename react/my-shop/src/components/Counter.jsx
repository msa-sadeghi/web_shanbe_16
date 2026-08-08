import { useEffect, useRef, useState } from "react";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return (
    <div>
      <p>current value {count}</p>
      <p>previous value {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}
