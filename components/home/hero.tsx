"use client"

import * as React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Important: Register GSAP plugins if needed, but core gsap is often enough for simple reveals
// If using ScrollTrigger, need to register it.
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const titleRef = React.useRef<HTMLHeadingElement>(null)
  const subTitleRef = React.useRef<HTMLParagraphElement>(null)
  const buttonsRef = React.useRef<HTMLDivElement>(null)

  // Use useGSAP hook for safe React integration
  // Note: @gsap/react might strictly require a paid license for some features but useGSAP is free in recent versions or standard useEffect
  // I will use useEffect + gsap context for broad compatibility if @gsap/react isn't perfectly set up (I installed gsap, but maybe not @gsap/react specifically? I installed 'gsap'. @gsap/react might be missing. I'll stick to useEffect for safety)
  
  React.useEffect(() => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
        
        tl.from(titleRef.current, {
            y: 100,
            opacity: 0,
            duration: 1.2,
            skewY: 7,
        })
        .from(subTitleRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.8,
        }, "-=0.8")
        .from(buttonsRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.8,
        }, "-=0.6")

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden bg-white dark:bg-brand-black"
    >
        {/* Background elements if any */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100/50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 text-center">
        <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-8 leading-[1.1] tracking-tight bg-gradient-to-r from-primary via-secondary to-brand-red bg-clip-text text-transparent pb-4"
        >
          We Build <br /> Nothing Into Anything.
        </h1>
        
        <p 
            ref={subTitleRef}
            className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          StackNothing is a versatile web development agency. We take your raw ideas and minimal concepts—starting from "nothing"—and build them into powerful, production-ready digital realities. 
          React, Next.js, Drupal, and beyond.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" variant="primary" className="w-full sm:w-auto text-lg px-8">
              Start a Project
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8">
              View Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
