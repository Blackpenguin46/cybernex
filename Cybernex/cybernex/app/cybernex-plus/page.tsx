import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function CyberNexPlusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-400">
            CyberNex Premium Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Elevate your cybersecurity journey with our premium services designed to provide personalized support and
            accelerate your career growth.
          </p>
        </header>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-400">
            What's Included in Our Premium Plans
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "1-on-1 meeting to discuss your goals, plans, and interests",
              "Tailored cybersecurity plan for your individual needs",
              "Custom labs to practice and hone your skills",
              "Access to weekly town halls with industry experts",
              "Bi-weekly meetings with industry professionals",
              "Access to exclusive courses taught by industry leaders",
              "1-on-1 mentoring with experienced cybersecurity professionals",
              "Premium Discord community access",
            ].map((feature, index) => (
              <li
                key={index}
                className="flex items-start bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-gold transition-all"
              >
                <CheckCircle className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-400">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CyberNex+ Plan */}
            <div className="bg-gray-800 p-8 rounded-lg border-2 border-transparent hover:border-gold transition-all shadow-lg hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-gold">CyberNex+</h3>
              <p className="text-4xl font-bold mb-6 text-white">
                $10<span className="text-xl text-gray-300">/month</span>
              </p>
              <ul className="mb-8 space-y-3 text-gray-300">
                <li>1-on-1 meeting to discuss goals, plans, and interests</li>
                <li>Tailored cybersecurity plan</li>
                <li>Access to weekly town halls</li>
                <li>Access to exclusive courses</li>
              </ul>
              <Link
                href="https://buy.stripe.com/7sIbJP95iaHk1GgcMM"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gradient-to-r from-gold to-yellow-500 text-gray-900 px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
              >
                Get Started with CyberNex+
              </Link>
            </div>

            {/* CyberNex Pro Plan */}
            <div className="bg-gray-800 p-8 rounded-lg border-2 border-transparent hover:border-gold transition-all shadow-lg hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-gold">CyberNex Pro</h3>
              <p className="text-4xl font-bold mb-6 text-white">
                $20<span className="text-xl text-gray-300">/month</span>
              </p>
              <ul className="mb-8 space-y-3 text-gray-300">
                <li>Everything in CyberNex+, plus:</li>
                <li>Custom labs for hands-on practice</li>
                <li>Bi-weekly meetings with industry professionals</li>
                <li>1-on-1 mentoring with industry professionals</li>
              </ul>
              <Link
                href="https://buy.stripe.com/5kA9BH5T64iWbgQ289"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gradient-to-r from-gold to-yellow-500 text-gray-900 px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
              >
                Get Started with CyberNex Pro
              </Link>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-400">
            Ready to Take Your Cybersecurity Career to the Next Level?
          </h2>
          <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
            Join CyberNex Premium today and unlock a world of exclusive content, personalized guidance, and networking
            opportunities to accelerate your cybersecurity journey.
          </p>
        </section>

        {/* Back to Home Link */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center text-gold hover:text-yellow-400 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

