"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Define interfaces for additionalInfo
interface TrainingAdditionalInfo {
  intro: string;
  methodology: string;
  qualityStandards: string;
  coursesOffered: string[];
  innovation: string;
  contact: string;
}

interface ConsultingAdditionalInfo {
  intro: string;
  benefits: string;
  portfolio: string[];
  permanentHire: string;
  contractStaffing: string;
  screening: string;
  temporaryStaffing: string;
}

interface OutsourcingAdditionalInfo {
  intro: string;
  services: string[];
  differentiators: {
    totalOutsourcing: string;
    globalDelivery: string;
    flexibleDelivery: string;
  };
  businessGrowth: string;
  recruitingSupport: string;
}

// Union type for additionalInfo
type AdditionalInfo = TrainingAdditionalInfo | ConsultingAdditionalInfo | OutsourcingAdditionalInfo;

interface ServiceData {
  title: string;
  description: string;
  highlights: string[];
  image: string;
  additionalInfo: AdditionalInfo;
}

const servicesData: Record<string, ServiceData> = {
  "it-training": {
    title: "IT Training",
    description: "Empower your skills with hands-on IT training from certified instructors.",
    highlights: [
      "Live sessions by industry experts",
      "Access to recorded content",
      "Certifications included",
    ],
    image: "https://www.extnoc.com/blog/wp-content/uploads/2023/01/The-Importance-of-Ongoing-Training-for-IT-Support-Professionals-2.jpg",
    additionalInfo: {
      intro: "Flair Technologies has over 10 years of experience in the Training and Development industry. Flair Technologies built and re-built training, and developed innovative technology-based learning solutions across all departments within small, medium, and large corporate structures.",
      methodology: "Flair Technologies unique training methodology is designed to provide the complete spectrum skills in a very interactive and easy to learn manner. Training is delivered by highly core and certified professionals. Our faculty is always with their high spirit to deliver their best. Our training methodology seeks to deal with the whole gamut of new skills and techniques the IT industry requires. Our training methodology is unique and diverse and focuses on every aspect of an individual. We concentrate on every area towards overall development of an individual.",
      qualityStandards: "We believe, in offering the finest standards of quality and processes that are constantly updated and adapted to the changing global scenario. We are dedicated to guide the industry professionals and students to competently compete and confirm to international standards of quality, employee efficiency and productivity.",
      coursesOffered: [
        "Python (Django / Selenium)",
        "Azure Admin with Azure DevOps",
        "DevOps & AWS",
        "Power BI",
        "Azure Data Factory",
        "Alteryx",
        "Microsoft Excel (VBA)",
        "Power Apps & Automate",
        "Tableau",
        "Testing Tools",
        "C & Network Protocol",
        "Web Development",
      ],
      innovation: "Flair Technologies is a leading training organization that caters to the latest technology and innovation. We are also pioneers in providing training in diverse Software fields like Python, Azure Admin, Azure DevOps, DevOps & AWS, Microsoft Power BI, Azure Data Factory, Alteryx, Microsoft Excel (VBA), Power Apps & Automate, Tableau, Testing Tools, C & Network Protocol, Web Development etc… We believe, in offering the finest standards of quality and processes that are constantly updated and adapted to the changing global scenario. We are dedicated to guiding industry professionals and students to competently compete and confirm international standards of quality employee efficiency and productivity.",
      contact: "Do you have a question about a training course? We can deliver a wide range of training courses on-site, off-site, or virtually. Send us a message!",
    },
  },
  "it-consulting": {
    title: "IT Consulting",
    description: "Professional guidance to streamline your IT infrastructure and processes.",
    highlights: [
      "Tailored IT strategies",
      "On-demand expert advice",
      "Technology transformation support",
    ],
    image: "https://www.enterpriseitworld.com/wp-content/uploads/2023/08/IT-Consulting-Company.jpg",
    additionalInfo: {
      intro: "If you are a small to medium sized company, identifying the right staffing solutions for your organization is crucial to the success of your business. Our cross-industry consulting services help you to build strategies, solving problems to the extent of producing results, expert work done on behalf of a client, project planning and launching across the organization. The first offering of Flair Technologies is looking and listening; observing and understanding. Our consultants appreciate the situation and the environment in order to forecast the opportunities and risks.",
      benefits: "So, seeking our services will benefit you on all counts. Get in touch with us to leverage our expertise in formulating the right outsourcing solution for you.",
      portfolio: [
        "Business Analysis",
        "Process Consultancy",
        "Technology Consultancy",
        "Data Visualization",
        "Software quality assurance and testing",
      ],
      permanentHire: "Our Permanent and Direct Hire services leverage the breadth of our HR experience to assess, attract and appoint the best talent. Corporations rely on permanent hires to grow and replenish their resources internally as well as for project-based work. This is because an organization that is equipped with quality and dedicated permanent staff has a greater chance of surviving and succeeding in the long run. We have developed several effective strategies to connect you to the most talented professionals by adopting a methodical process in staffing.",
      contractStaffing: "Flair Technologies offers flexible, effective and short/long-term contract staffing solutions for those companies seeking to access talent with specialized skills only on an as-needed or project basis. Flair Technologies has a contractual staffing model in place where it helps you to acquire the proficiency needed for the precise time frame of a particular job and save money & manpower resources. If your projects need immediate resources, count on us for quality, quick time line, with no employee-related costs.",
      screening: "Our screening policies are well defined and mature and our experience in current technologies gives us an understanding of the complex, varied consulting needs of our clients. Want to have a hard working and talented employee? Well, you can rely on us. Each and every candidate that we select for you has to go through a long screening process to ensure that the candidate is fit for the position and can perform well.",
      temporaryStaffing: "Temporary staffing solutions at Flair Technologies are customized to meet specific client needs. Short-term projects require highly specialized skills and benefit from an infusion of the latest technical abilities. In the same way, we do care for the candidates and help them getting a better placement with good package.",
    },
  },
  "it-outsourcing": {
    title: "IT Outsourcing",
    description: "Reduce costs and focus on core business while we manage your IT services.",
    highlights: [
      "End-to-end support",
      "24/7 monitoring",
      "Scalable resources",
    ],
    image: "https://www.feedough.com/wp-content/uploads/2020/12/outsourcing.webp",
    additionalInfo: {
      intro: "Flair Technologies offers the best offshore software Training and development services that deliver robust, scalable, and cost-effective software solutions. Our clients realize an increase in productivity for offshore software development projects while improving their business performance through the changing demands of their marketplace.",
      services: [
        "Offshore Application Development",
        "Offshore Application Maintenance",
        "Offshore Engagement Model",
        "Offshore Delivery Model",
      ],
      differentiators: {
        totalOutsourcing: "Total Outsourcing: IT, Process Strategy Formulation, IT Portfolio Management, Transition Management.",
        globalDelivery: "Global Delivery Model: Division of project into components, Logical separation and execution, Execution at different geographies and time zones, Lower costs and higher quality products, Reporting & Project management.",
        flexibleDelivery: "Flexible Delivery Models: Staff augmentation model, Special team model, Co-source model, Project model, Portfolio model-end to end engagement model.",
      },
      businessGrowth: "It’s a well known fact that ability business increase. Getting the correct people in the opportune place with the correct abilities is urgent for your prosperity.",
      recruitingSupport: "Driven by the need to assemble that channel of qualified candidates numerous spotters invest the greater part of their energy sourcing applicant, and little time truly selecting. Flair Technologies can free up your spotters to do what they excel at select. Our group can deal with the whole enrolling/enlisting methodology from employment profiling through the on-boarding of the new draw in, including staff, innovation, and strategy and announcing. Our customers have encountered decrease so as to contract, enhanced nature of the applicant pool, undeniable competitors measurements, diminished cost and enhanced consistence.",
    },
  },
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData]

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="heading">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/services">
            <Button>View All Services</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      <section className="background text-white py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Badge className="bg-white text-sky-600">Professional Service</Badge>
            <h1 className="heading">{service.title}</h1>
            <p className="text-xl text-blue-100">{service.description}</p>

            <div className="grid md:grid-cols-2 gap-4">
              {service.highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-3 h-3 mt-1 rounded-full bg-green-400"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 text-lg px-8">
              Contact Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="rounded-2xl shadow-2xl h-[350px] w-full"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50 text-xl">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {params.slug === "it-training" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our IT Training</h2>
                <p className="text-gray-700 mb-4">{service.additionalInfo.intro}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Training Methodology</h3>
                <p className="text-gray-700 mb-4">{(service.additionalInfo as TrainingAdditionalInfo).methodology}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Standards</h3>
                <p className="text-gray-700 mb-4">{(service.additionalInfo as TrainingAdditionalInfo).qualityStandards}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Courses Offered</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {(service.additionalInfo as TrainingAdditionalInfo).coursesOffered.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
                <p className="text-gray-700 mb-4">{(service.additionalInfo as TrainingAdditionalInfo).innovation}</p>
                <p className="text-gray-700">{(service.additionalInfo as TrainingAdditionalInfo).contact}</p>
              </div>
            )}
            {params.slug === "it-consulting" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our IT Consulting</h2>
                <p className="text-gray-700 mb-4">{service.additionalInfo.intro}</p>
                <p className="text-gray-700 mb-4">{(service.additionalInfo as ConsultingAdditionalInfo).benefits}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Consulting Portfolio</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {(service.additionalInfo as ConsultingAdditionalInfo).portfolio.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Permanent Hire Services</h3>
                <p className="text-gray-700 mb-4">{(service.additionalInfo as ConsultingAdditionalInfo).permanentHire}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Contract Staffing</h3>
                <p className="text-gray-700 mb-4">{(service.additionalInfo as ConsultingAdditionalInfo).contractStaffing}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Screening Process</h3>
                <p className="text-gray-700 mb-4">{(service.additionalInfo as ConsultingAdditionalInfo).screening}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Temporary Staffing</h3>
                <p className="text-gray-700">{(service.additionalInfo as ConsultingAdditionalInfo).temporaryStaffing}</p>
              </div>
            )}
            {params.slug === "it-outsourcing" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our IT Outsourcing</h2>
                <p className="text-gray-700 mb-4">{service.additionalInfo.intro}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Services Offered</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {(service.additionalInfo as OutsourcingAdditionalInfo).services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Differentiators</h3>
                <p className="text-gray-700 mb-4">{(service.additionalInfo as OutsourcingAdditionalInfo).differentiators.totalOutsourcing}</p>
                <p className="text-gray-700 mb-4">{(service.additionalInfo as OutsourcingAdditionalInfo).differentiators.globalDelivery}</p>
                <p className="text-gray-700 mb-4">{(service.additionalInfo as OutsourcingAdditionalInfo).differentiators.flexibleDelivery}</p>
                <p className="text-gray-700 mb-4">{(service.additionalInfo as OutsourcingAdditionalInfo).businessGrowth}</p>
                <p className="text-gray-700">{(service.additionalInfo as OutsourcingAdditionalInfo).recruitingSupport}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}