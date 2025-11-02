// Updated Testimonials component with RevealAnimation
import RevealAnimation from "./animations/RevealAnimation";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "I highly recommend Manoj Sravan. He’s passionate, hard-working, and patient. He designed our websites to a very high standard and was a pleasure to work with. His industry knowledge in web design and SEO made a clear difference to our results.",
      author: "Sameeksha P N",
      role: "Founder & CEO",
      company: "Illumora",
      image: "/professional-woman-headshot.png",
    },
    {
      quote:
        "Manoj was an integral part of our team at QubicGen Software Solutions, contributing significantly to multiple projects. He demonstrated excellent technical skills, problem-solving ability, and professionalism. His dedication and collaborative approach were highly commendable.",
      author: "Tharun Chavvala",
      role: "HR Manager",
      company: "QubicGen Software Solutions",
      image: "/professional-man-headshot.png",
    },
  ];

  return (
    <section className="py-24 px-6 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <RevealAnimation type="slide" direction="up" delay={0.1}>
          <div className="mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
              In Their Words
            </p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Trusted by founders & teams
            </h2>
          </div>
        </RevealAnimation>

        <div className="flex flex-col md:flex-row gap-8">
          {testimonials.map((testimonial, index) => (
            <RevealAnimation
              key={testimonial.author}
              type="slide"
              direction="up"
              delay={0.2 + index * 0.2}
            >
              <div className="group p-8 rounded-lg border border-border bg-background hover:border-accent transition-all hover:shadow-md">
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}