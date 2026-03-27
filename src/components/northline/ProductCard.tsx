import Link from "next/link";
import { ImageSlot } from "@/components/northline/ImageSlot";

type ProductCardProps = {
  title: string;
  price: string;
  href: string;
  badge?: string;
};

export function ProductCard({ title, price, href, badge }: ProductCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
      <ImageSlot label={title} className="aspect-[4/3]" />
      <div className="mt-4">
        {badge ? <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{badge}</p> : null}
        <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-[#111827]">{title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-700">{price}</p>
          <Link href={href} className="text-sm font-semibold text-[#111827] transition hover:text-slate-500">
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
