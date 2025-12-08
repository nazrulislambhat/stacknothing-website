import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"

export default function WordPressPage() {
  return (
    <div className="bg-white dark:bg-brand-black min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-primary dark:text-white">WordPress Development</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Custom themes, plugins, and scalable WordPress solutions for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold font-heading text-primary dark:text-white mb-6">Why Choose WordPress?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                WordPress powers over 40% of the web. It's flexible, SEO-friendly, and easy to manage. But to get the most out of it, you need a team that goes beyond basic templates.
            </p>
            <ul className="space-y-4">
                {[
                    "Custom Headless WordPress setups (Next.js + WP)",
                    "Bespoke Theme Development (No bloat)",
                    "WooCommerce Optimization for High Traffic",
                    "Advanced Security Hardening",
                    "Plugin Development & API Integrations"
                ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
             <div className="mt-8">
                <Link href="/contact?subject=WordPress">
                    <Button size="lg">Start WordPress Project</Button>
                </Link>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-white/5 p-8 rounded-3xl h-full flex items-center justify-center">
            {/* Placeholder for an image or graphic */}
            <div className="text-center opacity-50">
                <span className="text-9xl font-bold text-gray-300 dark:text-white/10">WP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
