import RevealAnimation from "@/components/animations/RevealAnimation"

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Discovery",
      description: "I dive deep into your business, audience, and goals to understand what success looks like.",
    },
    {
      step: "02",
      title: "Strategy & Design",
      description:
        "I map user journeys and create compelling designs that convert. Every decision is backed by research and data.",
    },
    {
      step: "03",
      title: "Development & Build",
      description:
        "I bring designs to life with clean, performant code—built for scalability, speed, and long-term maintainability.",
    },
    {
      step: "04",
      title: "Launch & Optimize",
      description:
        "I launch with confidence, then monitor, test, and optimize to ensure your site performs and evolves as your business grows.",
    },
  ]

  return (
    <section id="process" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <RevealAnimation type="fade" delay={0.1}>
          <div className="mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
              03 / My Working Process
            </p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              How I work
            </h2>
          </div>
        </RevealAnimation>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((item, idx) => (
            <RevealAnimation
              key={item.step}
              type="slide"
              direction="up"
              delay={0.15 + idx * 0.1}
            >
              <div className="p-8 bg-background border border-border rounded-lg hover:border-accent transition-colors">
                <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                  Step {item.step}
                </p>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>

      </div>
    </section>
  )
}
