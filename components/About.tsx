export default function About() {
  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4 opacity-90">01 / How We Think</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">We're not your typical agency</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Most agencies promise the moon and deliver mediocrity. Beautiful portfolios, vague timelines, and founders
              left wondering where their budget went.
            </p>
            <p className="text-lg leading-relaxed">
              We're different. We've been founders ourselves. We know what it's like to bet your savings on an idea and
              need results, fast. Every decision we make is guided by one question: "Will this actually help them win?"
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              No gatekeeping. No "let us handle it" nonsense. You're involved at every step. We communicate clearly,
              ship incrementally, and charge fairly. Your website isn't a legacy project—it's a competitive advantage
              that evolves with your business.
            </p>
            <p className="text-lg leading-relaxed">
              From pre-seed founders testing PMF to scaling companies adding revenue streams, we've been there. We know
              what works because we've done it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
