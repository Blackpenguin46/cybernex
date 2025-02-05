import Link from 'next/link'
import { FileText, ExternalLink } from 'lucide-react'

interface Publication {
  name: string;
  link: string;
}

interface ResearchWebsite {
  name: string;
  url: string;
}

export default function ResearchPublications() {
  const publications: Publication[] = [
    { name: "IEEE Transactions on Information Forensics and Security", link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=10206" },
    { name: "Journal of Cybersecurity", link: "https://academic.oup.com/cybersecurity" },
    { name: "Computers & Security (Elsevier)", link: "https://www.sciencedirect.com/journal/computers-and-security" },
    { name: "ACM Transactions on Privacy and Security", link: "https://dl.acm.org/journal/tops" },
    { name: "International Journal of Information Security", link: "https://www.springer.com/journal/10207" },
    { name: "Journal of Computer Security", link: "https://www.iospress.nl/journal/journal-of-computer-security/" },
    { name: "Digital Investigation (Elsevier)", link: "https://www.sciencedirect.com/journal/digital-investigation" },
    { name: "Journal of Information Security and Applications", link: "https://www.sciencedirect.com/journal/journal-of-information-security-and-applications" },
    { name: "Cryptography and Communications (Springer)", link: "https://www.springer.com/journal/12095" },
    { name: "Security and Communication Networks (Wiley)", link: "https://onlinelibrary.wiley.com/journal/19390122" },
    { name: "Cybersecurity: A Peer-Reviewed Journal", link: "https://www.henrystewartpublications.com/cyber" },
    { name: "NSA Cybersecurity Papers", link: "https://www.nsa.gov/resources/everyone/cybersecurity-advisories-technical-guidance/" },
    { name: "CISA Publications", link: "https://www.cisa.gov/publications" },
    { name: "NIST Cybersecurity Framework", link: "https://www.nist.gov/cyberframework" },
    { name: "ISACA Journal", link: "https://www.isaca.org/resources/isaca-journal" },
    { name: "ESORICS Conference Proceedings", link: "https://link.springer.com/conference/esorics" },
    { name: "NDSS Symposium", link: "https://www.ndss-symposium.org/" },
    { name: "DEF CON Papers", link: "https://defcon.org/html/links/dc-archives.html" },
    { name: "Black Hat Briefings", link: "https://www.blackhat.com/html/archives.html" },
    { name: "ShmooCon Proceedings", link: "https://www.shmoocon.org/archives/" },
    { name: "Cyber Defense Review", link: "https://cyberdefensereview.army.mil/" },
    { name: "SIGCOMM Computer Communication Review", link: "https://dl.acm.org/journal/ccr" },
    { name: "ACM CCS Proceedings", link: "https://www.sigsac.org/ccs/CCS2023/" },
    { name: "AsiaCCS Proceedings", link: "https://asiaccs2023.org/" },
    { name: "CHES Proceedings", link: "https://ches.iacr.org/" },
  ];

  const researchWebsites: ResearchWebsite[] = [
    { name: "arXiv.org", url: "https://arxiv.org/list/cs.CR/recent" },
    { name: "USENIX Security Symposium", url: "https://www.usenix.org/conference/usenixsecurity20" },
    { name: "Schneier on Security", url: "https://www.schneier.com/" },
    { name: "SecurityWeek", url: "https://www.securityweek.com/" },
    { name: "SANS Institute", url: "https://www.sans.org/reading-room/" },
    { name: "CVE Database", url: "https://cve.mitre.org/" },
    { name: "OWASP", url: "https://owasp.org/" },
    { name: "Krebs on Security", url: "https://krebsonsecurity.com/" },
    { name: "Cybersecurity Ventures", url: "https://cybersecurityventures.com/" },
    { name: "CSO Online", url: "https://www.csoonline.com/" },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Cybersecurity Research Publications</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Academic Publications</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub, index) => (
            <Link
              key={index}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{pub.name}</h3>
                </div>
                <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Research Websites</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {researchWebsites.map((site, index) => (
            <Link 
              key={index}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900 dark:text-gray-100">{site.name}</span>
                <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

