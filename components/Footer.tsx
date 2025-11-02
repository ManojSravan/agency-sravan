export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Manoj Sravan</h3>
            <p className="text-sm opacity-75">
              Building digital products that drive growth for ambitious founders and businesses.
            </p>
          </div>

          <div>
            <p className="font-semibold text-sm mb-4">Services</p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  E-Commerce
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-sm mb-4">Company</p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#about" className="hover:opacity-100 transition-opacity">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="hover:opacity-100 transition-opacity">
                  Work
                </a>
              </li>
            <li>
                <a href="#process" className="hover:opacity-100 transition-opacity">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-sm mb-4">Connect</p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="https://x.com/manojsravan19?t=ZSJNDCg_Jmjuvhj9xKwIUA&s=09" className="hover:opacity-100 transition-opacity">
                  Twitter (X)
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/manojsravan/" className="hover:opacity-100 transition-opacity">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/ManojSravan" className="hover:opacity-100 transition-opacity">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/sravan_codes/" className="hover:opacity-100 transition-opacity">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
          <p>&copy; 2025 ManojSravan. All rights reserved.</p>
          {/* <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
