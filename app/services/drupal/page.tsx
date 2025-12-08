import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Layers } from "lucide-react"

export default function DrupalPage() {
  return (
    <div className="bg-white dark:bg-brand-black min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-primary dark:text-white">Drupal Development</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Enterprise-grade CMS solutions for complex data structures and high-security requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
             <div className="bg-gray-100 dark:bg-white/5 p-8 rounded-3xl h-full flex items-center justify-center order-2 md:order-1">
                {/* Placeholder for an image or graphic */}
                <div className="text-center opacity-50">
                    <Layers className="w-32 h-32 text-gray-300 dark:text-white/10 mx-auto" />
                </div>
            </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold font-heading text-primary dark:text-white mb-6">Enterprise Drupal Solutions</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Drupal is the choice for governments, higher education, and large enterprises. We specialize in building secure, scalable, and decoupled Drupal applications.
            </p>
            <ul className="space-y-4">
                {[
                    "Drupal 9/10 Migration & Upgrades",
                    "Decoupled Drupal (Next.js front-ends)",
                    "Complex Data Modeling & Workflow",
                    "Multilingual & Multisite Architecture",
                    "Custom Module Development"
                ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                        <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
             <div className="mt-8">
                <Link href="/contact?subject=Drupal">
                    <Button size="lg" variant="secondary">Consult Drupal Expert</Button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
