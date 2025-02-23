import Link from 'next/link'
import { Users, MessageSquare, Globe } from 'lucide-react'

export default function CyberNexCommunityPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">CyberNex Community</h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Connect with fellow cybersecurity enthusiasts, share knowledge, and grow together in our vibrant CyberNex community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Discussion Forums</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Engage in discussions on various cybersecurity topics with experts and beginners alike.</p>
          <Link href="/community/forums" className="text-blue-600 dark:text-blue-400 hover:underline">Join the conversation</Link>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <MessageSquare className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Study Groups</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Find or create study groups for certifications, courses, or specific cybersecurity topics.</p>
          <Link href="/community/study-groups" className="text-blue-600 dark:text-blue-400 hover:underline">Explore study groups</Link>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Events</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Discover and participate in cybersecurity events, webinars, and meetups.</p>
          <Link href="/community/events" className="text-blue-600 dark:text-blue-400 hover:underline">View upcoming events</Link>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/auth/signup" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center">
          <Users className="w-5 h-5 mr-2" />
          Join the CyberNex Community
        </Link>
      </div>
    </div>
  )
}

