"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Globe } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const contactInfo = [
  {
    icon: MapPin,
    title: "Bangalore Center",
    details: [
      "#05, Vivekananda Layout, Marathahalli,", 
      "Bangalore, Karnataka – 560037, India.",
      "Landmark: Opp: Innovative Multiplex, Behind Biryani Zone"
    ],
    phone: "+91 974 974 9596",
    email: "info@flairtechnologies.in",
    web: "www.flairtechnologies.in"
  },
  {
    icon: MapPin,
    title: "Hyderabad Center",
    details: [
      "501, Sumedh Pride, Vijay Nagar Colony,", 
      "Kukatpally, Hyderabad – 500072.",
      "Landmark: Opp: Srikari Natyakala Peetam"
    ],
    phone: "+91 93477 91837",
    email: "info@flairtechnologies.in",
    web: "www.flairtechnologies.in"
  },
  {
    icon: Globe,
    title: "London Center",
    subtitle: "FLAIR TECHNOLOGIES – DATA ARTISANS",
    details: [
      "297, Suite 2, High Street",
      "North, London, E12 6SL.",
      "Landmark: Opp: Star Lettings"
    ],
    phone: "+44 20 7946 0958",
    email: "info@flairtechnologies.in",
    web: "www.flairtechnologies.in"
  },
]

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-4 bg-white text-sky-600">📞 Get In Touch</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Start Your <span className="text-cyan-200">Success Journey</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Have questions about our courses? Ready to enroll? Our expert counselors are here to guide you every step
              of the way across our global centers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-2xl border-l-4 border-cyan-400">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">FLAIR TECHNOLOGIES</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Flair Technologies refers to the process of acquiring and developing skills, knowledge, and expertise in various aspects of information technology. For admissions and details regarding courses please contact us on{" "}
                <span className="font-semibold text-sky-600">+91 974 974 9596</span> |{" "}
                <span className="font-semibold text-sky-600">info@flairtechnologies.in</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                    <MessageCircle className="h-6 w-6 text-sky-600" />
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>

                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Phone Number" type="tel" />

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="I'm interested in..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="python">Python Full-Stack Development</SelectItem>
                      <SelectItem value="powerbi">Power BI & Data Analytics</SelectItem>
                      <SelectItem value="azure">Azure DevOps</SelectItem>
                      <SelectItem value="analytics">Data Analytics</SelectItem>
                      <SelectItem value="tableau">Tableau</SelectItem>
                      <SelectItem value="network">Network Protocol</SelectItem>
                      <SelectItem value="freshers">Freshers Program</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Preferred Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="london">London</SelectItem>
                      <SelectItem value="online">Online</SelectItem>
                    </SelectContent>
                  </Select>

                  <Textarea
                    placeholder="Tell us more about your background, career goals, or any specific questions you have..."
                    className="min-h-[120px]"
                  />

                  <Button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-lg py-6">
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 text-lg mb-8">
                  We're here to help you take the next step in your career. Reach out to us through any of our global locations.
                </p>
              </div>

              {/* Office Hours */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-sky-600" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700">{schedule.day}</span>
                        <span className="font-semibold text-gray-900">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-lg py-6">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Demo Session
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white text-lg py-6 bg-transparent"
                >
                  Download Course Brochure
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-cyan-100 text-cyan-700">🌍 Global Presence</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ADMISSIONS & <span className="text-cyan-600">CONTACT</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Connect with us at any of our three strategic locations across India and the UK
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      <info.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl font-bold text-cyan-600 uppercase tracking-wide">
                      {info.title === "Bangalore Center" ? "BANGALORE" : 
                       info.title === "Hyderabad Center" ? "HYDERABAD" : "LONDON"}
                    </CardTitle>
                    <div className="h-0.5 w-12 bg-cyan-400 mx-auto"></div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {info.subtitle ? info.subtitle : "FLAIR TECHNOLOGIES"}
                      </h3>
                      <div className="space-y-1 mb-4">
                        <p className="text-gray-700 font-medium">Address:</p>
                        {info.details.slice(0, -1).map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                        <p className="text-gray-600 text-sm font-medium mt-2">
                          {info.details[info.details.length - 1]}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                          <Phone className="h-4 w-4 text-sky-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Tel:</p>
                          <p className="font-semibold text-gray-900">{info.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                          <Mail className="h-4 w-4 text-sky-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Mail:</p>
                          <p className="font-semibold text-gray-900 text-sm">{info.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                          <Globe className="h-4 w-4 text-sky-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Web:</p>
                          <p className="font-semibold text-gray-900 text-sm">{info.web}</p>
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

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Centers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Come visit us at our state-of-the-art training centers in Bangalore, Hyderabad, and London
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Bangalore Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-sky-600" />
                    Bangalore Center
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8267!2d77.6272!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0x14f808b7e45b616!2sMarathahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="256"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">#05, Vivekananda Layout, Marathahalli, Bangalore - 560037</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Hyderabad Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Hyderabad Center
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6!2d78.3872!3d17.4435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0x1c2b6e4df94db6!2sKukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="256"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">501, Sumedh Pride, Vijay Nagar Colony, Kukatpally, Hyderabad - 500072</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* London Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-cyan-600" />
                    London Center
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.123!2d0.0346!3d51.5458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sHigh%20St%20N%2C%20London%20E12%206SL%2C%20UK!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="256"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">297, Suite 2, High Street North, London, E12 6SL</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-sky-100 text-sky-700">FAQ</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-sky-600">Questions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What are the admission requirements?",
                answer:
                  "We welcome students from all backgrounds. Basic computer knowledge is helpful but not mandatory. We provide foundation courses for complete beginners.",
              },
              {
                question: "Do you provide placement assistance?",
                answer:
                  "Yes! We offer 100% placement assistance with our network of 50+ hiring partners. Our placement team works closely with students throughout their journey.",
              },
              {
                question: "Are there flexible payment options?",
                answer:
                  "We offer EMI options, scholarships for deserving students, and flexible payment plans to make quality education accessible.",
              },
              {
                question: "Can I switch between online and offline modes?",
                answer:
                  "Yes, our hybrid learning model allows you to switch between online and offline modes based on your convenience and schedule.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}