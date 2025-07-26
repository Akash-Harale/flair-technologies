"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GraduationCap, Users, Award, TrendingUp, CheckCircle, Star, ArrowRight, Calendar } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Developer at TCS",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Flair Technologies transformed my career! From a fresher with no coding experience to landing a job at TCS in just 6 months. The mentorship and placement support were exceptional.",
    rating: 5,
    course: "Python Full-Stack",
  },
  {
    name: "Rahul Patel",
    role: "Data Analyst at Wipro",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The Power BI course was exactly what I needed. The instructors were patient, and the real-world projects helped me build confidence. Got placed within 2 weeks of completion!",
    rating: 5,
    course: "Power BI & Analytics",
  },
  {
    name: "Sneha Reddy",
    role: "DevOps Engineer at Infosys",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "As a mechanical engineering graduate, I was worried about switching to IT. But Flair's Azure DevOps program made the transition smooth. Now I'm working at Infosys!",
    rating: 5,
    course: "Azure DevOps",
  },
]

const programs = [
  {
    title: "Full-Stack Development Track",
    duration: "6 months",
    courses: ["Python Fundamentals", "Web Development", "Database Management", "Deployment"],
    price: "₹45,000",
    placement: "100%",
    description: "Complete full-stack development program for freshers",
  },
  {
    title: "Data Analytics Track",
    duration: "4 months",
    courses: ["Excel & Statistics", "Power BI", "Python for Data", "Tableau"],
    price: "₹30,000",
    placement: "95%",
    description: "Transform data into insights with comprehensive analytics training",
  },
  {
    title: "Cloud & DevOps Track",
    duration: "5 months",
    courses: ["Linux Basics", "AWS Fundamentals", "Docker & Kubernetes", "CI/CD"],
    price: "₹40,000",
    placement: "98%",
    description: "Master cloud technologies and modern deployment practices",
  },
]

const stats = [
  { icon: Users, label: "Freshers Placed", value: "2000+" },
  { icon: Award, label: "Average Package", value: "₹4.5 LPA" },
  { icon: TrendingUp, label: "Salary Hike", value: "300%" },
  { icon: GraduationCap, label: "Success Rate", value: "96%" },
]

export default function FreshersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 text-white">
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
                <Badge className="bg-white text-sky-600 hover:bg-gray-100">🎓 Freshers Special Program</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Launch Your <span className="text-cyan-200">Tech Career</span> Today
                </h1>
                <p className="text-xl text-blue-100 max-w-lg">
                  From college graduate to industry professional in just 4-6 months. Join 2000+ freshers who transformed
                  their careers with us.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 text-lg px-8">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 bg-transparent"
                >
                  Download Brochure
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">₹4.5 LPA</div>
                  <div className="text-blue-200 text-sm">Average Package</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">96%</div>
                  <div className="text-blue-200 text-sm">Placement Rate</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Freshers Success"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-yellow-400 to-green-500 rounded-2xl -z-10" />
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

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-sky-100 text-sky-700">Freshers Programs</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-sky-600">Career Path</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specially designed programs for fresh graduates with zero experience. Start from basics and become
              job-ready in months.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-green-500 text-white">{program.placement} Placement</Badge>
                      <div className="text-2xl font-bold text-green-600">{program.price}</div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {program.duration}
                      </div>
                      <div className="text-green-600 font-semibold">{program.courses.length} Modules</div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">What You'll Learn:</h4>
                      <div className="space-y-1">
                        {program.courses.map((course, courseIndex) => (
                          <div key={courseIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-700">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Success Stories</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From <span className="text-sky-600">Freshers</span> to Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our successful graduates who transformed their careers with our programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-sky-600">{testimonial.role}</div>
                        <div className="text-xs text-gray-500">{testimonial.course}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <Badge className="bg-white text-sky-600">🚀 Limited Seats Available</Badge>
                <h2 className="text-4xl font-bold leading-tight">Ready to Start Your Tech Journey?</h2>
                <p className="text-xl text-blue-100">
                  Apply now for our next batch starting this month. Don't miss this opportunity to transform your
                  career!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Free career counseling session</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Flexible payment options available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>100% placement assistance guarantee</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white text-gray-900">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Apply for Freshers Program</CardTitle>
                  <CardDescription className="text-center">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Phone Number" type="tel" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fullstack">Full-Stack Development Track</SelectItem>
                      <SelectItem value="analytics">Data Analytics Track</SelectItem>
                      <SelectItem value="cloud">Cloud & DevOps Track</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Preferred Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="online">Online</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Tell us about your background and career goals..." />
                  <Button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-lg py-6">
                    Submit Application <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
