"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users, Star, Download, CheckCircle, User, Award, BookOpen, Target, Calendar } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// This would typically come from a database or API
const courseData = {
  "python-fullstack": {
    title: "Python Full-Stack Development",
    description: "Master Django, React, and modern web development with hands-on projects",
    duration: "6 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹45,000",
    originalPrice: "₹60,000",
    category: "Development",
    students: "500+",
    rating: 4.8,
    reviews: 156,
    image: "/placeholder.svg?height=400&width=600",
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
        topics: ["Python Syntax", "Data Structures", "OOP Concepts", "File Handling", "Exception Handling"],
      },
      {
        module: "Web Development with Django",
        duration: "6 weeks",
        topics: ["Django Framework", "Models & Database", "Views & Templates", "Forms & Authentication", "REST APIs"],
      },
      {
        module: "Frontend with React",
        duration: "6 weeks",
        topics: ["React Components", "State Management", "Hooks", "Routing", "API Integration"],
      },
      {
        module: "Database & Deployment",
        duration: "4 weeks",
        topics: ["PostgreSQL", "Database Design", "AWS Deployment", "Docker", "CI/CD Pipeline"],
      },
      {
        module: "Capstone Project",
        duration: "4 weeks",
        topics: ["Project Planning", "Full-Stack Application", "Testing", "Documentation", "Presentation"],
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
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courseData[params.slug as keyof typeof courseData]

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <Link href="/courses">
            <Button>View All Courses</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <Badge className="bg-white text-sky-600">{course.category} Course</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">{course.title}</h1>
                <p className="text-xl text-blue-100">{course.description}</p>
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
                <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 text-lg px-8">
                  Enroll Now - {course.price}
                </Button>
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
              <img src={course.image || "/placeholder.svg"} alt={course.title} className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-sky-600">{course.price}</div>
                <div className="text-sm text-gray-500 line-through">{course.originalPrice}</div>
                <div className="text-sm text-green-600">25% OFF Limited Time</div>
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
                            <h4 className="font-semibold">Industry Certification</h4>
                            <p className="text-sm text-gray-600">Get certified upon completion</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="h-5 w-5 text-sky-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">Expert Mentorship</h4>
                            <p className="text-sm text-gray-600">Learn from industry professionals</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <BookOpen className="h-5 w-5 text-sky-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">Lifetime Access</h4>
                            <p className="text-sm text-gray-600">Access materials anytime</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Target className="h-5 w-5 text-sky-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">100% Placement</h4>
                            <p className="text-sm text-gray-600">Guaranteed job assistance</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="syllabus" className="space-y-6">
                  {course.syllabus.map((module, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">
                            Module {index + 1}: {module.module}
                          </CardTitle>
                          <Badge variant="outline">{module.duration}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-2">
                          {module.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm text-gray-700">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">{course.instructor.name}</h3>
                          <p className="text-sky-600 font-semibold mb-2">{course.instructor.title}</p>
                          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {course.instructor.experience} experience
                            </div>
                          </div>
                          <p className="text-gray-700">{course.instructor.bio}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="projects">
                  <Card>
                    <CardHeader>
                      <CardTitle>Real-World Projects</CardTitle>
                      <CardDescription>Build these industry-relevant projects to showcase your skills</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {course.projects.map((project, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                            <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{project}</h4>
                              <p className="text-sm text-gray-600 mt-1">
                                A comprehensive project that demonstrates real-world application of the skills learned
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
                      <div className="text-2xl font-bold text-blue-600">{course.price}</div>
                      <div className="text-sm text-gray-500 line-through">{course.originalPrice}</div>
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
                    <Button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700">
                      Enroll Now
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Book Free Demo
                    </Button>
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
                    <div className="font-semibold text-blue-900">Next Batch</div>
                    <div className="text-sm text-blue-700">Starts: March 15, 2024</div>
                    <div className="text-sm text-blue-700">Mode: Online</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900">Weekend Batch</div>
                    <div className="text-sm text-gray-700">Starts: March 20, 2024</div>
                    <div className="text-sm text-gray-700">Mode: Offline (Bangalore)</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
