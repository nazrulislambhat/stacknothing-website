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

    // Value Cards Stagger
    gsap.from(".value-card", {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".values-grid",
            start: "top 80%"
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
            <h2 className="text-center text-4xl font-bold font-heading text-primary dark:text-white mb-16">Our Core Values</h2>
            <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: Lightbulb, title: "Innovation", desc: "Pushing boundaries effectively." },
                    { icon: Target, title: "Flexibility", desc: "Adapting to any tech stack." },
                    { icon: Users, title: "Collaboration", desc: "Working as one with you." },
                    { icon: Rocket, title: "Impact", desc: "Delivering real results." }
                ].map((val, i) => (
                    <div key={i} className="value-card p-8 bg-gray-50 dark:bg-white/5 rounded-2xl border border-transparent hover:border-brand-red transition-all group">
                        <val.icon className="w-10 h-10 text-brand-red mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-3">{val.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{val.desc}</p>
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
