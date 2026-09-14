import { useEffect, useState } from "react";

export const TaskTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] =
    useState(false);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isRunning]);
  return (
    <>
      <div>{`Time ${time}`}</div>
      <button
        onClick={() => setIsRunning((v) => !v)}
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={() => {
          setIsRunning(false);
          setTime(0);
        }}
      >
        Stop
      </button>
    </>
  );
};
