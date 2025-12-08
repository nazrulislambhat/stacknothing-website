import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Clock, ShieldCheck, Wrench } from "lucide-react"

const packages = [
  {
    name: "Starter Care",
    price: "₹10,000 / mo",
    hours: "5 Hours",
    features: [
      "Weekly Backups",
      "Plugin Updates",
      "Security Monitoring",
      "Uptime Monitoring"
    ]
  },
  {
    name: "Growth Care",
    price: "₹25,000 / mo",
    hours: "15 Hours",
    features: [
      "Daily Backups",
      "Priority Support",
      "Performance Tuning",
      "Content Updates",
      "Monthly Report"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    hours: "Custom",
    features: [
      "Real-time Backups",
      "24/7 Monitoring",
      "Dedicated Dev Team",
      "CI/CD Management",
      "SLA Guarantee"
    ]
  }
]

const hourlyRates = [
  { role: "Junior Developer", rate: "₹1,500 / hr", usd: "$25 / hr" },
  { role: "Senior Developer", rate: "₹3,500 / hr", usd: "$50 / hr" },
  { role: "UI/UX Designer", rate: "₹3,000 / hr", usd: "$45 / hr" },
  { role: "DevOps Engineer", rate: "₹5,000 / hr", usd: "$75 / hr" },
]

export default function MaintenancePage() {
  return (
    <div className="bg-white dark:bg-brand-black min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-primary dark:text-white">Maintenance & Support</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Keep your website secure, fast, and up-to-date with our comprehensive maintenance plans.
          </p>
        </div>

        {/* Retainer Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {packages.map((pkg, i) => (
                <div key={i} className={`p-8 rounded-2xl border ${pkg.highlight ? 'border-brand-red shadow-xl bg-white dark:bg-brand-black relative' : 'border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5'}`}>
                    {pkg.highlight && <div className="absolute top-0 right-0 bg-brand-red text-white text-xs px-3 py-1 rounded-bl-xl rounded-tr-xl font-bold">BEST VALUE</div>}
                    <h3 className="text-2xl font-bold font-heading text-primary dark:text-white mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{pkg.price}</div>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold mb-6">Includes {pkg.hours}</div>
                    
                    <ul className="space-y-3 mb-8">
                        {pkg.features.map((f, idx) => (
                            <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                                <Check className="w-4 h-4 text-green-500 mr-2" />
                                {f}
                            </li>
                        ))}
                    </ul>
                    <Link href={`/start-project?plan=${encodeURIComponent(pkg.name + " Maintenance")}`}>
                        <Button variant={pkg.highlight ? "primary" : "outline"} className="w-full">Choose Plan</Button>
                    </Link>
                </div>
            ))}
        </div>

        {/* Hourly Rates */}
        <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-white/5 rounded-3xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold font-heading text-center mb-12 text-primary dark:text-white">Ad-hoc Hourly Rates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {hourlyRates.map((rate, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-white dark:bg-black/20 rounded-xl">
                        <span className="font-bold text-gray-700 dark:text-gray-200">{rate.role}</span>
                        <div className="text-right">
                            <div className="font-bold text-primary dark:text-white">{rate.rate}</div>
                            <div className="text-xs text-gray-400">{rate.usd}</div>
                        </div>
                    </div>
                ))}
            </div>
             <p className="text-center text-sm text-gray-500 mt-8">
                * Minimum engagement is 5 hours. Discounts available for bulk hour purchases.
            </p>
        </div>

        {/* CTA */}
        <div className="text-center">
             <h2 className="text-2xl font-bold mb-6 text-primary dark:text-white">Need a Custom Maintenance Plan?</h2>
             <Link href="/contact">
                <Button size="lg" variant="secondary">Contact Support Team</Button>
             </Link>
        </div>

      </div>
    </div>
  )
}
