"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, Shield, Users } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: Zap,
    title: "Fast Onboarding",
    description: "Get developers integrated into your team within 48 hours."
  },
  {
    icon: Shield,
    title: "Vetted Talent",
    description: "Top 1% of talent, rigorously tested for technical and communication skills."
  },
  {
    icon: Users,
    title: "Flexible Scaling",
    description: "Scale your team up or down based on your project needs."
  }
]

export default function HirePage() {
  return (
    <div className="bg-white dark:bg-brand-black min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-primary dark:text-white">
            Hire Top Web Developers
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Scale your team with elite developers from StackNothing. On-demand expertise in React, Node.js, Next.js, and more.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact?type=hire">
                <Button size="lg" variant="primary">Hire Talent Now</Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {benefits.map((b, i) => (
                <div key={i} className="text-center p-6 bg-gray-50 dark:bg-white/5 rounded-2xl">
                    <b.icon className="w-12 h-12 text-brand-red mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary dark:text-white mb-2">{b.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{b.description}</p>
                </div>
            ))}
        </div>

        <div className="bg-secondary/5 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                     <h2 className="text-3xl font-bold font-heading text-primary dark:text-white mb-6">Why Hire From Us?</h2>
                     <ul className="space-y-4">
                        {[
                            "Dedicated developers working in your time zone",
                            "Transparent pricing with no hidden fees",
                            "Direct communication with your team",
                            "Daily updates and agile workflow",
                            "Satisfaction guaranteed or money back"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                     </ul>
                </div>
                <div className="bg-white dark:bg-black/20 p-8 rounded-2xl border border-gray-200 dark:border-white/10">
                    <h3 className="text-xl font-bold mb-4 text-primary dark:text-white">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                        {["React", "Next.js", "Node.js", "TypeScript", "Drupal", "WordPress", "Tailwind CSS", "GSAP", "AWS", "GraphQL"].map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="mt-8">
                        <Link href="/contact?type=hire">
                            <Button className="w-full">Get a Quote</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}
