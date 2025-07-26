"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Users, Award, MapPin, Clock, Monitor, User } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const featuredCourses = [
  {
    id: "python-fullstack",
    title: "Python Full-Stack Development",
    description: "Master Django, React, and modern web development",
    duration: "6 months",
    mode: "Online/Offline",
    price: "₹45,000",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "power-bi",
    title: "Power BI & Data Analytics",
    description: "Transform data into actionable business insights",
    duration: "3 months",
    mode: "Online/Offline",
    price: "₹25,000",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "azure-devops",
    title: "Azure DevOps",
    description: "Master cloud deployment and CI/CD pipelines",
    duration: "4 months",
    mode: "Online/Offline",
    price: "₹35,000",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const stats = [
  { icon: Users, label: "Students Trained", value: "5000+" },
  { icon: Award, label: "Placement Rate", value: "100%" },
  { icon: BookOpen, label: "Courses Offered", value: "15+" },
  { icon: MapPin, label: "Training Centers", value: "2" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge className="bg-white text-sky-600 hover:bg-gray-100">🚀 Transform Your Career in Tech</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Master <span className="text-cyan-300">In-Demand</span> Tech Skills
                </h1>
                <p className="text-xl text-blue-100 max-w-lg">
                  Join India's leading IT training institute with 100% placement assistance. Learn from industry experts
                  and land your dream job in tech.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 text-lg px-8">
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-sky-600 text-lg px-8 bg-transparent"
                >
                  Book Free Demo
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">5000+</div>
                  <div className="text-blue-200 text-sm">Students Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-blue-200 text-sm">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-blue-200 text-sm">Cities</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://placehold.co/750x550"
                  alt="Flair Technologies Training"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full text-white mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-sky-100 text-sky-700">Featured Courses</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Master <span className="text-sky-600">High-Demand</span> Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our industry-aligned courses designed by experts and delivered by professionals from top MNCs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white">Popular</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-sky-600 transition-colors">{course.title}</CardTitle>
                    <CardDescription className="text-gray-600">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Monitor className="h-4 w-4" />
                        {course.mode}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-sky-600">{course.price}</div>
                      <Link href={`/courses/${course.id}`}>
                        <Button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/courses">
              <Button
                size="lg"
                variant="outline"
                className="border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white bg-transparent"
              >
                View All Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Why Choose Flair Technologies</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Success is <span className="text-blue-600">Our Priority</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: User,
                title: "Expert Mentors from MNCs",
                description:
                  "Learn from industry professionals working in top companies like Google, Microsoft, Amazon",
              },
              {
                icon: Award,
                title: "100% Placement Assistance",
                description: "Guaranteed job placement support with our extensive network of hiring partners",
              },
              {
                icon: BookOpen,
                title: "Real-World Projects",
                description: "Work on live projects and build a portfolio that showcases your skills to employers",
              },
              {
                icon: Users,
                title: "Small Batch Sizes",
                description: "Personalized attention with maximum 15 students per batch for better learning",
              },
              {
                icon: Monitor,
                title: "Flexible Learning",
                description: "Choose between online, offline, or hybrid modes based on your convenience",
              },
              {
                icon: MapPin,
                title: "Prime Locations",
                description: "Conveniently located centers in Bangalore and Hyderabad with modern facilities",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful professionals who started their tech journey with Flair Technologies. Your
              dream job is just one course away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 text-lg px-8">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/freshers">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-sky-600 text-lg px-8 bg-transparent"
                >
                  Freshers Program
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
