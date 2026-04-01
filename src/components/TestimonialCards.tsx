import { testimonials } from "@/lib/content";

export function TestimonialCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <article
          key={testimonial.name + testimonial.area}
          className="card-interactive rounded-2xl border border-slate-200 bg-white p-6"
          data-reveal
          data-reveal-delay={index * 120}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-mint">{testimonial.service}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate">“{testimonial.quote}”</p>
          <div className="mt-4 text-sm text-steel">
            <p className="font-semibold text-ink">{testimonial.name}</p>
            <p>
              {testimonial.area} • {"★".repeat(testimonial.rating)}
            </p>
            <p>{testimonial.date}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
