export function Support() {
  return (
    <section id="support" className="py-20 px-8 max-w-[680px] mx-auto">
      <div className="text-xs font-semibold text-[var(--accent-purple-light)] tracking-widest uppercase mb-3">
        Support
      </div>
      <h2 className="font-[family-name:var(--font-syne)] text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-tight leading-tight mb-0">
        Need help?
      </h2>

      <div className="bg-[var(--background-card)] border border-[var(--border)] rounded-2xl p-10 mt-8">
        <p className="text-sm text-[var(--muted)] mb-6 leading-relaxed">
          We read every message. Whether it&apos;s a bug, a feature idea, or a
          question about your account — we&apos;d love to hear from you.
        </p>
        <a
          href="mailto:support@flairapp.com"
          className="gradient-bg inline-flex items-center gap-2 text-white font-medium text-sm px-6 py-3 rounded-full hover:opacity-80 transition-opacity"
        >
          {"✉"} support@flairapp.com
        </a>
      </div>
    </section>
  );
}
