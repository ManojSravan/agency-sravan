export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "We interviewed 5 agencies before choosing them. It was the best decision we made. They understood our constraints and shipped a website that actually converted.",
      author: "Sarah Chen",
      role: "Founder & CEO",
      company: "TechFlow",
      image: "/professional-woman-headshot.png",
    },
    {
      quote:
        "No agency has ever communicated with us the way these folks do. Weekly check-ins, clear roadmaps, zero surprises. Refreshing.",
      author: "Marcus Johnson",
      role: "Founder",
      company: "Growth Labs",
      image: "/professional-man-headshot.png",
    },
     
  ]

  return (
    <section className="py-24 px-6 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">Founder Stories</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">What founders say</h2>
        </div>

        <div className="flex gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="group p-8 rounded-lg border border-border bg-background hover:border-accent transition-all hover:shadow-md"
            >
              <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
