import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { blogPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return buildMetadata({
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
      path: "/blog"
    });
  }

  return buildMetadata({
    title: `${post.title} | Apex Plumbing London`,
    description: post.excerpt,
    path: `/blog/${post.slug}`
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="bg-mesh">
        <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{post.category}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-base leading-relaxed text-steel md:text-lg">{post.excerpt}</p>
        </div>
      </section>

      <Section
        eyebrow="Practical Guide"
        title="What to check and when to call an engineer"
        subtitle="Simple, practical advice from our London team to help you act quickly and safely."
      >
        <article className="prose prose-slate max-w-none">
          <p>
            Use this guide to understand the issue, carry out safe checks, and decide when professional help is the best
            next step.
          </p>
          <h3>Why this topic matters</h3>
          <p>
            The intent behind this topic indicates users are either diagnosing a problem or evaluating whether to hire
            professional help. The page should answer both needs without overwhelming the reader.
          </p>
          <h3>Practical guidance section</h3>
          <p>
            Include actionable checks users can safely perform, followed by clear escalation points where expert support is
            recommended.
          </p>
          <h3>Conversion bridge</h3>
          <p>
            Add a concise CTA leading to the most relevant service page and a direct phone option for urgent cases.
          </p>
        </article>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/services/emergency-plumber-london"
            className="btn-secondary cta-interactive"
          >
            Emergency Service Page
          </Link>
          <Link
            href="/contact"
            className="btn-primary cta-interactive"
          >
            Request Quote
          </Link>
        </div>
      </Section>
    </>
  );
}
