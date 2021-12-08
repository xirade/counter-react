import React, { useState } from "react";
import Counter from "./Counter";

export default function CountersList() {
  const initialState = [
    { id: 0, value: 0, name: "Human Representative" },
    { id: 1, value: 4, name: "Dynamic Agent" },
    { id: 2, value: 0, name: "Dynamic Orchestrator" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    setCounters((prevCounters) =>
      prevCounters.filter((counter) => counter.id !== id)
    );
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id, value) => {
    if (value >= 0) {
      setCounters(
        counters.map((counter) =>
          counter.id === id ? { ...counter, value: value + 1 } : counter
        )
      );
    }
  };

  const handleDecrement = (id, value) => {
    if (value) {
      setCounters(
        counters.map((counter) =>
          counter.id === id ? { ...counter, value: value - 1 } : counter
        )
      );
    }
  };

  return (
    <>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          {...counter}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      {counters.length !== 0 && (
        <button className="btn btn-primary btn-lg m-1" onClick={handleReset}>
          Reset
        </button>
      )}
    </>
  );
}
