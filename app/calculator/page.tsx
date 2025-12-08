"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, ArrowLeft, RefreshCw } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const steps = [
  {
    id: "type",
    title: "What are you building?",
    options: [
      { id: "landing", label: "Landing Page", basePrice: 500, time: 40 },
      { id: "corporate", label: "Corporate Site", basePrice: 1500, time: 100 },
      { id: "ecommerce", label: "E-commerce", basePrice: 3000, time: 200 },
      { id: "webapp", label: "Web Application", basePrice: 5000, time: 400 },
    ]
  },
  {
    id: "design",
    title: "Design Complexity",
    options: [
      { id: "template", label: "Template Based", multiplier: 1.0, extraPrice: 0 },
      { id: "custom", label: "Custom Design", multiplier: 1.5, extraPrice: 1000 },
      { id: "premium", label: "Premium/Animated", multiplier: 2.0, extraPrice: 2500 },
    ]
  },
  {
    id: "features",
    title: "Key Features (Select all that apply)",
    multiSelect: true,
    options: [
      { id: "cms", label: "CMS Integration", price: 500, time: 30 },
      { id: "seo", label: "Advanced SEO", price: 300, time: 20 },
      { id: "auth", label: "User Auth & Profiles", price: 1000, time: 80 },
      { id: "payment", label: "Payments", price: 800, time: 50 },
      { id: "api", label: "3rd Party API", price: 1200, time: 80 },
    ]
  }
]

export default function CalculatorPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selections, setSelections] = useState<any>({
    type: null,
    design: null, 
    features: []
  })

  // Conversion rate (mock)
  const INR_RATE = 85

  const handleSelect = (option: any) => {
    const step = steps[currentStep]
    if (step.multiSelect) {
      const current = selections[step.id] || []
      const exists = current.find((i: any) => i.id === option.id)
      let newSelection
      if (exists) {
        newSelection = current.filter((i: any) => i.id !== option.id)
      } else {
        newSelection = [...current, option]
      }
      setSelections({ ...selections, [step.id]: newSelection })
    } else {
      setSelections({ ...selections, [step.id]: option })
      // Auto-advance for single select
      setTimeout(() => {
          if (currentStep < steps.length) {
              setCurrentStep(prev => prev + 1)
          }
      }, 300)
    }
  }

  const calculateTotal = () => {
    let price = 0
    let hours = 0

    // Base
    if (selections.type) {
        price += selections.type.basePrice
        hours += selections.type.time
    }

    // Design Multiplier
    if (selections.design) {
        price = price * selections.design.multiplier
        price += selections.design.extraPrice
    }

    // Features
    if (selections.features) {
        selections.features.forEach((f: any) => {
            price += f.price
            hours += f.time
        })
    }

    return { priceUSD: Math.round(price), priceINR: Math.round(price * INR_RATE), hours }
  }

  const reset = () => {
      setSelections({ type: null, design: null, features: [] })
      setCurrentStep(0)
  }

  const isComplete = currentStep === steps.length
  const total = calculateTotal()

  return (
    <div className="bg-white dark:bg-brand-black min-h-screen py-20 px-6">
       <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold font-heading text-primary dark:text-white mb-4">Project Estimator</h1>
            <p className="text-gray-600 dark:text-gray-300">Get a rough estimate of time and cost for your project.</p>
          </div>

          <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 border border-gray-200 dark:border-white/10 shadow-xl">
             
             {!isComplete ? (
                 <>
                    <div className="mb-8 flex justify-between items-center">
                        <span className="text-sm font-bold tracking-widest uppercase text-gray-500">Step {currentStep + 1} of {steps.length}</span>
                        {currentStep > 0 && (
                            <button onClick={() => setCurrentStep(currentStep - 1)} className="text-sm text-gray-500 hover:text-primary flex items-center">
                                <ArrowLeft className="w-4 h-4 mr-1"/> Back
                            </button>
                        )}
                    </div>

                    <h2 className="text-2xl font-bold mb-6 dark:text-white">{steps[currentStep].title}</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {steps[currentStep].options.map((option) => {
                             const step = steps[currentStep]
                             let isSelected = false
                             if (step.multiSelect) {
                                isSelected = selections[step.id]?.find((i: any) => i.id === option.id)
                             } else {
                                isSelected = selections[step.id]?.id === option.id
                             }

                             return (
                                <button
                                    key={option.id}
                                    onClick={() => handleSelect(option)}
                                    className={cn(
                                        "p-6 rounded-xl border-2 text-left transition-all",
                                        isSelected 
                                            ? "border-primary bg-primary/5 dark:bg-primary/20" 
                                            : "border-gray-200 dark:border-white/10 hover:border-primary/50"
                                    )}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className={cn("font-bold text-lg", isSelected ? "text-primary dark:text-white" : "text-gray-700 dark:text-gray-300")}>{option.label}</span>
                                        {isSelected && <Check className="w-5 h-5 text-primary" />}
                                    </div>
                                    {/* Optional description or details could go here */}
                                </button>
                             )
                        })}
                    </div>

                    <div className="flex justify-end">
                         {steps[currentStep].multiSelect ? (
                             <Button onClick={() => setCurrentStep(prev => prev + 1)}>Next Step <ArrowRight className="ml-2 w-4 h-4"/></Button>
                         ) : (
                             // Single select auto-advances, but we might want a placeholder or disabled button if nothing selected
                             null
                         )}
                    </div>
                 </>
             ) : (
                 <div className="text-center py-8">
                     <h2 className="text-3xl font-bold text-primary dark:text-white mb-8">Estimated Project Cost</h2>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                         <div className="p-6 bg-white dark:bg-black/20 rounded-2xl border border-gray-200 dark:border-white/10">
                             <div className="text-gray-500 mb-2 font-medium">Approximate Cost</div>
                             <div className="text-4xl font-bold text-brand-red mb-2">${total.priceUSD.toLocaleString()}</div>
                             <div className="text-sm text-gray-400">~ ₹{total.priceINR.toLocaleString()}</div>
                         </div>
                         <div className="p-6 bg-white dark:bg-black/20 rounded-2xl border border-gray-200 dark:border-white/10">
                             <div className="text-gray-500 mb-2 font-medium">Estimated Timeline</div>
                             <div className="text-4xl font-bold text-primary dark:text-white mb-2">{Math.ceil(total.hours / 40)} Weeks</div>
                             <div className="text-sm text-gray-400">~ {total.hours} Hours</div>
                         </div>
                     </div>

                     <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto">
                        * This is a rough estimate based on standard requirements. Every project is unique. Let's discuss your specific needs.
                     </p>
                     
                     <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href={`/start-project?plan=Custom Estimate&price=$${total.priceUSD}`}>
                             <Button size="lg" className="w-full md:w-auto">Start This Project</Button>
                        </Link>
                        <Button variant="outline" onClick={reset} className="w-full md:w-auto">
                            <RefreshCw className="mr-2 w-4 h-4"/> Start Over
                        </Button>
                     </div>
                 </div>
             )}
          </div>
       </div>
    </div>
  )
}
