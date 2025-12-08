"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Ultra Low-Cost",
    priceRange: {
        INR: "₹15,000 - ₹30,000",
        USD: "$200 - $400"
    },
    description: "Designed for ultra-low-end customers looking to get started online.",
    features: [
      "Simple Website (Up to 3 Pages)",
      "Responsive Design",
      "Basic SEO Setup",
      "Hosting (1 Year Included)",
      "CMS Setup (WordPress)",
      "1 Month Basic Support"
    ],
    highlight: false
  },
  {
    name: "Basic Plan",
    priceRange: {
        INR: "₹50,000 - ₹1,00,000",
        USD: "$600 - $1,200"
    },
    description: "Perfect for small businesses or startups looking to establish an online presence.",
    features: [
      "Custom Website (Up to 5 Pages)",
      "Basic SEO Optimization",
      "Responsive Design",
      "CMS Setup (WordPress/Drupal)",
      "1 Month Support & Maintenance",
      "Standard API Integrations"
    ],
    highlight: false
  },
  {
    name: "Standard Plan",
    priceRange: {
        INR: "₹1,00,000 - ₹3,00,000",
        USD: "$1,200 - $3,600"
    },
    description: "Ideal for growing businesses that need advanced features and professionalism.",
    features: [
      "Custom Website (Up to 15 Pages)",
      "Advanced SEO Optimization",
      "Mobile-First Design",
      "E-commerce Integration",
      "3 Months Support & Maintenance",
      "UI/UX Design & Prototyping"
    ],
    highlight: true
  },
  {
    name: "Premium Plan",
    priceRange: {
        INR: "₹3,00,000 - ₹10,00,000",
        USD: "$3,600 - $12,000"
    },
    description: "Best suited for enterprises with complex needs and focus on scalability.",
    features: [
      "Full Custom Software Development",
      "Enterprise Web Applications",
      "Advanced UI/UX Design",
      "Custom CMS Development",
      "6 Months Support & Maintenance",
      "Performance & Security Audits"
    ],
    highlight: false
  }
]

export default function PricingPage() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR")

  return (
    <div className="bg-white dark:bg-brand-black min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-primary dark:text-white">Transparent Pricing</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Flexible plans to suit businesses of all sizes. No hidden fees.
          </p>
          
          {/* Currency Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={cn("text-sm font-bold", currency === "INR" ? "text-primary dark:text-white" : "text-gray-400")}>INR (₹)</span>
            <button 
                onClick={() => setCurrency(currency === "INR" ? "USD" : "INR")}
                className="w-14 h-8 bg-gray-200 dark:bg-white/10 rounded-full p-1 relative transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            >
                <div className={cn(
                    "w-6 h-6 bg-primary rounded-full shadow-md transition-transform duration-300",
                    currency === "USD" ? "translate-x-6" : "translate-x-0"
                )} />
            </button>
            <span className={cn("text-sm font-bold", currency === "USD" ? "text-primary dark:text-white" : "text-gray-400")}>USD ($)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-8 rounded-2xl border ${plan.highlight ? 'border-brand-red shadow-2xl scale-105 z-10 bg-white dark:bg-zinc-900' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-white/5'} transition-transform duration-300`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-bold font-heading text-primary dark:text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 h-10">{plan.description}</p>
                <div className="text-2xl font-bold text-gray-900 dark:text-white transition-all duration-300">
                    {plan.priceRange[currency]}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                    <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={`/start-project?plan=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(plan.priceRange[currency])}`} className="mt-auto">
                <Button variant={plan.highlight ? "primary" : "outline"} className="w-full">
                  Choose Plan
                </Button>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
                For businesses with unique needs or large-scale projects, we offer fully customizable solutions starting at <span className="font-bold">{currency === "INR" ? "₹10,00,000" : "$12,000"}</span>.
            </p>
            <Link href="/contact">
                <Button size="lg" variant="secondary">Contact for Custom Quote</Button>
            </Link>
        </div>
      </div>
    </div>
  )
}
