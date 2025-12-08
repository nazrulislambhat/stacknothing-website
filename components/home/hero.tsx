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
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <h1 ref={titleRef} className="hero-text text-6xl md:text-9xl font-bold mb-6 font-heading tracking-tight">
            BUILDING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-yellow to-brand-red bg-300% animate-gradient">
                INTELLIGENT
            </span> <br />
            REALITIES.
            </h1>
            <p ref={subTitleRef} className="hero-text text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            We merge unconventional creativity with cutting-edge AI to craft digital experiences that don't just exist—they think, adapt, and outperform.
            </p>
            
            <div ref={buttonsRef} className="hero-btn flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/start-project">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full">
                Start AI Project
                </Button>
            </Link>
            <Link href="/products">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-white/20 hover:bg-white/10 text-white">
                View Our Products
                </Button>
            </Link>
            </div>
        </div>
      </div>
    </section>
  )
}
