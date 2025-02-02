import Link from "next/link";
import {
  Shield,
  Book,
  Award,
  Calendar,
  PenTool,
  Users,
  GraduationCap,
  Code,
  Cpu,
  Lightbulb,
  Rocket,
  MessageSquare,
} from "lucide-react";

// Define types for the Card component props
interface CardProps {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  isPremium?: boolean;
}

// Reusable Card Component with defined props
const Card: React.FC<CardProps> = ({
  href,
  icon: Icon,
  title,
  description,
  isPremium = false,
}) => (
  <Link
    href={href}
    className={`w-full ${
      isPremium ? "bg-blue-600 text-white" : "bg-white dark:bg-gray-800"
    } p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ${
      isPremium ? "transform hover:scale-105 transition-transform" : ""
    }`}
    aria-label={`Navigate to ${title}`}
  >
    <div className="flex items-center mb-4">
      <Icon
        className={`w-8 h-8 ${isPremium ? "" : "text-blue-600 dark:text-blue-400"} mr-3`}
      />
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
    <p className={isPremium ? "" : "text-gray-600 dark:text-gray-400"}>{description}</p>
  </Link>
);

// Home page component
const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-center">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Welcome to CyberNex
        </h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">
          Your central hub for all things cybersecurity, from beginner to professional.
        </p>
      </section>

      {/* Explore CyberNex Section with Logo in the Center */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Explore CyberNex</h2>
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Top Row */}
          <Card
            href="/college-students"
            icon={GraduationCap}
            title="College Students"
            description="Resources tailored for students starting their cybersecurity journey"
          />
          <Card
            href="/learning-resources"
            icon={Book}
            title="Learning Resources"
            description="Explore career paths and resources in cybersecurity"
          />
          <Card
            href="/projects"
            icon={Code}
            title="Projects"
            description="Explore hands-on cybersecurity projects to build your skills"
          />

          {/* Middle Row */}
          <Card
            href="/events-and-ctfs"
            icon={Calendar}
            title="Events and CTFs"
            description="Discover cybersecurity events and Capture The Flag competitions"
          />
          {/* Logo in the Center */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-center">
            <Rocket className="w-16 h-16 text-blue-600 dark:text-blue-400" />
          </div>
          <Card
            href="/tools-utilities"
            icon={PenTool}
            title="Tools & Utilities"
            description="Explore essential cybersecurity tools and utilities"
          />

          {/* Bottom Row */}
          <Card
            href="/certifications"
            icon={Award}
            title="Certifications"
            description="Discover essential cybersecurity certifications"
          />
          <Card
            href="/advanced-professionals"
            icon={Cpu}
            title="Advanced Professionals"
            description="Resources for experienced cybersecurity professionals"
          />
          <Card
            href="/fundamentals"
            icon={Shield}
            title="Fundamentals"
            description="Explore the core concepts and principles of cybersecurity"
          />

          {/* Additional Row for Missing Squares */}
          <Card
            href="/community"
            icon={MessageSquare}
            title="CyberNex Community"
            description="Connect with other cybersecurity enthusiasts in our community"
          />
          <Card
            href="/emerging-trends"
            icon={Lightbulb}
            title="Emerging Trends"
            description="Explore cutting-edge technologies and their impact on cybersecurity"
          />
          <Card
            href="/cybernex-plus"
            icon={Rocket}
            title="CyberNex+"
            description="Explore our premium features and personalized learning"
            isPremium
          />
        </div>
      </section>

      {/* Substack Blog and Discord Section */}
      <section className="mb-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Stay Connected
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Join our community and stay updated with the latest in cybersecurity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Substack Blog Card */}
            <Link
              href="https://substack.com/cybernex"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                <Book className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  Substack Blog
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Subscribe to our Substack for the latest cybersecurity insights and updates.
              </p>
            </Link>

            {/* Discord Channel Card */}
            <Link
              href="https://discord.gg/cybernex"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                <MessageSquare className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  Discord Channel
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Join our Discord community to connect with other cybersecurity enthusiasts.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

