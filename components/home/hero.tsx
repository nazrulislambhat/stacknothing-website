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
      className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16 relative overflow-hidden bg-[#0a1f13]"
    >
        {/* Background Grid/Globe Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-900/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Title */}
        <div className="text-center mb-12">
            <h1 ref={titleRef} className="text-5xl md:text-8xl font-black font-heading text-white tracking-wider leading-[0.9] uppercase mb-4 drop-shadow-2xl">
                BUILDING <br/> INTELLIGENT <br/> REALITIES
            </h1>
            <p ref={subTitleRef} className="text-gray-400 max-w-xl mx-auto text-lg font-light tracking-wide">
                Collect, trade, and mint exclusive digital experiences in the shadows of the blockchain.
            </p>
        </div>

        {/* Center Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
            
            {/* Left Card - Glass */}
            <div className="hidden md:block w-64 h-64 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 relative group hover:bg-white/10 transition-colors">
                 <div className="absolute top-4 left-4 text-green-400 text-xs font-bold uppercase tracking-widest">Live Status</div>
                 <div className="absolute bottom-6 left-6">
                    <div className="text-4xl font-bold text-white mb-1">98%</div>
                    <div className="text-gray-400 text-sm">System Uptime</div>
                 </div>
            </div>

            {/* Center Character */}
            <div className="relative w-[400px] h-[500px] md:scale-125 z-20 flex items-center justify-center">
                 {/* CSS 3D Placeholder Orb */}
                 <div className="relative w-64 h-64">
                    <div className="absolute inset-0 bg-green-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute inset-4 bg-gradient-to-tr from-green-400 to-emerald-600 rounded-full shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.5)] animate-float flex items-center justify-center border-4 border-green-300/20">
                        <span className="text-6xl filter drop-shadow-lg">🤖</span>
                    </div>
                 </div>
                 
                 <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full flex justify-center">
                    <Link href="/products">
                        <Button className="bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold h-16 rounded-full px-10 text-xl shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-all hover:scale-105">
                            Explore Products
                        </Button>
                    </Link>
                 </div>
            </div>

            {/* Right Card - Glass */}
            <div className="hidden md:block w-64 h-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 space-y-8 text-right">
                <div>
                    <div className="text-4xl font-bold text-white font-heading">500+</div>
                    <div className="text-gray-400 text-sm">Unique Assets</div>
                </div>
                <div>
                     <div className="text-4xl font-bold text-white font-heading">24H</div>
                     <div className="text-gray-400 text-sm">Deployment Time</div>
                </div>
            </div>

        </div>

      </div>
    </section>
  )
}
