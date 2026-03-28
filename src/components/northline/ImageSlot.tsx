type ImageSlotProps = {
  label: string;
  className?: string;
  src?: string;
  alt?: string;
  hideLabel?: boolean;
};

export function ImageSlot({ label, className = "", src, alt, hideLabel = false }: ImageSlotProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#fbfbf9] via-[#f7f8fa] to-[#edf1f5] ${className}`}
    >
      {src ? (
        <img src={src} alt={alt ?? label} className="h-full w-full object-cover" />
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.06),transparent_48%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(17,24,39,0.05)_100%)]" />
        </>
      )}
      {!hideLabel ? (
        <div className="pointer-events-none absolute inset-0 flex items-end p-5">
          <p className="rounded-full bg-white/92 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-slate-600">
            {label}
          </p>
        </div>
      ) : null}
    </div>
  );
}
