import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { FaYoutube, FaPodcast, FaRss, FaGlobe, FaTwitter, FaGithub } from 'react-icons/fa'

interface Creator {
  name: string;
  description: string;
  platforms: {
    type: string;
    url: string;
  }[];
}

const creators: Creator[] = [
  {
    name: "The Cyber Mentor (TCM)",
    description: "Offers high-quality ethical hacking and penetration testing tutorials, including walkthroughs and courses for learners at all levels.",
    platforms: [
      { type: "youtube", url: "https://www.youtube.com/channel/UC0ArlFuFYMpEewyRBzdLHiw" },
      { type: "twitter", url: "https://twitter.com/thecybermentor" }
    ]
  },
  {
    name: "IppSec",
    description: "Focuses on penetration testing and CTF (Capture the Flag) challenges. He provides walkthroughs for Hack The Box and other hacking challenges.",
    platforms: [
      { type: "youtube", url: "https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA" }
    ]
  },
  {
    name: "LiveOverflow",
    description: "Content revolves around reverse engineering, exploitation, and ethical hacking. His channel is known for deep technical content on hacking and security research.",
    platforms: [
      { type: "youtube", url: "https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w" }
    ]
  },
  {
    name: "John Hammond",
    description: "Provides tutorials on cybersecurity, ethical hacking, CTF challenges, and penetration testing, often using real-world scenarios.",
    platforms: [
      { type: "youtube", url: "https://www.youtube.com/c/JohnHammondSecurity" },
      { type: "website", url: "https://hammondsecurity.com/" }
    ]
  },
  {
    name: "SANS Institute",
    description: "Offers high-level training and educational content on cybersecurity, including free webinars, expert interviews, and discussions on security trends.",
    platforms: [
      { type: "youtube", url: "https://www.youtube.com/user/SANSInstitute" },
      { type: "website", url: "https://www.sans.org/blog/" },
      { type: "podcast", url: "https://www.sans.org/webcasts" }
    ]
  },
  {
    name: "Darknet Diaries",
    description: "A podcast that shares stories about hacking, cybercrime, and data breaches. It's great for those interested in cybersecurity storytelling.",
    platforms: [
      { type: "podcast", url: "https://darknetdiaries.com/" },
      { type: "youtube", url: "https://www.youtube.com/c/DarknetDiaries" }
    ]
  },
  {
    name: "KrebsOnSecurity",
    description: "Brian Krebs focuses on cybercrime, security vulnerabilities, data breaches, and privacy issues. His blog is a trusted source for deep dives into security topics.",
    platforms: [
      { type: "website", url: "https://krebsonsecurity.com/" }
    ]
  },
  {
    name: "Malwarebytes Labs",
    description: "Offers cybersecurity research, advice on malware threats, and tips for protecting users and businesses.",
    platforms: [
      { type: "website", url: "https://blog.malwarebytes.com/" },
      { type: "youtube", url: "https://www.youtube.com/c/Malwarebytes" }
    ]
  },
  {
    name: "Hak5",
    description: "A community-driven channel focused on hacking hardware, cybersecurity tools, and hacking tutorials, including the use of devices like the Pineapple WiFi.",
    platforms: [
      { type: "youtube", url: "https://www.youtube.com/@Hak5" },
      { type: "podcast", url: "https://hak5.org/podcasts" }
    ]
  },
  {
    name: "Computerphile",
    description: "Features videos explaining computer science concepts, cybersecurity issues, and tech-related topics in a digestible format.",
    platforms: [
      { type: "youtube", url: "https://www.youtube.com/user/Computerphile" }
    ]
  }
];

export default function ContentCreators() {
  const getPlatformIcon = (type: string) => {
    switch (type) {
      case 'youtube':
        return <FaYoutube className="w-5 h-5" />;
      case 'podcast':
        return <FaPodcast className="w-5 h-5" />;
      case 'website':
        return <FaGlobe className="w-5 h-5" />;
      case 'twitter':
        return <FaTwitter className="w-5 h-5" />;
      case 'github':
        return <FaGithub className="w-5 h-5" />;
      default:
        return <FaRss className="w-5 h-5" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Cybersecurity Content Creators</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {creators.map((creator, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{creator.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{creator.description}</p>
            <div className="flex flex-wrap gap-2">
              {creator.platforms.map((platform, pIndex) => (
                <Link
                  key={pIndex}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                >
                  {getPlatformIcon(platform.type)}
                  <span className="ml-2 capitalize">{platform.type}</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

