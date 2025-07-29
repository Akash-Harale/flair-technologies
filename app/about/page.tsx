"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, BookOpen, Target, TrendingUp, ArrowRight, Lightbulb, GraduationCap, Heart, Star } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const milestones = [
  {
    year: "2018",
    event: "Founded Flair Technologies",
    description: "Started with a vision to bridge the skill gap in IT industry",
  },
  { year: "2019", event: "First 100 Students Placed", description: "Achieved 100% placement rate in our first year" },
  {
    year: "2020",
    event: "Expanded to Hyderabad",
    description: "Opened our second training center to serve more students",
  },
  { year: "2021", event: "Launched Online Programs", description: "Adapted to digital learning during pandemic" },
  {
    year: "2022",
    event: "2000+ Students Trained",
    description: "Crossed the milestone of training 2000+ professionals",
  },
  { year: "2023", event: "Industry Partnerships", description: "Partnered with 50+ companies for direct placements" },
  { year: "2024", event: "5000+ Success Stories", description: "Celebrating 5000+ successful career transformations" },
]

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    experience: "15+ years",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Former Tech Lead at Microsoft with a passion for education and skill development",
  },
  {
    name: "Priya Sharma",
    role: "Head of Training",
    experience: "12+ years",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Ex-Amazon engineer specializing in full-stack development and data analytics",
  },
  {
    name: "Arjun Patel",
    role: "Placement Director",
    experience: "10+ years",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Former HR Director at TCS with extensive industry connections and placement expertise",
  },
]

const values = [
  {
    icon: Target,
    title: "Excellence in Education",
    description:
      "We strive to deliver the highest quality training with industry-relevant curriculum and hands-on experience.",
  },
  {
    icon: Users,
    title: "Student-Centric Approach",
    description: "Every decision we make is focused on student success, from course design to placement assistance.",
  },
  {
    icon: Award,
    title: "Industry Relevance",
    description: "Our courses are constantly updated to match current industry demands and emerging technologies.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description: "We embrace new teaching methodologies and technologies to enhance the learning experience.",
  },
]

const uniqueFeatures = [
  {
    icon: Lightbulb,
    title: "INVENTIVE AND LEADERSHIP",
    description: "Flair Technologies is a leading training organization that caters to the latest technology and innovation. We are also pioneers in providing training in diverse Software fields like Python, Azure Admin, Azure DevOps, DevOps & AWS, Microsoft Power BI, Azure Data Factory, Alteryx, Microsoft Excel (VBA), Power Apps & Automate, Tableau, Testing Tools, C & Network Protocol, Web Development etc… We believe, in offering the finest standards of quality and processes that are constantly updated and adapted to the changing global scenario.",
    highlight: "We are dedicated to guiding industry professionals and students to competently compete and confirm international standards of quality employee efficiency and productivity."
  },
  {
    icon: GraduationCap,
    title: "TRAINING METHODOLOGY",
    description: "Flair Technologies' unique training methodology is designed to provide the complete spectrum skills in a very interactive and easy to learn manner. Training is delivered by highly core and certified professionals. Our faculty is always with their high spirit to deliver their best. Our training methodology seeks to deal with the whole gamut of new skills and techniques the IT industry requires.",
    highlight: "Our training methodology is unique and diverse and focuses on every aspect of an individual. We concentrate on every area towards overall development of an individual."
  },
  {
    icon: Heart,
    title: "SMOOTH APPROACH TOWARDS CUSTOMER",
    description: "Most people find themselves at crossroads in their careers. They are having self-seeking goals, values, hard work, and waiting and yet they feel that the matter of career is confusing. Job hopping is another demerit or comes up from intense insecurity. With fluctuating job market, the skills present in an individual need to be further enhanced.",
    highlight: "We understand the environment fluctuating the job market. Our counselor evaluates the current positive finding in an individual and suggests areas of improvement. Our counselor gives the best remedy to an individual."
  },
  {
    icon: Star,
    title: "OUR UNIQUENESS",
    description: "Our uniqueness replicates in many tangible and nontangible facets, just like our eminent workplace, staff & training methodology. We at Flair Technologies believe in meticulous practices & integrated solution based approach. Altogether this gives our clients a supreme advantage. We have honed our processes through experience and the incorporation of best practices in the training fraternity.",
    highlight: "Flair Technologies is an incredibly well-equipped training and development organization. We are dedicated to pursuing solutions to problems. Our distinctiveness lies in unmatched courseware, training techniques, and International affiliation with global giants."
  }
]

