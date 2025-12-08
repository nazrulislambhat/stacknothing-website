import { Button } from "@/components/ui/button"
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const jobs = [
  {
    title: "Senior React Developer",
    location: "Remote / Bangalore",
    type: "Full-time",
    description: "We are looking for an experienced React developer to lead our frontend team. Must have strong experience with Next.js and Tailwind.",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    description: "Create stunning, clear, and intuitive interfaces for our clients. Experience with Figma and modern design systems is a must.",
  },
  {
    title: "Drupal Architect",
    location: "Srinagar",
    type: "Full-time",
    description: "Architect and build complex Drupal solutions for enterprise clients. Deep knowledge of Drupal 9/10 module development required.",
  }
]

export default function CareersPage() {
  return (
    <div className="bg-gray-50 dark:bg-secondary/20 min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-primary dark:text-white">Join Our Team</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            At StackNothing, we're always looking for passionate people to help us build the future of the web.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {jobs.map((job, index) => (
            <div 
                key={index} 
                className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-primary/20 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div>
                <h3 className="text-2xl font-bold font-heading text-primary dark:text-white mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {job.location}</span>
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {job.type}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 max-w-xl">
                    {job.description}
                </p>
              </div>
              <Link href="/contact?subject=Careers">
                <Button variant="outline" className="shrink-0">
                    Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          ))}

          <div className="bg-primary text-white p-8 rounded-2xl text-center mt-12">
            <h3 className="text-2xl font-bold font-heading mb-4">Don't see your role?</h3>
            <p className="mb-6 opacity-90">
                We're always interested in meeting talented individuals. Send us your resume and let's talk.
            </p>
            <Link href="/contact">
                <Button variant="secondary">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
