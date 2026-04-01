type TimelineStep = {
  title: string;
  detail: string;
  eta: string;
};

const defaultSteps: TimelineStep[] = [
  {
    title: "Call received",
    detail: "We triage your issue and confirm urgency in under 2 minutes.",
    eta: "0-2 min"
  },
  {
    title: "Engineer dispatched",
    detail: "Nearest available engineer is assigned with your postcode details.",
    eta: "5-10 min"
  },
  {
    title: "Engineer arrives",
    detail: "Most central London jobs are reached within our 60-minute response target.",
    eta: "Under 60 min"
  }
];

export function ResponseTimeline({
  title = "How fast we respond",
  subtitle = "Clear timeline from first call to engineer arrival.",
  steps = defaultSteps
}: {
  title?: string;
  subtitle?: string;
  steps?: TimelineStep[];
}) {
  return (
    <div className="surface-card p-6 md:p-8" data-reveal>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Power Section</p>
      <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-steel">{subtitle}</p>
      <ol className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="card-interactive rounded-2xl border border-slate-200 bg-white p-5"
            data-reveal
            data-reveal-delay={index * 120}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-mint">Step {index + 1}</p>
            <p className="mt-2 text-base font-semibold text-ink">{step.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-steel">{step.detail}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-ink">{step.eta}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