export default function AboutPage() {
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
                <Badge className="bg-white text-sky-600">🏢 About Flair Technologies</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Empowering <span className="text-cyan-200">Careers</span> Through Innovation
                </h1>
                <p className="text-xl text-blue-100">
                  Since 2018, we've been transforming lives by bridging the gap between academic learning and industry
                  requirements. Our mission is to create skilled professionals ready for the digital future.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">15000+</div>
                  <div className="text-blue-200 text-sm">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">6</div>
                  <div className="text-blue-200 text-sm">Years of Excellence</div>
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
                src="https://www.deazy.com/hubfs/remote%20team%20meeting.png"
                width={"720px"}
                height={"480px"}
                alt="Flair Technologies"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-sky-600 flex items-center gap-2">
                    <Target className="h-6 w-6" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To empower individuals with cutting-edge technical skills and industry knowledge, enabling them to
                    build successful careers in the rapidly evolving technology landscape. We are committed to providing
                    world-class training, mentorship, and placement support to bridge the gap between academic learning
                    and industry requirements.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600 flex items-center gap-2">
                    <BookOpen className="h-6 w-6" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To become India's leading IT training institute, recognized for excellence in education, innovation
                    in teaching methodologies, and outstanding placement records. We envision a future where every
                    student who walks through our doors emerges as a confident, skilled professional ready to make a
                    meaningful impact in the tech industry.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-cyan-100 text-cyan-700">What Makes Us Unique</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-cyan-600">Distinctive</span> Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the key pillars that set Flair Technologies apart in the competitive training landscape
            </p>
          </motion.div>

          <div className="space-y-12">
            {uniqueFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white">
                          <feature.icon className="h-8 w-8" />
                        </div>
                      </div>
                      <div className="flex-1 space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
                          {feature.title}
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="bg-gradient-to-r from-sky-50 to-cyan-50 p-4 rounded-lg border-l-4 border-sky-500">
                          <p className="text-gray-800 font-medium italic">
                            {feature.highlight}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-sky-100 text-sky-700">Our Values</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What <span className="text-sky-600">Drives</span> Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do, from curriculum design to student support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Our Journey</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-sky-600">Milestones</span> That Define Us
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-500 to-blue-600 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-sky-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-cyan-100 text-cyan-700">Leadership Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-cyan-600">Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals leading the way in technology education and career development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white text-gray-900">{member.experience}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-sky-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flair Technologies Section from Image */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/happy-young-african-woman-casually-dressed-standing-isolated-taking-notes-notepad_171337-70180.jpg" // Replace with actual base64 or URL of the image
                alt="Flair Technologies"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-cyan-600 mb-4">We're The Best</h1>
              <p className="text-gray-700 text-lg mb-6">
                Since 2014, Flair Technologies has become the largest independent IT training institute in Bangalore. Flair Technologies offer most advanced technologies than any other training company. Businesses and individuals can choose from the course offerings, delivered by certified experts. We believe that Flair technologies offers excellence at every level, in terms of technical training, project implementation, consultancy, or applying our experience working and research into successful techniques.
              </p>
              <a href="/services">
                <Button className="bg-cyan-600 text-white hover:bg-cyan-700">View Service</Button>
              </a>
            </div>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Join Our Success Story?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Become part of the Flair Technologies family and transform your career with industry-leading training and
              guaranteed placement support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 text-lg px-8">
                  Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-sky-600 text-lg px-8 bg-transparent"
                >
                  Contact Us
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