"use client"

import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { useState, Suspense } from "react"
import { Check, ArrowRight } from "lucide-react"

// Define a schema for the advanced project form
const projectFormSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Invalid email"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Project type required"),
  budget: z.string().optional(),
  description: z.string().min(10, "Please provide more details"),
})

type ProjectFormData = z.infer<typeof projectFormSchema>

function StartProjectContent() {
  const searchParams = useSearchParams()
  // Read plan details from URL. 
  // Ideally, we'd pass IDs and look them up, but for simplicity/demo we can read query params or just Plan Name.
  const planName = searchParams.get("plan")
  const planPrice = searchParams.get("price")
  // In a real app, you might look up features based on planName from a constant
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<ProjectFormData>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
        budget: planPrice || ""
    }
  })

  const onSubmit = async (data: ProjectFormData) => {
    setIsSubmitting(true)
    console.log("Project Inquiry:", { ...data, plan: planName, price: planPrice })
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Plan Details Sidebar - Only shows if a plan was selected */}
        {planName && (
             <div className="lg:col-span-1">
                <div className="bg-primary text-white p-8 rounded-2xl sticky top-24">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-brand-yellow mb-2">Selected Plan</h3>
                    <h2 className="text-3xl font-bold font-heading mb-4">{planName}</h2>
                    <div className="text-2xl font-bold mb-6">{planPrice}</div>
                    
                    <div className="space-y-4 mb-8">
                        <p className="text-sm text-gray-200">
                            You're taking the first step towards building something great. 
                            Fill out the form to kickstart your project with this plan.
                        </p>
                        <hr className="border-white/20" />
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center"><Check className="w-4 h-4 mr-2"/> Premium Support</li>
                            <li className="flex items-center"><Check className="w-4 h-4 mr-2"/> Dedicated PM</li>
                            <li className="flex items-center"><Check className="w-4 h-4 mr-2"/> Fast Turnaround</li>
                        </ul>
                    </div>
                </div>
             </div>
        )}

        {/* Main Form Area */}
        <div className={planName ? "lg:col-span-2" : "lg:col-span-3 max-w-3xl mx-auto"}>
            <div className="mb-8">
                <h1 className="text-4xl font-bold font-heading text-primary dark:text-white mb-4">
                    {planName ? "Finalize Your Request" : "Start Your Project"}
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                    Tell us a bit about what you want to build. We'll review it and get back to you with a formal proposal within 24 hours.
                </p>
            </div>

            {isSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold mb-4">Request Received!</h3>
                    <p>Thanks for entrusting us with your vision. Our team is already reviewing your details.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-1 dark:text-gray-200">Name</label>
                            <input {...register("name")} className="w-full p-3 rounded-lg border dark:bg-black/20 dark:border-white/10" placeholder="Your Name" />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 dark:text-gray-200">Email</label>
                            <input {...register("email")} className="w-full p-3 rounded-lg border dark:bg-black/20 dark:border-white/10" placeholder="you@company.com" />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>
                    </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-1 dark:text-gray-200">Company (Optional)</label>
                            <input {...register("company")} className="w-full p-3 rounded-lg border dark:bg-black/20 dark:border-white/10" placeholder="Company Ltd." />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 dark:text-gray-200">Budget Range</label>
                            <select {...register("budget")} className="w-full p-3 rounded-lg border dark:bg-black/20 dark:border-white/10">
                                <option value="">Select a range</option>
                                <option value="< $1k">&lt; $1,000</option>
                                <option value="$1k - $5k">$1,000 - $5,000</option>
                                <option value="$5k - $20k">$5,000 - $20,000</option>
                                <option value="$20k+">$20,000+</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-200">Project Type</label>
                        <select {...register("projectType")} className="w-full p-3 rounded-lg border dark:bg-black/20 dark:border-white/10">
                             <option value="Website">Marketing Website</option>
                             <option value="Ecommerce">E-commerce Store</option>
                             <option value="WebApp">Web Application</option>
                             <option value="MobileApp">Mobile App</option>
                             <option value="Custom">Custom Software</option>
                        </select>
                         {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-200">Project Details</label>
                        <textarea {...register("description")} rows={5} className="w-full p-3 rounded-lg border dark:bg-black/20 dark:border-white/10" placeholder="Describe your goals, features, and timeline..." />
                        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Project Request"}
                    </Button>
                </form>
            )}
        </div>
      </div>
    </div>
  )
}

export default function StartProjectPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-brand-black pt-20">
             <Suspense fallback={<div className="text-center p-20">Loading...</div>}>
                <StartProjectContent />
             </Suspense>
        </div>
    )
}
