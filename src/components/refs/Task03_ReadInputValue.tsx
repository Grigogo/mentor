import { useRef } from "react";

export function Task03_ReadInputValue() {
  const consoleRef =
    useRef<HTMLInputElement | null>(null);

  const printValue = (
    ref: HTMLInputElement | null,
  ) => {
    if (ref?.value.length) {
      console.log(ref.value);
    } else {
      console.log("Поле пустое");
    }
  };
  return (
    <div
      style={{
        display: "grid",
        gap: 12,
        maxWidth: 400,
      }}
    >
      <input
        ref={consoleRef}
        placeholder="Введи текст"
      />
      <button
        onClick={() =>
          printValue(consoleRef.current)
        }
      >
        Считать значение
      </button>
    </div>
  );
}
