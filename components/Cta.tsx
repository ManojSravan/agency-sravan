'use client'
import RevealAnimation from "./animations/RevealAnimation";

// CTA component with RevealAnimation added
export function CtaWithAnimation() {
  function handleClick() {
    // @ts-ignore
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/foo/bar',
    });
    return false;
  }


  return (
    <section id="contact" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto text-center">
        <RevealAnimation type="fade" delay={0.1}>
          <p className="text-sm font-semibold tracking-widest uppercase mb-4 opacity-90">Ready?</p>
        </RevealAnimation>


        <RevealAnimation type="slide" direction="up" delay={0.2}>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Let's build together</h2>
        </RevealAnimation>


        <RevealAnimation type="slide" direction="up" delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleClick}
              className="px-8 cursor-pointer py-3 bg-primary-foreground text-primary rounded-md hover:bg-primary-foreground/90 transition-all hover:scale-105 duration-300 font-semibold"
            >
              Schedule 15 Min Call
            </button>
            <a
              href="mailto:workwithmanojsravan@gmail.com"
              className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-all font-semibold hover:scale-105 duration-300 rounded-md"
            >
              workwithmanojsravan@gmail.com
            </a>
          </div>
        </RevealAnimation>


        <RevealAnimation type="fade" delay={0.4}>
          <p className="mt-8 text-md font-semibold opacity-75">Available for projects starting immediately</p>
        </RevealAnimation>
      </div>
    </section>
  );
}