"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { Code, ShoppingCart, Smartphone, Globe } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Dynamic websites and complex web apps using React, Next.js, and Drupal."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Robust, scalable platforms providing seamless shopping experiences."
  },
  {
    icon: Smartphone,
    title: "Custom Software",
    description: "Tailored software solutions designed to meet specific business needs."
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description: "Helping businesses adapt to the digital age with strategic guidance."
  }
]

export function ServicesSummary() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const cards = gsap.utils.toArray(".service-card")
    gsap.from(cards, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 bg-gray-50 dark:bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <h2 className="text-sm font-bold tracking-widest text-brand-yellow uppercase mb-2">Our Services</h2>
                <h3 className="text-3xl md:text-5xl font-bold font-heading text-primary dark:text-white">What We Do</h3>
            </div>
            {/* Optional link to all services */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
                key={index} 
                className="service-card p-8 bg-white dark:bg-white/5 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 dark:border-white/10"
            >
              <service.icon className="w-12 h-12 text-brand-red mb-6" />
              <h4 className="text-xl font-bold font-heading mb-4 text-primary dark:text-white">{service.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
