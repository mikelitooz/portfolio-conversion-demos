import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ImageSlot } from "@/components/northline/ImageSlot";
import { StoreSection } from "@/components/northline/StoreSection";
import { supportingProducts } from "@/lib/northline/content";

type PlaceholderPageProps = {
  params: Promise<{ slug: string }>;
};

const productBySlug = new Map(
  supportingProducts.map((product) => [product.href.split("/").pop() ?? "", product])
);

export async function generateStaticParams() {
  return supportingProducts.map((product) => ({
    slug: product.href.split("/").pop()
  }));
}

export async function generateMetadata({ params }: PlaceholderPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug.get(slug);

  if (!product) {
    return {
      title: "Product Not Found"
    };
  }

  return {
    title: `${product.title} | Northline Desk`,
    description: `Preview page for ${product.title} in the Northline Desk ecommerce prototype.`
  };
}

export default async function PlaceholderProductPage({ params }: PlaceholderPageProps) {
  const { slug } = await params;
  const product = productBySlug.get(slug);

  if (!product) {
    notFound();
  }

  return (
    <StoreSection
      eyebrow="Supporting Product"
      title={product.title}
      subtitle="This is a supporting product placeholder page for the ecommerce prototype."
      className="bg-[#f8f7f3]"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <ImageSlot label={product.title} className="aspect-[4/3]" />
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
          <p className="text-sm font-semibold text-slate-500">Price</p>
          <p className="mt-2 text-2xl font-semibold text-[#111827]">{product.price}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            This page exists to keep cross-sell flows realistic while the prototype focuses conversion depth on the
            Magnetic Cable Dock hero product.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/northline-desk/products/magnetic-cable-dock" className="rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white">
              View Hero Product
            </Link>
            <Link href="/northline-desk" className="rounded-full border border-[#111827] px-5 py-3 text-sm font-semibold text-[#111827]">
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </StoreSection>
  );
}
