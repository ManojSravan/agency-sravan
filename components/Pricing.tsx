"use client"

import RevealAnimation from "./animations/RevealAnimation"

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      description: "For MVP launches",
      price: "$5k",
      duration: "base",
      highlight: false,
      features: [
        "Production-ready website",
        "Mobile responsive design",
        "SEO foundation setup",
        "Analytics integration",
        "30 days of support",
      ],
      cta: "Book a Call",
    },
    {
      name: "Growth",
      description: "For scaling fast",
      price: "$15k",
      duration: "base",
      highlight: false,
      badge: "Most Popular",
      features: [
        "Everything in Starter",
        "Custom backend integrations",
        "E-commerce ready",
        "Advanced automation setup",
        "90 days of support",
        "Performance optimization",
      ],
      cta: "Book a Strategy Call",
    },
    {
      name: "Enterprise",
      description: "For complex needs",
      price: "Custom",
      duration: "pricing",
      highlight: false,
      features: [
        "Everything in Growth",
        "Dedicated development team",
        "Custom architecture design",
        "Ongoing optimization",
        "Priority support",
        "Quarterly business reviews",
      ],
      cta: "Schedule Consultation",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
       <RevealAnimation type="slide" direction="up" delay={0.1}>
          <div className="mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
              Service Packages
            </p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Build, Scale & Grow with Confidence
            </h2>
          </div>
        </RevealAnimation>


        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-lg hover:scale-105 duration-300 cursor-pointer border transition-all ${
                tier.highlight
                  ? "border-accent bg-card shadow-lg scale-105"
                  : "border-border bg-card hover:border-accent/50"
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Tier Name */}
                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>

                

                {/* CTA Button */}
                <a href="https://cal.com/manoj-sravan-annivg/free-discovery-call">
                  <button
                  onClick={() => {
                    const element = document.getElementById("contact-section")
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className={`w-full py-3 rounded-lg cursor-pointer font-semibold transition-all mb-8 bg-primary text-primary-foreground hover:bg-primary/90 $ `}
                >
                   {tier.cta}
                </button>

                </a>
                {/* Features */}
                <div className="space-y-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    What's included
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                        <svg
                          className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

         
      </div>
    </section>
  )
}
