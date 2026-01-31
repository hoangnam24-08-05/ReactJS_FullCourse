import React from "react";
import { useState, useEffect, useRef } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [lapName, setLapName] = useState("");

  const intervalRef = useRef(null);

  const inputRef = useRef(null);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };

  const handleStop = () => {
    if (!isRunning) return;
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
  };
  const handleAppLap = () => {
    const newLap = {
      id: Date.now(),
      time: time,
      name: lapName || `Lap ${laps.length + 1}`,
    };
    setLaps([...laps, newLap]);
    setLapName("");
    inputRef.current.focus();
  };
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000) % 60;
    const seconds = Math.floor(ms / 1000) % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);

    const pad = (num) => num.toString().padStart(2, "0");
    return `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
  };

  return (
    <div className="stopwatch-box">
      <h2>Stop Watch</h2>
      <div className="time-display">{formatTime(time)}</div>
      <div className="control-btns">
        {!isRunning ? (
          <button
            onClick={handleStart}
            style={{ background: "#28a745", color: "white" }}
          >
            Start
          </button>
        ) : (
          <button
            onClick={handleStop}
            style={{ background: "#dc3545", color: "white" }}
          >
            Stop
          </button>
        )}
        <button
          onClick={handleReset}
          style={{ background: "#6c757d", color: "white" }}
        >
          Reset
        </button>
      </div>
      <div className="lap-area">
        <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
          <input
            type="text"
            ref={inputRef}
            placeholder="Đặt tên vòng chạy"
            value={lapName}
            onChange={(e) => setLapName(e.target.value)}
            style={{ flex: 1, padding: "5px" }}
          />
          <button
            onClick={handleAppLap}
            style={{
              padding: "5px 10px",
              background: "#007bff",
              color: "white",
            }}
          >
            Lập vòng chạy
          </button>
        </div>
        <ul className="lap-list">
          {laps.map((lap) => (
            <li
              key={lap.id}
              style={{
                borderBottom: "1px solid #eee",
                padding: "5px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{lap.name}</span>
              <strong>{formatTime(lap.time)}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default StopWatch;
