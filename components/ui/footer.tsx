import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12 md:py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-2xl font-bold font-heading text-white mb-4 block">
            StackNothing
          </Link>
          <p className="text-gray-300 text-sm leading-relaxed">
            A versatile web development agency turning ideas into reality. We build from nothing to everything.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-4 font-heading text-brand-yellow">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/services" className="hover:text-white transition-colors">Web Development</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">UI/UX Design</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">E-commerce</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Custom Software</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 font-heading text-brand-yellow">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 font-heading text-brand-yellow">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>info@stacknothing.com</li>
            <li>+91-XXXXXXXXXX</li>
            <li className="pt-2">
                123, Tech Park Road, Whitefield<br />
                Bangalore, Karnataka
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} StackNothing. All rights reserved.
      </div>
    </footer>
  )
}
