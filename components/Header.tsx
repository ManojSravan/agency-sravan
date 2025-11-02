"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm ">
      <nav className="container mx-auto  py-4 flex items-center justify-between">
        <div className="font-bold text-2xl tracking-tight text-foreground">Manoj Sravan</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">
            Services
          </a>
          <a href="#process" className="text-sm font-medium hover:text-accent transition-colors">
            Process
          </a>
          <a href="#work" className="text-sm font-medium hover:text-accent transition-colors">
            Work
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="https://calendly.com/workwithmanojsravan/free-discovery-call" className="px-6 py-2 bg-primary font-bold text-primary-foreground rounded-md transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 cursor-pointer text-sm"
>
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col p-4 gap-4">
              <a href="#services" className="text-sm font-medium hover:text-accent">
                Services
              </a>
              <a href="#process" className="text-sm font-medium hover:text-accent">
                Process
              </a>
              <a href="#work" className="text-sm font-medium hover:text-accent">
                Work
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-accent">
                Contact
              </a>
              <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium text-sm">
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
