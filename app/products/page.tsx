"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Sparkles, Code, Zap } from "lucide-react"
import Link from "next/link"

const products = [
  {
    name: "StackGen AI",
    tagline: "Your automated code review partner.",
    description: "An AI-powered assistant that integrates with your Git workflow to provide instant, context-aware code reviews and optimization suggestions.",
    icon: Bot,
    status: "Beta",
    features: ["Security Analysis", "Performance Tips", "Auto-Refactoring"],
    color: "bg-blue-500"
  },
  {
    name: "PixelPerfect",
    tagline: "Design to Code, Instantly.",
    description: "Transform your Figma designs into production-ready React/Tailwind code with 99% accuracy using our vision-based AI model.",
    icon: Sparkles,
    status: "Coming Soon",
    features: ["Figma Integration", "Clean Code Export", "Component Mapping"],
    color: "bg-brand-red"
  },
  {
    name: "ContentFlow",
    tagline: "The Headless CMS that writes for you.",
    description: "A content management system charged with generative AI to help you draft, translate, and optimize content across all your channels.",
    icon: Zap,
    status: "Alpha",
    features: ["Auto-SEO", "Multi-language Gen", "Tone Adjustment"],
    color: "bg-brand-yellow"
  }
]

export default function ProductsPage() {
  return (
    <div className="bg-white dark:bg-brand-black min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-brand-red font-bold tracking-widest uppercase text-sm mb-4 block">Innovation Lab</span>
          <h1 className="text-4xl md:text-7xl font-bold font-heading mb-6 text-primary dark:text-white">
            Our Tools. <br/> Your Advantage.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We don't just build for clients; we build for the future. Explore the internal tools and products we are crafting to revolutionize the web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, i) => (
                <div key={i} className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                    <div className={`absolute top-0 right-0 px-4 py-2 text-xs font-bold text-white rounded-bl-xl ${product.status === 'Beta' ? 'bg-green-500' : product.status === 'Alpha' ? 'bg-purple-500' : 'bg-gray-500'}`}>
                        {product.status}
                    </div>
                    
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-white ${product.color}`}>
                        <product.icon className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-bold font-heading text-primary dark:text-white mb-2">{product.name}</h3>
                    <p className="text-sm font-bold text-brand-red mb-4">{product.tagline}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 min-h-[80px]">
                        {product.description}
                    </p>

                    <div className="space-y-4 mb-8">
                        {product.features.map((f, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <Code className="w-4 h-4 mr-2 text-primary dark:text-gray-300" />
                                {f}
                            </div>
                        ))}
                    </div>

                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                        Join Waitlist <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            ))}
        </div>

        <div className="mt-32 bg-primary dark:bg-white/5 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
            <div className="relative z-10">
                <h2 className="text-3xl font-bold font-heading text-white mb-6">Have an idea for a product?</h2>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                    We partner with visionaries to build SaaS products from scratch. Let's turn your idea into our next success story.
                </p>
                <Link href="/start-project?projectType=Custom">
                    <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 border-none">
                        Build With Us
                    </Button>
                </Link>
            </div>
        </div>

      </div>
    </div>
  )
}
