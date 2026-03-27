import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-mint">{eyebrow}</p>
          ) : null}
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-base leading-relaxed text-steel md:text-lg">{subtitle}</p>
          ) : null}
        </div>
        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  );
}
