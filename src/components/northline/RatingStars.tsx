export function RatingStars({ rating, count }: { rating: number; count?: number }) {
  const fullStars = Math.round(rating);

  return (
    <div className="flex items-center gap-2">
      <p className="text-sm font-semibold text-[#111827]">{rating.toFixed(1)}</p>
      <div className="flex items-center gap-0.5 text-[13px] text-[#111827]">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} aria-hidden>
            {index < fullStars ? "★" : "☆"}
          </span>
        ))}
      </div>
      {count ? <p className="text-sm text-slate-500">({count})</p> : null}
    </div>
  );
}
