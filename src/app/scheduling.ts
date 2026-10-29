export type Algorithm = "FCFS" | "SJF" | "Round Robin";
const jobs = [
  { id: "A", burst: 4 },
  { id: "B", burst: 2 },
  { id: "C", burst: 1 },
];
// All jobs arrive at t=0; ties preserve input order.
export function schedule(algorithm: Algorithm): string[] {
  if (algorithm === "SJF")
    return [...jobs]
      .sort((a, b) => a.burst - b.burst)
      .flatMap((job) => Array<string>(job.burst).fill(job.id));
  if (algorithm === "FCFS")
    return jobs.flatMap((job) => Array<string>(job.burst).fill(job.id));
  const queue = jobs.map((job) => ({ ...job }));
  const result: string[] = [];
  while (queue.length) {
    const job = queue.shift()!;
    const run = Math.min(2, job.burst);
    result.push(...Array<string>(run).fill(job.id));
    job.burst -= run;
    if (job.burst) queue.push(job);
  }
  return result;
}
