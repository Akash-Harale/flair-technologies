"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Clock,
  Users,
  Star,
  Download,
  CheckCircle,
  User,
  Award,
  BookOpen,
  Target,
  Calendar,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EnrollDialog } from "@/components/EnrollDialog";

// This would typically come from a database or API
const courseData = {
  "python-fullstack": {
    title: "Python Full-Stack Development",
    description:
      "Master Django, React, and modern web development with hands-on projects",
    duration: "6 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹45,000",
    originalPrice: "₹60,000",
    category: "Development",
    students: "500+",
    rating: 4.8,
    reviews: 156,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240415204701/How-to-Become-a-Python-Full-Stack-Developer.png",
    highlights: [
      "Learn Python, Django, React, and PostgreSQL",
      "Build 5+ real-world projects",
      "Get mentorship from industry experts",
      "100% placement assistance",
      "Lifetime access to course materials",
    ],
    syllabus: [
      {
        module: "Python Fundamentals",
        duration: "4 weeks",
        topics: [
          "Python Syntax",
          "Data Structures",
          "OOP Concepts",
          "File Handling",
          "Exception Handling",
        ],
      },
      {
        module: "Web Development with Django",
        duration: "6 weeks",
        topics: [
          "Django Framework",
          "Models & Database",
          "Views & Templates",
          "Forms & Authentication",
          "REST APIs",
        ],
      },
      {
        module: "Frontend with React",
        duration: "6 weeks",
        topics: [
          "React Components",
          "State Management",
          "Hooks",
          "Routing",
          "API Integration",
        ],
      },
      {
        module: "Database & Deployment",
        duration: "4 weeks",
        topics: [
          "PostgreSQL",
          "Database Design",
          "AWS Deployment",
          "Docker",
          "CI/CD Pipeline",
        ],
      },
      {
        module: "Capstone Project",
        duration: "4 weeks",
        topics: [
          "Project Planning",
          "Full-Stack Application",
          "Testing",
          "Documentation",
          "Presentation",
        ],
      },
    ],
    instructor: {
      name: "Rajesh Kumar",
      title: "Senior Full-Stack Developer at Google",
      experience: "8+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Rajesh is a seasoned full-stack developer with extensive experience in Python and React. He has worked on large-scale applications at Google and mentored 200+ students.",
    },
    projects: [
      "E-commerce Platform with Payment Integration",
      "Social Media Dashboard",
      "Task Management System",
      "Real-time Chat Application",
      "Portfolio Website with CMS",
    ],
  },
  "power-bi": {
    title: "Microsoft Power BI",
    description:
      "Learn to create interactive data visualizations and business intelligence reports",
    duration: "3 months",
    mode: "Online/Offline",
    level: "Beginner to Intermediate",
    price: "₹25,000",
    originalPrice: "₹35,000",
    category: "Data Analytics",
    students: "300+",
    rating: 4.7,
    reviews: 89,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240726121444/Data-Analytics-Training-now.webp",
    highlights: [
      "Master Power BI Desktop and Service",
      "Create dashboards and reports",
      "Data modeling and DAX fundamentals",
      "Real-world case studies",
      "Certification preparation",
    ],
    syllabus: [
      {
        module: "Introduction to Power BI",
        duration: "2 weeks",
        topics: [
          "Power BI Basics",
          "Data Import",
          "Visualization Types",
          "Report Creation",
        ],
      },
      {
        module: "Data Modeling",
        duration: "3 weeks",
        topics: [
          "Relationships",
          "DAX Functions",
          "Calculated Columns",
          "Measures",
        ],
      },
      {
        module: "Advanced Analytics",
        duration: "2 weeks",
        topics: [
          "Power Query",
          "Data Transformation",
          "Custom Visuals",
          "Integration",
        ],
      },
      {
        module: "Deployment & Sharing",
        duration: "2 weeks",
        topics: [
          "Power BI Service",
          "Dashboards",
          "Sharing & Collaboration",
          "Security",
        ],
      },
    ],
    instructor: {
      name: "Priya Sharma",
      title: "Data Analyst at Amazon",
      experience: "10+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Priya specializes in data analytics with extensive experience in Power BI and has trained over 150 professionals.",
    },
    projects: [
      "Sales Performance Dashboard",
      "Customer Segmentation Report",
      "Financial Analysis Dashboard",
      "Inventory Management Report",
    ],
  },
  "azure-devops": {
    title: "Azure DevOps",
    description:
      "Learn to implement DevOps practices using Azure tools and services",
    duration: "4 months",
    mode: "Online/Offline",
    level: "Intermediate to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "DevOps",
    students: "400+",
    rating: 4.9,
    reviews: 120,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Mpx-7k0FvYWzb8n8snbXGKMKM-YWg0Vlsg&s",
    highlights: [
      "Master Azure Repos, Pipelines, and Boards",
      "Continuous Integration/Continuous Deployment (CI/CD)",
      "Infrastructure as Code (IaC)",
      "Real-world DevOps projects",
      "Certification support",
    ],
    syllabus: [
      {
        module: "Azure DevOps Basics",
        duration: "3 weeks",
        topics: ["Azure Boards", "Repos", "Pipelines", "Artifacts"],
      },
      {
        module: "CI/CD Implementation",
        duration: "5 weeks",
        topics: [
          "Build Pipelines",
          "Release Pipelines",
          "Testing",
          "Deployment Strategies",
        ],
      },
      {
        module: "Advanced Tools",
        duration: "3 weeks",
        topics: [
          "IaC with Terraform",
          "Monitoring",
          "Security",
          "Azure Test Plans",
        ],
      },
      {
        module: "Capstone Project",
        duration: "3 weeks",
        topics: ["End-to-End DevOps Workflow", "Optimization", "Documentation"],
      },
    ],
    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "CI/CD Pipeline for Web App",
      "Automated Testing Framework",
      "Infrastructure Deployment",
      "Monitoring Dashboard",
    ],
  },
  "data-analytics": {
    title: "Data Analytics",
    description:
      "Gain skills in data analysis using Python, R, and advanced analytics tools",
    duration: "5 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹35,000",
    originalPrice: "₹45,000",
    category: "Data Analytics",
    students: "450+",
    rating: 4.6,
    reviews: 110,
    image:
      "https://www.bismilsoft.com/admin/images/blog/DATA%20ANALYTICS_WEB%20IMAGE-01-01.jpg",
    highlights: [
      "Learn Python, R, and SQL for analytics",
      "Hands-on with real datasets",
      "Predictive modeling techniques",
      "Industry-relevant case studies",
      "Career guidance",
    ],
    syllabus: [
      {
        module: "Data Analysis Basics",
        duration: "4 weeks",
        topics: [
          "Data Collection",
          "Cleaning",
          "Exploratory Data Analysis",
          "Visualization",
        ],
      },
      {
        module: "Programming for Analytics",
        duration: "6 weeks",
        topics: [
          "Python for Data",
          "R Programming",
          "SQL Queries",
          "Libraries",
        ],
      },
      {
        module: "Advanced Analytics",
        duration: "4 weeks",
        topics: [
          "Machine Learning Basics",
          "Statistical Methods",
          "Predictive Models",
        ],
      },
      {
        module: "Project & Deployment",
        duration: "3 weeks",
        topics: ["Analytics Project", "Presentation", "Tools Integration"],
      },
    ],
    instructor: {
      name: "Sneha Gupta",
      title: "Data Scientist at IBM",
      experience: "9+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Sneha has expertise in data analytics and has contributed to numerous data-driven projects at IBM.",
    },
    projects: [
      "Customer Behavior Analysis",
      "Sales Forecasting Model",
      "Market Trend Analysis",
      "Data Visualization Dashboard",
    ],
  },
  tableau: {
    title: "Tableau",
    description:
      "Master data visualization and business intelligence with Tableau",
    duration: "3 months",
    mode: "Online/Offline",
    level: "Beginner to Intermediate",
    price: "₹28,000",
    originalPrice: "₹38,000",
    category: "Data Analytics",
    students: "350+",
    rating: 4.7,
    reviews: 95,
    image:
      "https://solutionsreview.com/business-intelligence/files/2021/08/Tableau-Courses-for-Beginners.jpg",
    highlights: [
      "Create interactive dashboards",
      "Data blending and preparation",
      "Advanced visualization techniques",
      "Tableau Server integration",
      "Certification preparation",
    ],
    syllabus: [
      {
        module: "Tableau Basics",
        duration: "2 weeks",
        topics: [
          "Introduction to Tableau",
          "Data Connection",
          "Basic Charts",
          "Filters",
        ],
      },
      {
        module: "Data Visualization",
        duration: "3 weeks",
        topics: [
          "Advanced Visuals",
          "Calculations",
          "Parameters",
          "Dashboards",
        ],
      },
      {
        module: "Advanced Features",
        duration: "2 weeks",
        topics: [
          "Data Blending",
          "Level of Detail (LOD)",
          "Storytelling",
          "Publishing",
        ],
      },
    ],
    instructor: {
      name: "Vikram Singh",
      title: "BI Specialist at Deloitte",
      experience: "11+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Vikram is an expert in Tableau with a strong background in business intelligence.",
    },
    projects: [
      "Sales Performance Dashboard",
      "HR Analytics Report",
      "Marketing Campaign Analysis",
      "Financial Summary Dashboard",
    ],
  },
  "network-protocol": {
    title: "Network Protocol",
    description:
      "Understand and implement network protocols for robust IT infrastructure",
    duration: "4 months",
    mode: "Online/Offline",
    level: "Intermediate to Advanced",
    price: "₹30,000",
    originalPrice: "₹40,000",
    category: "Networking",
    students: "250+",
    rating: 4.5,
    reviews: 70,
    image:
      "https://cdn-fainj.nitrocdn.com/HMhNvtGdkXCThiYKondeUNdKlFRQtHkp/assets/images/optimized/rev-2573752/www.auvik.com/wp-content/uploads/2024/06/common-network-protocols3.jpg",
    highlights: [
      "Learn TCP/IP, HTTP, FTP, and more",
      "Hands-on network configuration",
      "Security protocols and troubleshooting",
      "Industry-standard certifications",
      "Practical lab sessions",
    ],
    syllabus: [
      {
        module: "Network Fundamentals",
        duration: "3 weeks",
        topics: ["OSI Model", "TCP/IP Basics", "IP Addressing", "Subnetting"],
      },
      {
        module: "Core Protocols",
        duration: "5 weeks",
        topics: ["HTTP/HTTPS", "FTP", "SMTP", "DNS", "DHCP"],
      },
      {
        module: "Security & Troubleshooting",
        duration: "3 weeks",
        topics: [
          "Network Security",
          "Protocol Analysis",
          "Troubleshooting Tools",
          "VPNs",
        ],
      },
      {
        module: "Advanced Networking",
        duration: "3 weeks",
        topics: ["VoIP", "Wireless Protocols", "Network Optimization"],
      },
    ],
    instructor: {
      name: "Anil Mehta",
      title: "Network Engineer at Cisco",
      experience: "13+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Anil has extensive experience in network protocols and has trained numerous IT professionals.",
    },
    projects: [
      "Network Configuration Setup",
      "Protocol Simulation",
      "Security Audit Project",
      "Wireless Network Deployment",
    ],
  },
};

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courseData[params.slug as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="heading">Course Not Found</h1>
          <p className="text-gray-600 mb-8">
            The course you're looking for doesn't exist.
          </p>
          <Link href="/courses">
            <Button>View All Courses</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="background text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <Badge className="bg-white text-sky-600">
                  {course.category} Course
                </Badge>
                <h1 className="heading">{course.title}</h1>
                <p className="description">{course.description}</p>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>
                    {course.rating} ({course.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students} enrolled</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <EnrollDialog
                  formHeading="Enroll in Course"
                  buttonText={`Enroll Now - ${course.price}`}
                  className="bg-white text-sky-600 hover:bg-gray-100 text-lg px-8"
                  size="lg"
                />
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-sky-600 text-lg px-8 bg-transparent"
                >
                  Download Brochure <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={course.image || "/placeholder.svg"}
                width={"750px"}
                max-height={"500px"}
                alt={course.title}
                className="rounded-2xl shadow-2xl h-[350px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-sky-600">
                  {course.price}
                </div>
                <div className="text-sm text-gray-500 line-through">
                  {course.originalPrice}
                </div>
                <div className="text-sm text-green-600">
                  25% OFF Limited Time
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="space-y-8">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-sky-600" />
                        What You'll Learn
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {course.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Course Benefits</CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Award className="h-5 w-5 text-sky-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">
                              Industry Certification
                            </h4>
                            <p className="text-sm text-gray-600">
                              Get certified upon completion
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="h-5 w-5 text-sky-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">Expert Mentorship</h4>
                            <p className="text-sm text-gray-600">
                              Learn from industry professionals
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <BookOpen className="h-5 w-5 text-sky-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">Lifetime Access</h4>
                            <p className="text-sm text-gray-600">
                              Access materials anytime
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Target className="h-5 w-5 text-sky-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">100% Placement</h4>
                            <p className="text-sm text-gray-600">
                              Guaranteed job assistance
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="syllabus" className="space-y-6">
                  <Accordion type="single" collapsible className="w-full">
                    {course.syllabus.map((module, index) => (
                      <AccordionItem
                        key={index}
                        value={`module-${index}`}
                        className="mb-4 border border-gray-200 rounded-lg shadow-sm bg-white"
                      >
                        <AccordionTrigger className="px-6 py-4 bg-gradient-to-r from-slate-50 to-blue-50 hover:bg-gradient-to-r hover:from-sky-100 hover:to-blue-100 transition-all duration-300 rounded-lg">
                          <div className="flex items-center justify-between w-full">
                            <span className="text-lg font-bold text-gray-900">
                              Module {index + 1}: {module.module}
                            </span>
                            <div className="flex items-center gap-3">
                              <Badge
                                variant="outline"
                                className="border-sky-600 text-sky-600"
                              >
                                {module.duration}
                              </Badge>
                              <ChevronDown className="h-5 w-5 text-sky-600 transition-transform duration-200" />
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4">
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-2 gap-3"
                          >
                            {module.topics.map((topic, topicIndex) => (
                              <div
                                key={topicIndex}
                                className="flex items-center gap-2"
                              >
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-sm text-gray-700">
                                  {topic}
                                </span>
                              </div>
                            ))}
                          </motion.div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="instructor">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-6">
                        <img
                          src={course.instructor.image || "/placeholder.svg"}
                          alt={course.instructor.name}
                          className="w-24 h-24 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {course.instructor.name}
                          </h3>
                          <p className="text-sky-600 font-semibold mb-2">
                            {course.instructor.title}
                          </p>
                          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {course.instructor.experience} experience
                            </div>
                          </div>
                          <p className="text-gray-700">
                            {course.instructor.bio}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="projects">
                  <Card>
                    <CardHeader>
                      <CardTitle>Real-World Projects</CardTitle>
                      <CardDescription>
                        Build these industry-relevant projects to showcase your
                        skills
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {course.projects.map((project, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                          >
                            <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {project}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">
                                A comprehensive project that demonstrates
                                real-world application of the skills learned
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Course Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Price</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        {course.price}
                      </div>
                      <div className="text-sm text-gray-500 line-through">
                        {course.originalPrice}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Mode</span>
                    <span className="font-semibold">{course.mode}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className="font-semibold">{course.level}</span>
                  </div>

                  <div className="pt-4 space-y-3">
                    <EnrollDialog
                      formHeading="Enroll in Course"
                      buttonText="Enroll Now"
                      className="w-full icon-button-color hover:from-sky-600 hover:to-blue-700"
                    />
                    <EnrollDialog
                      buttonText="Book Free Demo"
                      variant="ghost"
                      className="w-full bg-transparent text-black border border-sky-500"
                    />
                    <Button variant="ghost" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Batches
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-900">
                      Next Batch
                    </div>
                    <div className="text-sm text-blue-700">
                      Starts: March 15, 2024
                    </div>
                    <div className="text-sm text-blue-700">Mode: Online</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900">
                      Weekend Batch
                    </div>
                    <div className="text-sm text-gray-700">
                      Starts: March 20, 2024
                    </div>
                    <div className="text-sm text-gray-700">
                      Mode: Offline (Bangalore)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
