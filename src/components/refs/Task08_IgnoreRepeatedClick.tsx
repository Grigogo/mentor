import { useRef } from "react";

export function Task08_IgnoreRepeatedClick() {
  const isHandledRef = useRef(false);
  const handleClick = () => {
    if (isHandledRef.current) return;

    isHandledRef.current = true;
    console.log("Клик обработан");
  };

  return (
    <button onClick={() => handleClick()}>
      Нажми меня
    </button>
  );
}
