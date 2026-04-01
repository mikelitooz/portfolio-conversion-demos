import Link from "next/link";
import { Section } from "@/components/Section";
import { blogPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Plumbing Advice Blog | Apex Plumbing London",
  description:
    "Expert tips, maintenance guides, and answers to common plumbing questions from our London engineers.",
  path: "/blog"
});

export default function BlogIndexPage() {
  return (
    <>
      <section className="bg-mesh">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Blog</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Plumbing and Boiler Insights for London Property Owners
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel md:text-lg">
            Expert tips, maintenance guides, and answers to common plumbing questions from our London engineers.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Articles"
        title="Latest blog topics"
        subtitle="Browse practical guides to help you spot issues early and know when to call a professional."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className="card-interactive rounded-2xl border border-slate-200 bg-white p-6"
              data-reveal
              data-reveal-delay={index * 90}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-mint">{post.category}</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-steel">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-ink transition hover:text-accent"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
