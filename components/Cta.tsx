export default function Cta() {
  return (
    <section id="contact" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest uppercase mb-4 opacity-90">Ready?</p>

        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Let's build together</h2>

         

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-primary-foreground text-primary rounded-md hover:bg-primary-foreground/90 transition-colors font-medium">
            Schedule 15 Min Call
          </button>
          <a
            href="mailto:hello@forgedev.com"
            className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-colors font-medium rounded-md"
          >
            hello@forgedev.com
          </a>
        </div>

        <p className="mt-8 text-sm opacity-75">Available for projects starting immediately</p>
      </div>
    </section>
  )
}
