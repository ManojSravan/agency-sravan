export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-[1.8fr_1fr] gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight text-balance">
              A founder-first dev partner, not a cliché agency
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We get it. You're bootstrapped, you've got limited runway, and your website needs to work hard. No fluff,
              no nonsense, no 6-month timelines. Just solid code, real results, and partners who actually care about
              your success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium">
                Let's Talk
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary/5 transition-colors font-medium rounded-md">
                See Case Studies
              </button>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[350px] rounded-lg overflow-hidden">
            <img
              src="/developer.png"
              alt="Founder building with our development partner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0   from-primary/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
