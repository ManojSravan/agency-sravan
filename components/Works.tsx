import RevealAnimation from "@/components/animations/RevealAnimation"

export default function Works() {
  const studies = [
    {
      title: "BoomBooth Studios",
      category: "Premium Podcasting Studio in Bangalore",
      description: "Designed and built a premium website for BoomBooth Studios",
      metrics: "Improved booking inquiries & brand trust",
      mockup: "/mockup-boombooth.png",
    },
    {
      title: "Illumora",
      category: "Psychological Wellbeing Institution",
      description: "Built a performance-optimized website for Illumora to enhance their online presence.",
      metrics: "Boosted user engagement & session duration",
      mockup: "/mockup-illumora.png",
    },
  ]

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <RevealAnimation type="fade" delay={0.1}>
          <div className="mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
              04 / Case Studies
            </p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              My recent work
            </h2>
          </div>
        </RevealAnimation>

        {/* Case Studies */}
        <div className="grid md:grid-cols-2 gap-8">
          {studies.map((study, idx) => (
            <RevealAnimation
              key={study.title}
              type="slide"
              direction="up"
              delay={0.15 + idx * 0.12}
            >
              <div className="group relative overflow-hidden rounded-lg border border-border hover:border-accent transition-all">
                <div className="aspect-video flex items-center justify-center">
                  <img
                    src={study.mockup || ""}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 bg-background">
                  <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
                    {study.category}
                  </p>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {study.description}
                  </p>
                  <p className="text-sm font-semibold text-accent">
                    {study.metrics}
                  </p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

      </div>
    </section>
  )
}
