export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into your business, audience, and goals to understand what success looks like.",
    },
    {
      step: "02",
      title: "Strategy & Design",
      description:
        "We map user journeys and create compelling designs that convert. Every decision is backed by research and data.",
    },
    {
      step: "03",
      title: "Development & Build",
      description:
        "Our developers bring designs to life with clean, performant code. We build with scalability and maintainability in mind.",
    },
    {
      step: "04",
      title: "Launch & Optimize",
      description: "We launch your site with confidence, then monitor, test, and optimize for continuous improvement.",
    },
  ]

  return (
    <section id="process" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">03 / Our Process</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">How we work</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-8 bg-background border border-border rounded-lg hover:border-accent transition-colors"
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">Step {item.step}</p>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
