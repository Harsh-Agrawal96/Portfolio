import platLogo from "../public/images/PlatExamIntern.jpg"
import safeguardLogo from "../public/images/SafeGuardIntern.jpg"
import checkstyleImg from "../public/images/checkstyle.png";


export const Experiences = [
  {
    id: 1,
    role: "Contributor",
    company: "Checkstyle Organization",
    period: "January 2025 - Present",
    logo: checkstyleImg,
    work: [
      "Actively contributing to Checkstyle, a widely-used static code analysis tool for Java.",
      "Enhance core check logic, implement new features, and resolve community-reported issues.",
      "Write and maintain test cases for suppressions, mutation testing, and various rule checks to ensure consistent and good code quality.",
    ],
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "Next Shield Smart Networks Pvt. Ltd.",
    period: "Sep 2024 - Feb 2025",
    logo: safeguardLogo,
    work: [
      "Worked on a blockchain-based tokenization system using Hyperledger Fabric. Developed smart contracts to securely represent Real-World Assets (RWAs) on-chain.",
      "On the backend, optimized API endpoints to reduce response times.",
      "Handled the integration of Web 2.0 and Web 3.0 components using Docker containers, while building RESTful APIs in both Spring Boot and Node.js.",
    ],
  },
  {
    id: 3,
    role: "Web developer",
    company: "PLAT EXAM Pvt. Ltd.",
    period: "May 2024 - July 2024",
    logo: platLogo,
    work: [
      "Managed and updated live production content for the company’s educational website, gaining practical experience in real-world deployment environments.",
      "Designed databases for new website features, applying concepts of schema design and data modeling.",
    ],
  },
];