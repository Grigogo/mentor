import { useRef } from "react";

export function Task02_ScrollToBlock() {
  const targetRef = useRef<HTMLDivElement | null>(
    null,
  );
  const scrollToTarget = (
    ref: React.RefObject<HTMLDivElement | null>,
  ) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <button
        onClick={() => scrollToTarget(targetRef)}
      >
        Прокрутить к цели
      </button>

      <div
        style={{
          height: 400,
          border: "1px dashed #ccc",
        }}
      >
        Контент
      </div>

      <div
        style={{
          height: 400,
          border: "1px dashed #ccc",
        }}
      >
        Контент
      </div>

      <div
        style={{
          height: 400,
          border: "1px dashed #ccc",
        }}
      >
        Контент
      </div>

      <div
        ref={targetRef}
        style={{
          padding: 24,
          border: "2px solid black",
        }}
      >
        Цель
      </div>
    </div>
  );
}
