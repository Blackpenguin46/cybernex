"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Book, Calendar, MessageCircle, Folder } from "lucide-react"

export default function DashboardPage() {
  const [userName, setUserName] = useState("User")
  const [subscriptionStatus, setSubscriptionStatus] = useState("")
  const searchParams = useSearchParams()

  useEffect(() => {
    // In a real application, you would fetch the user's name and subscription status from an API
    setUserName("CyberNex Member")

    const sessionId = searchParams.get("session_id")
    if (sessionId) {
      // Verify the session and update the subscription status
      verifySubscription(sessionId)
    } else {
      // Check the user's existing subscription status
      checkSubscriptionStatus()
    }
  }, [searchParams])

  const verifySubscription = async (sessionId: string) => {
    try {
      const response = await fetch(`/api/verify-subscription?session_id=${sessionId}`)
      const data = await response.json()
      if (data.status === "success") {
        setSubscriptionStatus(data.plan)
      }
    } catch (error) {
      console.error("Error verifying subscription:", error)
    }
  }

  const checkSubscriptionStatus = async () => {
    try {
      const response = await fetch("/api/check-subscription")
      const data = await response.json()
      setSubscriptionStatus(data.plan)
    } catch (error) {
      console.error("Error checking subscription status:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-gold">Welcome to CyberNex Premium, {userName}!</h1>

        {subscriptionStatus && (
          <p className="text-xl mb-8 text-gray-300">
            Your current plan: <span className="font-bold text-gold">{subscriptionStatus}</span>
          </p>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/cybernex-plus/classroom"
            className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gold hover:bg-gray-700 transition-colors duration-200"
          >
            <Book className="w-12 h-12 text-gold mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-gold">Courses and Labs</h2>
            <p className="text-gray-300">Access exclusive cybersecurity courses and hands-on labs</p>
          </Link>

          <Link
            href="/cybernex-plus/schedule"
            className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gold hover:bg-gray-700 transition-colors duration-200"
          >
            <Calendar className="w-12 h-12 text-gold mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-gold">Schedule Meetings</h2>
            <p className="text-gray-300">Book your 1-on-1 and follow-up meetings with experts</p>
          </Link>

          <Link
            href="https://discord.gg/cybernex-plus"
            className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gold hover:bg-gray-700 transition-colors duration-200"
          >
            <MessageCircle className="w-12 h-12 text-gold mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-gold">Premium Discord</h2>
            <p className="text-gray-300">Join our exclusive community of cybersecurity professionals</p>
          </Link>

          <Link
            href="/cybernex-plus/projects"
            className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gold hover:bg-gray-700 transition-colors duration-200"
          >
            <Folder className="w-12 h-12 text-gold mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-gold">Custom Projects</h2>
            <p className="text-gray-300">Work on tailored projects to enhance your skills</p>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-gold hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

