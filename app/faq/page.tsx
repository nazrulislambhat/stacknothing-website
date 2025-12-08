import Link from "next/link"

const faqs = [
  {
    question: "What services does StackNothing offer?",
    answer: "We offer a wide range of digital solutions, including web development, custom software development, UI/UX design, e-commerce solutions, CMS development, API integration, and digital strategy consulting."
  },
  {
    question: "What industries does StackNothing serve?",
    answer: "We serve clients across various industries, including technology, finance, healthcare, education, retail, and more. Our flexible approach allows us to tailor solutions to meet the specific needs of each industry."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "The timeline for a project varies depending on its complexity, scope, and requirements. After our initial consultation, we provide a detailed project timeline."
  },
  {
    question: "What is StackNothing’s technology stack?",
    answer: "We are technology-agnostic but our core expertise includes React, Next.js, Drupal, WordPress, Tailwind, and various API integrations."
  },
  {
    question: "Does StackNothing offer post-launch support?",
    answer: "Yes, we offer ongoing support and maintenance services to ensure your solution remains up-to-date, secure, and optimized for performance."
  }
]

export default function FAQPage() {
  return (
    <div className="bg-gray-50 dark:bg-secondary/30 min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-12 text-center text-primary dark:text-white">Frequently Asked Questions</h1>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-brand-black p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                <h3 className="text-xl font-bold font-heading mb-3 text-primary dark:text-white">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">Didn't find what you were looking for?</p>
            <Link href="/contact" className="text-primary font-semibold hover:underline">
              Contact our support team
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
