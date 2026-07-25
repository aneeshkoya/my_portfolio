import type { Metric } from "@/types/site";

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <article className="subtle-card p-5">
      <p className="text-3xl font-black text-[var(--accent)]">{metric.value}</p>
      <p className="mt-2 font-extrabold">{metric.label}</p>
      {metric.note ? <p className="mt-1 text-sm text-[var(--muted)]">{metric.note}</p> : null}
    </article>
  );
}
