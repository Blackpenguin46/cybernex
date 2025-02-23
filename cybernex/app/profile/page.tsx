'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/app/contexts/AuthContext'
import { createClient } from '@/lib/auth'
import { LoadingSpinner } from '@/app/components/LoadingSpinner'
import { User, Settings, BookOpen, Star, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const { user, loading: authLoading, signOut } = useAuth()
  const router = useRouter()
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({
    full_name: '',
    username: '',
    bio: '',
    preferences: {
      emailNotifications: true,
      darkMode: true
    }
  })
  const supabase = createClient()

  useEffect(() => {
    if (user) {
      loadProfile()
    }
  }, [user])

  const loadProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', user?.id)
        .single()

      if (error) throw error
      setProfile(data)
      setFormData({
        full_name: data.full_name || '',
        username: data.username || '',
        bio: data.bio || '',
        preferences: data.preferences || {
          emailNotifications: true,
          darkMode: true
        }
      })
    } catch (error) {
      console.error('Error loading profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { error } = await supabase
        .from('user_profiles')
        .update(formData)
        .eq('id', user?.id)

      if (error) throw error
      setProfile({ ...profile, ...formData })
      setEditing(false)
    } catch (error) {
      console.error('Error updating profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  if (authLoading || loading) return <LoadingSpinner />

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">Profile Settings</h1>
              <div className="flex space-x-4">
                <button
                  onClick={() => setEditing(!editing)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  {editing ? 'Cancel' : 'Edit Profile'}
                </button>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>

            {editing ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Username</label>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Bio</label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                    rows={4}
                  />
                </div>
                <div className="space-y-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.preferences.emailNotifications}
                      onChange={(e) => setFormData({
                        ...formData,
                        preferences: {
                          ...formData.preferences,
                          emailNotifications: e.target.checked
                        }
                      })}
                      className="mr-2"
                    />
                    Receive email notifications
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.preferences.darkMode}
                      onChange={(e) => setFormData({
                        ...formData,
                        preferences: {
                          ...formData.preferences,
                          darkMode: e.target.checked
                        }
                      })}
                      className="mr-2"
                    />
                    Dark Mode
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                      <p><span className="font-medium">Name:</span> {profile.full_name}</p>
                      <p><span className="font-medium">Username:</span> {profile.username}</p>
                      <p><span className="font-medium">Email:</span> {user?.email}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Bio</h3>
                      <p>{profile.bio || 'No bio added yet.'}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Preferences</h3>
                      <p>Email Notifications: {profile.preferences?.emailNotifications ? 'Enabled' : 'Disabled'}</p>
                      <p>Dark Mode: {profile.preferences?.darkMode ? 'Enabled' : 'Disabled'}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Progress Section */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Courses Progress</h3>
            </div>
            <p className="text-3xl font-bold">12</p>
            <p className="text-gray-600">Courses in progress</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              <h3 className="text-lg font-semibold">Achievements</h3>
            </div>
            <p className="text-3xl font-bold">5</p>
            <p className="text-gray-600">Badges earned</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold">Account Status</h3>
            </div>
            <p className="text-xl font-semibold text-green-500">Active</p>
            <p className="text-gray-600">Premium member</p>
          </div>
        </div>
      </div>
    </div>
  )
} 