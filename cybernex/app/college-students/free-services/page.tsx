import Link from "next/link"
import { ArrowLeft, ExternalLink, Gift } from "lucide-react"

interface FreeService {
  name: string
  description: string
  category: string
  link: string
}

const freeServices: FreeService[] = [
  {
    name: "GitHub Student Developer Pack",
    description: "Access to developer tools, cloud services, and learning resources.",
    category: "Development Tools",
    link: "https://education.github.com/pack",
  },
  {
    name: "AWS Educate",
    description: "Free access to AWS services and learning content for cloud computing.",
    category: "Cloud Services",
    link: "https://aws.amazon.com/education/awseducate/",
  },
  {
    name: "Microsoft Azure for Students",
    description: "Free Azure credits and developer tools for students.",
    category: "Cloud Services",
    link: "https://azure.microsoft.com/en-us/free/students/",
  },
  {
    name: "JetBrains for Students",
    description: "Free access to professional developer tools and IDEs.",
    category: "Development Tools",
    link: "https://www.jetbrains.com/community/education/#students",
  },
  {
    name: "Hack The Box Student",
    description: "Free access to cybersecurity training labs and challenges.",
    category: "Cybersecurity Training",
    link: "https://www.hackthebox.eu/students",
  },
  {
    name: "TryHackMe Student",
    description: "Free cybersecurity learning paths and rooms for students.",
    category: "Cybersecurity Training",
    link: "https://tryhackme.com/students",
  },
  {
    name: "Coursera for Students",
    description: "Free access to online courses from top universities.",
    category: "Online Learning",
    link: "https://www.coursera.org/for-university-and-college-students",
  },
  {
    name: "VMware Academic Program",
    description: "Free VMware software and learning resources for students.",
    category: "Virtualization",
    link: "https://www.vmware.com/company/academic-program.html",
  },
  {
    name: "Autodesk Education",
    description: "Free access to Autodesk software for students and educators.",
    category: "Design Tools",
    link: "https://www.autodesk.com/education/edu-software/overview",
  },
]

export default function FreeServicesPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/college-students"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to College Students
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Free Services for College Students</h1>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Take advantage of these free services and resources available to college students. These tools can help you
        enhance your skills, build projects, and prepare for your cybersecurity career.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {freeServices.map((service, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <Gift className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{service.name}</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{service.description}</p>
            <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">{service.category}</p>
            <Link
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
            >
              Get Access <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          How to Make the Most of These Services
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Sign up using your official college email address for verification</li>
          <li>Explore all features and resources offered by each platform</li>
          <li>Use these tools to work on personal projects and build your portfolio</li>
          <li>Participate in online communities associated with these platforms</li>
          <li>Keep track of expiration dates and renew your student status when necessary</li>
          <li>Share your knowledge and help fellow students make use of these resources</li>
        </ul>
      </div>
    </div>
  )
}

