interface InsightCardProps {
  title: string;
  excerpt: string;
  href: string;
}

/**
 * Large editorial card, minimal design, per the "not a blog, an executive
 * publication" positioning (Section 10 / Homepage Blueprint).
 */
export function InsightCard({ title, excerpt, href }: InsightCardProps) {
  return (
    <a
      href={href}
      className="group flex flex-col gap-3 border-t border-soft-grey py-8 first:border-t-0
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300"
    >
      <h3 className="text-2xl font-semibold leading-display text-near-black group-hover:text-accent-500">
        {title}
      </h3>
      <p className="max-w-xl text-sm leading-body text-[#555555]">{excerpt}</p>
    </a>
  );
}
