import { useEffect, useState } from "react";

export function useDebounce<T>(
  value: T,
  delay: number,
): T {
  const [debaunceValue, setDebaunceValue] =
    useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebaunceValue(value);
    }, delay);
    return () => {
      clearTimeout(id);
    };
  }, [value, delay]);

  return debaunceValue;
}
