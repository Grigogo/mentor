import { useEffect, useState } from "react";

export function TaskTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Count: ${count}`;
    return () => {
      document.title = previousTitle;
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount((c) => c + 1)}
      >
        +1
      </button>
    </div>
  );
}
