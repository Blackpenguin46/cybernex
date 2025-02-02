'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Book, Video, FileText, ExternalLink } from 'lucide-react'

const learningContent = [
  {
    title: "Introduction to Cybersecurity",
    type: "course",
    provider: "Coursera",
    link: "/learn/intro-to-cybersecurity",
    description: "Learn the basics of cybersecurity and its importance in the digital world."
  },
  {
    title: "Ethical Hacking Fundamentals",
    type: "video",
    provider: "YouTube",
    link: "/learn/ethical-hacking-fundamentals",
    description: "A comprehensive video series on ethical hacking techniques and methodologies."
  },
  {
    title: "Cryptography Essentials",
    type: "article",
    provider: "CyberNex Blog",
    link: "/learn/cryptography-essentials",
    description: "An in-depth article covering the essential concepts of cryptography in cybersecurity."
  },
  // Add more learning content items here
]

export default function LearnPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredContent = learningContent.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Learn Cybersecurity</h1>

      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for topics..."
            className="w-full p-3 pl-10 bg-secondary rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
        </div>
      </div>

      <div className="grid gap-6">
        {filteredContent.map((item, index) => (
          <Link 
            key={index} 
            href={item.link}
            className="block bg-secondary hover:bg-secondary/80 rounded-lg p-6 transition-colors duration-200"
          >
            <div className="flex items-start">
              {item.type === 'course' && <Book className="w-6 h-6 mr-3 mt-1" />}
              {item.type === 'video' && <Video className="w-6 h-6 mr-3 mt-1" />}
              {item.type === 'article' && <FileText className="w-6 h-6 mr-3 mt-1" />}
              <div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-muted-foreground mb-2">{item.provider}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

