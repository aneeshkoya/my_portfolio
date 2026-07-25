export function ArchitectureDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="subtle-card overflow-hidden p-5">
      <div className="grid gap-3 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step} className="relative rounded-[var(--radius)] border border-[var(--border)] p-4">
            <p className="text-xs font-black text-[var(--accent)]">Step {index + 1}</p>
            <p className="mt-2 text-sm font-extrabold">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
