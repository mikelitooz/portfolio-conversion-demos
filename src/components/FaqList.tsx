type Faq = {
  question: string;
  answer: string;
};

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="space-y-3">
      {items.map((faq) => (
        <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-5">
          <summary className="cursor-pointer list-none text-base font-semibold text-ink">
            {faq.question}
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-steel">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
