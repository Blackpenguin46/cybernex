import Link from 'next/link'
import { Book, Route, Video, MessageCircle, Lightbulb, FileText, ExternalLink } from 'lucide-react'

export default function LearningNexus() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Learning Nexus</h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Explore our comprehensive collection of cybersecurity learning resources, from structured roadmaps to cutting-edge research publications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/learning-resources/roadmaps" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <Route className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Learning Roadmaps</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Structured paths to guide your cybersecurity learning journey</p>
        </Link>
        
        <Link href="/learning-resources/courses" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <Book className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Online Courses</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Curated list of free and paid cybersecurity courses from top platforms</p>
        </Link>
        
        <Link href="/learning-resources/books" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <Book className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Books</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Explore recommended cybersecurity books</p>
        </Link>
        
        <Link href="/learning-resources/content-creators" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <Video className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Content Creators</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Top YouTube channels, podcasts, and blogs in the cybersecurity field</p>
        </Link>
        
        <Link href="/learning-resources/communities" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <MessageCircle className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Learning Communities</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Join forums and Discord channels for discussions and networking</p>
        </Link>
        
        <Link href="/learning-resources/tools" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <Lightbulb className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Learning Tools</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Interactive platforms and tools to enhance your cybersecurity skills</p>
        </Link>

        <Link href="/learning-resources/research-publications" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Research Publications</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Access academic publications and research in cybersecurity</p>
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Featured Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <a href="https://www.cybrary.it/" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Cybrary</h3>
            <p className="text-gray-600 dark:text-gray-400">Free and premium cybersecurity courses</p>
          </a>
          <a href="https://www.hackthebox.eu/" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Hack The Box</h3>
            <p className="text-gray-600 dark:text-gray-400">Hands-on cybersecurity training platform</p>
          </a>
          <a href="https://www.sans.org/cyber-security-courses/" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">SANS Institute</h3>
            <p className="text-gray-600 dark:text-gray-400">Professional cybersecurity training and certifications</p>
          </a>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Open Source Learning</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <a href="https://github.com/The-Art-of-Hacking/h4cker" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">The Art of Hacking</h3>
            <p className="text-gray-600 dark:text-gray-400">GitHub repo with resources for building hacking skills</p>
          </a>
          <a href="https://github.com/swisskyrepo/PayloadsAllTheThings" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">PayloadsAllTheThings</h3>
            <p className="text-gray-600 dark:text-gray-400">A list of useful payloads and bypass for Web Application Security</p>
          </a>
          <a href="https://github.com/OWASP/CheatSheetSeries" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">OWASP Cheat Sheet Series</h3>
            <p className="text-gray-600 dark:text-gray-400">Concise collection of high value information on specific application security topics</p>
          </a>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Interactive Learning Platforms</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <a href="https://www.hackthebox.eu/" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Hack The Box</h3>
            <p className="text-gray-600 dark:text-gray-400">Practice your skills on real-world cybersecurity challenges</p>
          </a>
          <a href="https://www.tryhackme.com/" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">TryHackMe</h3>
            <p className="text-gray-600 dark:text-gray-400">Learn cybersecurity through hands-on exercises and labs</p>
          </a>
          <a href="https://www.cybrary.it/" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Cybrary</h3>
            <p className="text-gray-600 dark:text-gray-400">Access a wide range of cybersecurity courses and training materials</p>
          </a>
        </div>
      </section>
    </div>
  )
}

