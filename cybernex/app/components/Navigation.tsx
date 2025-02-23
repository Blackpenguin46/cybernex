'use client'

import Link from 'next/link'
import { useAuth } from '@/app/contexts/AuthContext'
import { useState, useEffect } from 'react'
import { User, Crown, ChevronDown } from 'lucide-react'
import { AuthModal } from './AuthModal'

export function Navigation() {
  const { user, loading, signOut } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    console.log('Navigation auth state:', { user, loading })
  }, [user, loading])

  const navigationItems = {
    'Learn': {
      href: '/learning-resources',
      items: [
        { name: 'Learning Roadmaps', href: '/learning-resources/roadmaps' },
        { name: 'Online Courses', href: '/learning-resources/courses' },
        { name: 'Books', href: '/learning-resources/books' },
        { name: 'Content Creators', href: '/learning-resources/content-creators' },
        { name: 'Learning Communities', href: '/learning-resources/communities' },
        { name: 'Learning Tools', href: '/learning-resources/tools' },
        { name: 'Research Publications', href: '/learning-resources/research' },
      ]
    },
    'College Students': {
      href: '/college-students',
      items: [
        { name: 'Resources', href: '/college-students/resources' },
        { name: 'Internships', href: '/college-students/internships' },
        { name: 'Learning Paths', href: '/college-students/learning-paths' },
      ]
    },
    'Community': {
      href: '/community',
      items: [
        { name: 'Discussion Forums', href: '/community/forums' },
        { name: 'Study Groups', href: '/community/study-groups' },
        { name: 'Events', href: '/community/events' },
      ]
    },
    'Career': {
      href: '/careers',
      items: [
        { name: 'Internships', href: '/careers/internships' },
        { name: 'Resume Guide', href: '/careers/resume-guide' },
        { name: 'Job Board', href: '/careers/jobs' },
        { name: 'Career Resources', href: '/careers/resources' },
      ]
    }
  }

  return (
    <>
      <nav className="sticky top-0 bg-white dark:bg-gray-800 shadow z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center items-center relative">
            <Link href="/" className="absolute left-0 text-xl font-bold text-blue-600">
              CyberNex
            </Link>

            <div className="flex items-center space-x-8">
              {Object.entries(navigationItems).map(([title, { href, items }]) => (
                <div 
                  key={title}
                  className="relative"
                >
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === title ? null : title)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 dark:text-gray-300 py-2"
                  >
                    <Link 
                      href={href}
                      className="text-gray-700 hover:text-blue-600 dark:text-gray-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {title}
                    </Link>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {activeDropdown === title && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50"
                    >
                      {items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="absolute right-0 flex items-center space-x-4">
              <Link 
                href="/pricing" 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 dark:text-gray-300"
              >
                <Crown className="w-5 h-5" />
                <span>Premium</span>
              </Link>
              
              {loading ? (
                <div className="animate-spin">
                  <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full"/>
                </div>
              ) : user ? (
                <div className="relative group">
                  <button 
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 dark:text-gray-300"
                    onClick={() => setActiveDropdown(activeDropdown === 'profile' ? null : 'profile')}
                  >
                    <User className="w-5 h-5" />
                    <span>{user.email?.split('@')[0]}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {activeDropdown === 'profile' && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        My Profile
                      </Link>
                      <Link
                        href="/profile/settings"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        Settings
                      </Link>
                      <button
                        onClick={async () => {
                          await signOut()
                          setActiveDropdown(null)
                        }}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => {
                      setAuthMode('login')
                      setShowAuthModal(true)
                    }}
                    className="text-gray-700 hover:text-blue-600 dark:text-gray-300"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setAuthMode('signup')
                      setShowAuthModal(true)
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        initialMode={authMode}
      />
    </>
  )
} 