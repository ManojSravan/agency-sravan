import RevealAnimation from "@/components/animations/RevealAnimation"

export default function About() {
  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground" id="about">
      <div className="max-w-7xl mx-auto">
        
        <RevealAnimation type="fade" delay={0.1}>
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 opacity-90">
              01 / How I Think
            </p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Built for founders who value clarity
            </h2>
          </div>
        </RevealAnimation>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left Column */}
          <div className="space-y-6">
            <RevealAnimation type="slide" direction="up" delay={0.15}>
              <p className="text-lg font-semibold leading-relaxed">
                Most agencies are slow, layered, and expensive. Freelancers can feel unpredictable
                and stretched thin. I work in the middle, fast like a founder, focused like a partner.
              </p>
            </RevealAnimation>

            <RevealAnimation type="slide" direction="up" delay={0.25}>
              <p className="text-lg font-semibold leading-relaxed">
                This is an independent studio led by one builder. No hand-offs, no inflated structure.
                You work directly with the person designing, writing, and engineering your product.
              </p>
            </RevealAnimation>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <RevealAnimation type="slide" direction="up" delay={0.35}>
              <p className="text-lg font-semibold leading-relaxed">
                Clear scope, tight communication, fast execution. We iterate quickly, avoid
                bloated timelines, and build only what moves the business forward.
              </p>
            </RevealAnimation>

            <RevealAnimation type="slide" direction="up" delay={0.45}>
              <p className="text-lg font-semibold leading-relaxed">
                If you value speed, clarity, and working with someone who cares about the outcome
                as much as you do, we’ll build great things together.
              </p>
            </RevealAnimation>
          </div>

        </div>
      </div>
    </section>
  )
}
