import { Code, ShoppingCart, Smartphone, Globe, Layers, Database, Layout, BrainCircuit, Wrench, FileCode, AppWindow } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Layout,
    title: "Web Development",
    description: "From dynamic websites to complex web applications, we use the latest technologies like React, Next.js to bring your vision to life.",
    link: "/start-project"
  },
  {
    icon: AppWindow,
    title: "WordPress Development",
    description: "Custom themes, plugin development, and high-performance WordPress solutions tailored to your brand.",
    link: "/services/wordpress"
  },
  {
    icon: FileCode,
    title: "Drupal Development",
    description: "Enterprise-grade Drupal development. We build scalable, secure, and complex content management systems.",
    link: "/services/drupal"
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Keep your site secure and up-to-date. We offer monthly retainer packages for peace of mind.",
    link: "/services/maintenance"
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description: "Integrate LLMs, Chatbots, and intelligent workflows into your business. We build smart apps that learn.",
    link: "/products"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Full-stack web applications built with Next.js, React, and Node.js. Scalable, secure, and fast.",
    link: "/start-project?projectType=E-commerce"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "We design and develop custom software solutions tailored to your specific business needs.",
    link: "/start-project?projectType=Mobile%20App"
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description: "Navigating the digital landscape can be complex. Our consulting services help you make informed decisions that drive growth.",
    link: "/contact"
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-[#F5F3EF] dark:bg-black min-h-screen py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <span className="text-brand-red font-bold tracking-widest uppercase text-sm mb-4 block">What We Do</span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 text-black dark:text-white">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            At StackNothing, we specialize in crafting tailored digital solutions that align with your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-white/5 p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-red/20 group flex flex-col items-start"
            >
              <div className="w-16 h-16 bg-gray-100 dark:bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-red group-hover:text-white transition-colors">
                 <service.icon className="w-8 h-8 text-black dark:text-white group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-black dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              
              <Link href={service.link} className="w-full mt-auto">
                 <Button variant="outline" className="w-full rounded-full group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black border-gray-200 dark:border-white/20">
                    Learn More
                 </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
