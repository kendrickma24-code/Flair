const features = [
  {
    icon: "✈️",
    title: "Post your flights",
    description:
      "Log upcoming and past trips to your feed. Your friends see where you're headed — and can jump on the same flight.",
  },
  {
    icon: "🌐",
    title: "Discover routes",
    description:
      "See trending routes and popular destinations in real time. Find out who in your network is flying your way.",
  },
  {
    icon: "🗺️",
    title: "Build your globe",
    description:
      "Every flight you take maps to your personal globe — a living record of every country and city you've touched down in.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-22 px-8 max-w-[1060px] mx-auto">
      <div className="text-xs font-semibold text-[var(--accent-purple-light)] tracking-widest uppercase mb-3">
        How it works
      </div>
      <h2 className="font-[family-name:var(--font-syne)] text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold tracking-tight leading-tight mb-12 max-w-[520px]">
        Travel is more fun when it&apos;s shared.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-[var(--background-card)] p-8 hover:bg-[var(--background-card-hover)] transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-[rgba(123,95,232,0.1)] border border-[rgba(123,95,232,0.18)] flex items-center justify-center text-base mb-5">
              {feature.icon}
            </div>
            <h3 className="font-[family-name:var(--font-syne)] text-base font-bold mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
