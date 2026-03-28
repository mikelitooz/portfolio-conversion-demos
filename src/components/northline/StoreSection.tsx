import { ReactNode } from "react";

type StoreSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function StoreSection({ id, eyebrow, title, subtitle, children, className = "" }: StoreSectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-8">
        <div className="max-w-3xl">
          {eyebrow ? <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p> : null}
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[#111827] md:text-5xl">{title}</h2>
          {subtitle ? <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{subtitle}</p> : null}
        </div>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
