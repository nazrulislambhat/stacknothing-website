import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-gray-50 dark:bg-secondary/20 min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-primary dark:text-white">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-brand-black p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                <h3 className="text-2xl font-bold font-heading mb-6 text-primary dark:text-white">Contact Information</h3>
                
                <div className="space-y-6">
                    <div className="flex items-start">
                        <Mail className="w-6 h-6 text-brand-red mt-1 mr-4" />
                        <div>
                            <p className="font-semibold dark:text-white">Email</p>
                            <a href="mailto:info@stacknothing.com" className="text-gray-600 dark:text-gray-300 hover:text-primary">info@stacknothing.com</a>
                        </div>
                    </div>
                    
                    <div className="flex items-start">
                        <Phone className="w-6 h-6 text-brand-red mt-1 mr-4" />
                        <div>
                            <p className="font-semibold dark:text-white">Phone</p>
                            <p className="text-gray-600 dark:text-gray-300">+91-XXXXXXXXXX</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <MapPin className="w-6 h-6 text-brand-red mt-1 mr-4" />
                        <div>
                            <p className="font-semibold dark:text-white">Bangalore Office</p>
                            <p className="text-gray-600 dark:text-gray-300">
                                123, Tech Park Road, Whitefield<br />
                                Bangalore, Karnataka, India 560066
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <MapPin className="w-6 h-6 text-brand-red mt-1 mr-4" />
                        <div>
                            <p className="font-semibold dark:text-white">Srinagar Office</p>
                            <p className="text-gray-600 dark:text-gray-300">
                                45, Green Valley Lane, Rajbagh<br />
                                Srinagar, Jammu & Kashmir, India 190008
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
