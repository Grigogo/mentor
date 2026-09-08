import { useRef } from "react";

export function Task01_FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      style={{
        display: "grid",
        gap: 12,
        maxWidth: 400,
      }}
    >
      <input
        ref={inputRef}
        placeholder="Поле ввода"
      />
      <button
        onClick={() => inputRef.current?.focus()}
      >
        Сфокусироваться на поле
      </button>
    </div>
  );
}
