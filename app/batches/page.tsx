"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Calendar, MapPin, Monitor, User, ExternalLink } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const batchesData = [
  {
    id: 1,
    title: "Data Analyst Freshers",
    icon: "📊",
    iconBg: "bg-green-500",
    duration: "100 Days - Daily 2 Hours",
    faculty: "Mr. Surya & Mr. Veera",
    newBatch: "September 18, 2024 @ 09:00 AM",
    sessions: "Monday to Saturday Sessions",
    mode: "Classroom - Bangalore",
    category: "Data Analytics"
  },
  {
    id: 2,
    title: "Microsoft Power BI",
    icon: "📈",
    iconBg: "bg-yellow-500",
    duration: "45 Hours",
    faculty: "Mr. Veera",
    newBatch: "September 23, 2024 @ 08:00 AM",
    sessions: "Monday to Saturday Sessions",
    mode: "Classroom - Bangalore",
    category: "Business Intelligence"
  },
  {
    id: 3,
    title: "Python FS Freshers",
    icon: "🐍",
    iconBg: "bg-blue-500",
    duration: "100 Days - Daily 2 Hours",
    faculty: "Mr. Venkat & Mr. Siva",
    newBatch: "September 16, 2024 @ 07:30 AM",
    sessions: "Monday to Saturday Sessions",
    mode: "Classroom - Bangalore",
    category: "Full-Stack Development"
  },
  {
    id: 4,
    title: "Alteryx",
    icon: "🔄",
    iconBg: "bg-blue-600",
    duration: "45 Hours",
    faculty: "Mr. Suman",
    newBatch: "September 20, 2024 @ 10:00 AM",
    sessions: "Monday to Saturday Sessions",
    mode: "Classroom - Bangalore",
    category: "Data Processing"
  },
  {
    id: 5,
    title: "SRE Modern DevOps",
    icon: "⚙️",
    iconBg: "bg-purple-600",
    duration: "100 Days - Daily 2 Hours",
    faculty: "Mr. Reddy",
    newBatch: "September 06, 2024 @ 05:00 PM",
    sessions: "Monday to Friday Sessions",
    mode: "Online",
    category: "DevOps"
  },
  {
    id: 6,
    title: "Azure DevOps",
    icon: "☁️",
    iconBg: "bg-blue-700",
    duration: "100 Hours",
    faculty: "Mr. Ramakrishna",
    newBatch: "September 16, 2024 @ 09:00 AM",
    sessions: "Monday to Saturday Sessions",
    mode: "Online",
    category: "Cloud DevOps"
  }
]

const categories = ["All", "Data Analytics", "Business Intelligence", "Full-Stack Development", "Data Processing", "DevOps", "Cloud DevOps"]

export default function BatchesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-4 bg-white text-sky-600">🎓 Register Now</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Register Now - </span>
              <span className="text-cyan-200">Upcoming Batches</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join our expert-led training programs and kickstart your career in technology. Choose from our comprehensive range of courses designed for professionals and freshers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Expert Trainers", icon: "👨‍🏫" },
              { number: "5000+", label: "Students Trained", icon: "🎓" },
              { number: "100%", label: "Placement Support", icon: "💼" },
              { number: "6", label: "Upcoming Batches", icon: "📚" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-sky-600 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Batches Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-cyan-100 text-cyan-700">🚀 Start Learning</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-sky-600">Learning Path</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Select from our carefully curated courses and join the next batch to accelerate your career growth
            </p>
          </motion.div>

          {/* Course Cards Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {batchesData.map((batch, index) => (
              <motion.div
                key={batch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full bg-white/90 backdrop-blur-sm group hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 ${batch.iconBg} rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        {batch.icon}
                      </div>
                      <div className="flex-1">
                        <Badge className="mb-2 bg-sky-100 text-sky-700 text-xs">
                          {batch.category}
                        </Badge>
                        <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                          {batch.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Duration */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                        <Clock className="h-4 w-4 text-cyan-600" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Duration</p>
                        <p className="font-semibold text-gray-900">{batch.duration}</p>
                      </div>
                    </div>

                    {/* Faculty */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-sky-600" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Faculty</p>
                        <p className="font-semibold text-gray-900">{batch.faculty}</p>
                      </div>
                    </div>

                    {/* New Batch */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">New Batch</p>
                        <p className="font-semibold text-gray-900">{batch.newBatch}</p>
                      </div>
                    </div>

                    {/* Sessions */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Schedule</p>
                        <p className="font-semibold text-gray-900">{batch.sessions}</p>
                      </div>
                    </div>

                    {/* Mode */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        {batch.mode.includes("Online") ? 
                          <Monitor className="h-4 w-4 text-orange-600" /> : 
                          <MapPin className="h-4 w-4 text-orange-600" />
                        }
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Mode</p>
                        <p className="font-semibold text-gray-900">{batch.mode}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 space-y-3 border-t border-gray-100">
                      <Button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-3">
                        ENROLL NOW
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-red-500 text-red-600 hover:bg-red-500 hover:text-white font-semibold py-3"
                      >
                        View Course <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-sky-100 text-sky-700">✨ Why Choose Us</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Makes Us <span className="text-sky-600">Different</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "👨‍💼",
                title: "Industry Expert Trainers",
                description: "Learn from professionals with 10+ years of real-world experience in their respective domains."
              },
              {
                icon: "🏢",
                title: "100% Placement Support",
                description: "Dedicated placement team with connections to 50+ hiring partners across various industries."
              },
              {
                icon: "📚",
                title: "Updated Curriculum",
                description: "Course content regularly updated to match current industry standards and requirements."
              },
              {
                icon: "🤝",
                title: "Hands-on Projects",
                description: "Work on real-world projects that you can showcase in your portfolio to potential employers."
              },
              {
                icon: "💻",
                title: "Flexible Learning",
                description: "Choose between classroom and online modes based on your convenience and schedule."
              },
              {
                icon: "🎯",
                title: "Small Batch Size",
                description: "Limited students per batch ensures personalized attention and better learning outcomes."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
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
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your <span className="text-cyan-200">Career?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't miss out on these upcoming batches. Limited seats available. Enroll now and secure your future in technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Contact Admissions Team
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sky-600 px-8 py-4 text-lg font-semibold">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}