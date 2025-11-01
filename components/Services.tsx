export default function Services() {
  const services = [
    {
      number: "01",
      title: "Custom Web Development",
      description:
        "Bespoke websites built from the ground up to match your brand and drive your business goals. Fast, secure, and optimized for conversions.",
    },
    {
      number: "02",
      title: "Product Design & Strategy",
      description:
        "We shape your digital strategy with research-backed design decisions. From user research to wireframes, we get it right before we build.",
    },
    {
      number: "03",
      title: "E-Commerce Solutions",
      description:
        "Powerful online stores designed to sell. We build e-commerce platforms that are beautiful, fast, and built to maximize your revenue.",
    },
    {
      number: "04",
      title: "Performance & Growth",
      description:
        "Your website is never done. We optimize, test, and iterate to continuously improve performance and drive more conversions.",
    },
  ]

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">02 / Our Services</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">What we do</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div key={service.number} className="pb-12 border-b border-border ">
              <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                {service.number}
              </p>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
