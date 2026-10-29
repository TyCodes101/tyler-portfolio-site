"use client";
import { useState } from "react";
import { schedule, type Algorithm } from "./scheduling";
export function SchedulerPreview() {
  const [algorithm, setAlgorithm] = useState<Algorithm>("FCFS");
  const timeline = schedule(algorithm);
  return (
    <div className="scheduler-preview">
      <p className="eyebrow">Try a scheduling sketch</p>
      <div
        className="algorithm-controls"
        role="group"
        aria-label="Scheduling algorithm"
      >
        {(["FCFS", "SJF", "Round Robin"] as Algorithm[]).map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={algorithm === item}
            onClick={() => setAlgorithm(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="workload">
        <span>A / 4 units</span>
        <span>B / 2 units</span>
        <span>C / 1 unit</span>
      </div>
      <div
        className="gantt"
        role="img"
        aria-label={`${algorithm}: execution order ${timeline.join(", ")}. Total 7 time units.`}
      >
        {timeline.map((id, index) => (
          <span
            key={`${algorithm}-${index}`}
            className={`process process-${id.toLowerCase()}`}
            style={{ animationDelay: `${index * 45}ms` }}
          >
            {id}
          </span>
        ))}
      </div>
      <div className="time-axis" aria-hidden="true">
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
      <p className="scheduler-explanation" aria-live="polite">
        {algorithm === "FCFS"
          ? "First come, first served: A finishes before B and C begin."
          : algorithm === "SJF"
            ? "Shortest job first: C and B finish before the longer job A."
            : "Round Robin: each job gets up to 2 time units per turn."}
      </p>
      <p className="small-print">
        All three jobs arrive at time 0. This sketch illustrates the scheduling
        logic; the full project supports editable workloads and four algorithms.
      </p>
    </div>
  );
}
