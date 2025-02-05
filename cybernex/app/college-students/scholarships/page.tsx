import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

interface Scholarship {
  name: string
  description: string
  amount: string
  deadline: string
  link: string
}

const scholarships: Scholarship[] = [
  {
    name: "CyberCorps: Scholarship for Service",
    description:
      "A U.S. government program providing scholarships for cybersecurity education in exchange for government service.",
    amount: "Full tuition + stipend",
    deadline: "Varies by institution",
    link: "https://www.sfs.opm.gov/",
  },
  {
    name: "(ISC)² Undergraduate Cybersecurity Scholarship",
    description: "Scholarships for undergraduate students pursuing a degree in cybersecurity or information assurance.",
    amount: "Up to $5,000",
    deadline: "March 15 (annually)",
    link: "https://www.iamcybersafe.org/s/undergraduate-scholarships",
  },
  {
    name: "SWSIS Scholarship for Women in Cybersecurity",
    description: "Scholarships to support women studying for careers in cybersecurity.",
    amount: "Up to $10,000",
    deadline: "February 1 (annually)",
    link: "https://cra.org/cra-wp/scholarships-and-awards/scholarships/swsis/",
  },
  {
    name: "Raytheon CCDC Scholarship",
    description: "Scholarships for students participating in the Collegiate Cyber Defense Competition (CCDC).",
    amount: "Varies",
    deadline: "Varies",
    link: "https://www.nationalccdc.org/index.php/competition/scholarships",
  },
  {
    name: "NSA Stokes Educational Scholarship Program",
    description:
      "A scholarship program for high school seniors planning to major in computer science or electrical/computer engineering.",
    amount: "Up to $30,000 per year",
    deadline: "October 31 (annually)",
    link: "https://www.intelligencecareers.gov/nsa/nsastudents.html",
  },
]

export default function ScholarshipsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/college-students"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to College Students
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Cybersecurity Scholarships</h1>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Explore these scholarship opportunities to support your cybersecurity education. Remember to check the official
        websites for the most up-to-date information on deadlines and application requirements.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {scholarships.map((scholarship, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{scholarship.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{scholarship.description}</p>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Amount:</strong> {scholarship.amount}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>Deadline:</strong> {scholarship.deadline}
            </p>
            <Link
              href={scholarship.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
            >
              Learn More <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Tips for Applying</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Start your application process early to meet all deadlines</li>
          <li>Carefully read and follow all application instructions</li>
          <li>Highlight your passion for cybersecurity in your application essays</li>
          <li>Showcase any relevant projects, internships, or extracurricular activities</li>
          <li>Seek strong letters of recommendation from professors or industry professionals</li>
          <li>Proofread all application materials thoroughly before submitting</li>
        </ul>
      </div>
    </div>
  )
}

