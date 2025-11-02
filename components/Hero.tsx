import RevealAnimation from "@/components/animations/RevealAnimation"

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-[1.8fr_1fr] gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <RevealAnimation type="slide" direction="up" delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight text-balance">
                Your product shouldn’t wait for a “perfect team.”
              </h1>
            </RevealAnimation>

            <RevealAnimation type="fade" delay={0.25}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                A lean product studio helping founders launch MVPs and SaaS experiences fast,
                without bloated agency processes or wasted runway.
              </p>
            </RevealAnimation>

            <RevealAnimation type="slide" direction="up" delay={0.35}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="https://calendly.com/workwithmanojsravan/free-discovery-call"className="px-8 py-3 cursor-pointer bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-semibold">
                  Free Strategy Call
                </a>
                <a href="#work" className="px-8 py-3 cursor-pointer border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 font-semibold rounded-md">
                  See Case Studies
                </a>
              </div>
            </RevealAnimation>
          </div>

          {/* RIGHT IMAGE */}
          <RevealAnimation type="scale" delay={0.4}>
            <div className="relative h-[300px] md:h-[410px] rounded-lg overflow-hidden">
              <img
                src="/developer.png"
                alt="Founder building with our development partner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 from-primary/20 to-transparent"></div>
            </div>
          </RevealAnimation>

        </div>
      </div>
    </section>
  )
}
