"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Simulate API call or EmailJS
    // In production: await emailjs.send(...) or await fetch('/api/send', ...)
    console.log("Form Data:", data)
    
    await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate network delay

    setIsSubmitting(false)
    setIsSuccess(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <div className="bg-white dark:bg-brand-black p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-white/10">
      <h3 className="text-2xl font-bold font-heading mb-6 text-primary dark:text-white">Send us a Message</h3>
      
      {isSuccess ? (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">
          Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-white/5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-white/5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Phone (Optional)
          </label>
          <input
            {...register("phone")}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-white/5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="+1 234 567 8900"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-white/5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Tell us about your project..."
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <Button 
            type="submit" 
            variant="primary" 
            className="w-full"
            disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  )
}
