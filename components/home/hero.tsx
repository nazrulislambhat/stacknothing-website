'use client';

import * as React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Important: Register GSAP plugins if needed, but core gsap is often enough for simple reveals
// If using ScrollTrigger, need to register it.
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const subTitleRef = React.useRef<HTMLParagraphElement>(null);
  const buttonsRef = React.useRef<HTMLDivElement>(null);

  // Use useGSAP hook for safe React integration
  // Note: @gsap/react might strictly require a paid license for some features but useGSAP is free in recent versions or standard useEffect
  // I will use useEffect + gsap context for broad compatibility if @gsap/react isn't perfectly set up (I installed gsap, but maybe not @gsap/react specifically? I installed 'gsap'. @gsap/react might be missing. I'll stick to useEffect for safety)

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        skewY: 7,
      })
        .from(
          subTitleRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.8'
        )
        .from(
          buttonsRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.6'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16 relative overflow-hidden bg-black"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h1
            ref={titleRef}
            className="text-5xl md:text-8xl font-black font-heading text-white tracking-wider leading-[0.9] uppercase mb-4 drop-shadow-2xl"
          >
            BUILDING <br /> INTELLIGENT <br /> REALITIES
          </h1>
          <p
            ref={subTitleRef}
            className="text-gray-400 max-w-xl mx-auto text-lg font-light tracking-wide"
          >
            Collect, trade, and mint exclusive digital experiences in the
            shadows of the blockchain.
          </p>
        </div>

        {/* Center Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
          {/* Left Card - Glass */}
          <div className="hidden md:block w-64 h-64 bg-primary backdrop-blur-md border border-white/10 rounded-3xl p-6 relative group hover:bg-white/10 transition-colors">
            <div className="absolute top-4 left-4 text-green-400 text-xs font-bold uppercase tracking-widest">
              Live Status
            </div>
            <div className="absolute bottom-6 left-6">
              <div className="text-4xl font-bold text-white mb-1">98%</div>
              <div className="text-gray-400 text-sm">System Uptime</div>
            </div>
          </div>

          {/* Right Card - Glass */}
          <div className="hidden md:block w-64 h-auto bg-yellow backdrop-blur-md border border-white/10 rounded-3xl p-8 space-y-8 text-right">
            <div>
              <div className="text-4xl font-bold text-white font-heading">
                500+
              </div>
              <div className="text-gray-400 text-sm">Unique Assets</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white font-heading">
                24H
              </div>
              <div className="text-gray-400 text-sm">Deployment Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
