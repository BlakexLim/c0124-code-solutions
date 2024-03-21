import { FaPlay, FaPause } from 'react-icons/fa';
import { useState } from 'react';
import './stopwatch.css';

export function StopWatch() {
  const [count, setCount] = useState(0);
  const [activeIntId, setActiveInt] = useState<NodeJS.Timeout>();

  function handleStart(): void {
    const newInt = setInterval(() => setCount((prev) => prev + 1), 1000);
    setActiveInt(newInt);
  }

  function handleStop(): void {
    clearInterval(activeIntId);
    setActiveInt(undefined);
  }

  function handleReset(): void {
    if (activeIntId) return;
    setCount(0);
  }
  return (
    <div className="stopwatch">
      <div
        className="watch-face"
        onClick={handleReset}
        style={{ cursor: activeIntId ? 'default' : 'pointer' }}>
        <span>{count}</span>
      </div>
      {activeIntId ? (
        <FaPause onClick={handleStop} size="2rem" className="'start-stop" />
      ) : (
        <FaPlay onClick={handleStart} size="2rem" className="start-stop" />
      )}
    </div>
  );
}
