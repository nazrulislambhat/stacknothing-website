"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { Users, Lightbulb, Rocket, Target } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const container = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    // Parallax Header
    gsap.to(".about-header-bg", {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: ".about-header",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })

    // Reveal Text
    const lines = gsap.utils.toArray(".reveal-line")
    lines.forEach((line: any) => {
        gsap.from(line, {
            opacity: 0,
            y: 30,
            duration: 1,
            scrollTrigger: {
                trigger: line,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        })
    })

    // Value Items Stagger
    gsap.from(".value-item", {
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: ".value-item", // Trigger on the first item or the container
            start: "top 85%"
        }
    })

  }, { scope: container })

  return (
    <div ref={container} className="bg-white dark:bg-brand-black min-h-screen">
      
      {/* Creative Header */}
      <div className="about-header relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
         <div className="about-header-bg absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
         <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl md:text-8xl font-bold font-heading text-white mb-6">Unconventional.</h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
                We don't just build websites. We start from nothing and create the extraordinary.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        
        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-32">
            <h2 className="reveal-line text-2xl font-bold text-brand-red mb-4 uppercase tracking-widest">Our Story</h2>
            <p className="reveal-line text-2xl md:text-4xl font-heading font-bold text-primary dark:text-white leading-tight mb-8">
                StackNothing was born from a rebellion against the rigid. We believe constraints are meant to be broken.
            </p>
            <div className="reveal-line prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
                <p>
                    Founded on the belief that the best solutions often come from unconventional thinking, we decided to strip away the unnecessary. 
                    Most agencies are tied to a stack. We are tied to the solution. 
                    Whether it's the raw power of Next.js or the robustness of Drupal, we wield the tool that fits the mission.
                </p>
            </div>
        </div>

        {/* Values Section */}
        <div className="mb-32">
            <h2 className="text-sm font-bold text-brand-red mb-12 uppercase tracking-widest">Our Core Values</h2>
            
            <div className="flex flex-col border-t border-gray-200 dark:border-white/10">
                {[
                    { id: "01", title: "Innovation", desc: "We don't just follow trends; we set them by integrating the latest AI and web tech." },
                    { id: "02", title: "Transparency", desc: "No hidden costs. No jargon. Just clear communication and honest work." },
                    { id: "03", title: "Speed", desc: "We ship fast without breaking things. Efficiency is baked into our process." },
                    { id: "04", title: "Quality", desc: "Pixel-perfect design met with robust, clean code. Zero compromise." }
                ].map((val, i) => (
                    <div key={i} className="value-item group flex flex-col md:flex-row items-baseline py-10 border-b border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <span className="text-xl font-mono text-brand-red w-24 mb-4 md:mb-0">{val.id}</span>
                        <div className="flex-1">
                            <h3 className="text-4xl md:text-6xl font-bold font-heading text-primary dark:text-white mb-4 group-hover:translate-x-4 transition-transform duration-300">
                                {val.title}
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                                {val.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

         {/* Mission Statement */}
         <div className="bg-primary rounded-3xl p-12 md:p-24 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-secondary/30" />
             <div className="relative z-10 max-w-3xl mx-auto">
                 <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8">Our Mission</h2>
                 <p className="text-xl md:text-2xl leading-relaxed font-light opacity-90">
                     "To provide tailored web and software solutions that meet our clients’ unique needs, working across various technology stacks without being confined to just one."
                 </p>
             </div>
         </div>

      </div>
    </div>
  )
}
