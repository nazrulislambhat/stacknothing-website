"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

export function AboutSummary() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-4">About Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading mb-8 text-primary dark:text-white">
            We embrace the power of innovation and flexibility. Nothing is off-limits.
          </h3>
          <p ref={textRef} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            StackNothing was born out of a desire to break free from the constraints of traditional development practices. 
            Our name symbolizes our ability to start with nothing and build something extraordinary. 
            We focus on minimalism, flexibility, and delivering impactful, user-centric solutions.
          </p>
          <Link href="/about">
            <Button variant="outline">Learn More About Us</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
