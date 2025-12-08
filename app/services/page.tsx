import { Code, ShoppingCart, Smartphone, Globe, Layers, Database, Layout } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "From dynamic websites to complex web applications, we use the latest technologies like React, Next.js, and Drupal to bring your vision to life.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "We build robust, scalable e-commerce platforms that provide seamless shopping experiences.",
  },
  {
    icon: Smartphone,
    title: "Custom Software",
    description: "We design and develop custom software solutions tailored to your specific business needs.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Our design philosophy revolves around creating user-centric interfaces that are not only visually appealing but also intuitive and engaging.",
  },
  {
    icon: Layers,
    title: "CMS Development",
    description: "Whether you need a Drupal or WordPress-based solution, we have the expertise to build powerful content management systems.",
  },
  {
    icon: Database,
    title: "API Integration",
    description: "We ensure your applications communicate effectively with each other through reliable and efficient API integrations.",
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description: "Navigating the digital landscape can be complex. Our consulting services help you make informed decisions that drive growth.",
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 dark:bg-secondary min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-primary dark:text-white">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            At StackNothing, we specialize in crafting tailored digital solutions that align with your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              <service.icon className="w-12 h-12 text-brand-red mb-6" />
              <h3 className="text-2xl font-bold font-heading mb-4 text-primary dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
