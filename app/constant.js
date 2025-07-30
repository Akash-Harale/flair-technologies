import { BookOpen, MapPin, Users, User, Award, Monitor, Target, TrendingUp, Lightbulb, GraduationCap, Heart, Star, ArrowRight, Calendar, CheckCircle, Clock, ExternalLink } from "lucide-react";

// Home page constants
export const homePage = {
  heroSection: {
    title: "Master In-Demand Tech Skills",
    description:
      "Join India's leading IT training institute with 100% placement assistance. Learn from industry experts and land your dream job in tech.",
    stats: [
      { value: "13500+", label: "Students Placed" },
      { value: "100%", label: "Placement Rate" },
      { value: "2", label: "Cities" },
    ],
  },
  statsSection: [
    { icon: Users, label: "Students Taken Course", value: "15000+" },
    { icon: Users, label: "Students Placed", value: "13500+" },
    { icon: BookOpen, label: "Expert Trainers", value: "30+" },
    { icon: MapPin, label: "Hiring partners", value: "100+" },
  ],
  aboutSection: {
    title: "About Flair Technologies",
    badge: "Know Who We Are",
    description:
      "Since 2018, Flair Technologies has grown to become the largest independent IT training institute in Bangalore. We offer cutting-edge technology training, certified instructors, real-world implementation, and consultancy. Whether you’re a multinational or a small business, we bring the right skills, research, and execution strategies. From simple static sites to complex enterprise systems, we help you deliver your message effectively.",
    image:
      "https://media.istockphoto.com/id/2042526830/photo/successful-businesswoman-using-laptop-working-in-office-business-technology-corporate-concept.jpg?s=612x612&w=0&k=20&c=-NJyxcMesUAKzzPwoHXC10ZuBHPGa1dRp1gFl2T37o8=",
    imageAlt: "Students learning in class",
  },
  learningExperienceSection: {
    title: "The Best Learning Experience",
    features: [
      "Learn from the World’s Best Faculty & Industry Experts.",
      "Instructor-led training with practical lab sessions.",
      "Customized learning scaled to your corporate needs.",
      "Real-time projects and certification guidance.",
      "Personalized guidance with 24×7 support.",
    ],
    image:
      "https://flairtechnologies.in/wp-content/uploads/2023/08/about-us.jpg",
    imageAlt: "Virtual learning session",
  },
  whyFlairSection: {
    title: "Why Flair Technologies",
    items: [
      {
        title: "Expert Trainers",
        description:
          "Instructors are certified and highly qualified with decades of experience in the subject matter.",
      },
      {
        title: "Placement Assistance",
        description:
          "Our Placement Officer will send for Interviews till you Get Placed. 100% assistance is given.",
      },
      {
        title: "Full hands-on Training",
        description:
          "We support any training with more practical classes, so we prefer to give hands-on training.",
      },
      {
        title: "Interview Preparation",
        description:
          "Our Experienced Trainers will help Get your Resume Ready with real case studies and examples.",
      },
      {
        title: "Industry Oriented Training",
        description:
          "Our trainers are highly equipped with experience of over 10+ years and teach to industry standards.",
      },
      {
        title: "Unlimited Lab Support",
        description:
          "Be assured of your success on the certification exam. 100% money-back guarantee otherwise.",
      },
    ],
  },
  benefitsSection: {
    title: "Benefits Of Flair Technologies",
    benefits: [
      "100% Placement Assistance",
      "Weekdays/Weekend LIVE classes",
      "One-on-One with Mentors",
      "Free Demo Classes",
      "Industry Oriented Projects",
      "Instructors are from MNC’s",
      "Lab Sessions",
      "Doubt Clearance Sessions",
      "Designed by Industry experts",
      "Recognized certification",
    ],
  },
  upcomingBatchesSection: {
    title: "Register Now - Upcoming Batches",
    batches: [
      {
        id: 1,
        name: "Microsoft Power BI",
        mode: "Classroom - BLR",
        faculty: "Mr. Veera",
        date: "Apr 10, 2024",
        time: "08:15 AM",
        duration: "45 Hours",
      },
      {
        id: 2,
        name: "Alteryx Designer",
        mode: "Classroom - BLR",
        faculty: "Mr. Suman",
        date: "May 01, 2024",
        time: "09:00 AM",
        duration: "45 Hours",
      },
      {
        id: 3,
        name: "Python Fullstack",
        mode: "Classroom - BLR",
        faculty: "Mr. Venkat",
        date: "May 01, 2024",
        time: "07:30 AM",
        duration: "100 Days",
      },
      {
        id: 4,
        name: "Data Analyst - Freshers",
        mode: "Classroom - BLR",
        faculty: "Mr. Surya",
        date: "May 01, 2024",
        time: "09:00 AM",
        duration: "100 Days",
      },
      {
        id: 5,
        name: "SRE Modern DevOps",
        mode: "Online",
        faculty: "Mr. P R Reddy",
        date: "Apr 20, 2024",
        time: "07:00 AM",
        duration: "100 Days",
      },
      {
        id: 6,
        name: "DevOps Workshop",
        mode: "Online",
        faculty: "Mr. Viswanath",
        date: "Apr 22, 2024",
        time: "08:15 PM",
        duration: "100 Hours",
      },
      {
        id: 7,
        name: "Azure with Azure DevOps",
        mode: "Online",
        faculty: "Mr. Rama Krishna",
        date: "May 01, 2024",
        time: "08:00 AM",
        duration: "100 Hours",
      },
    ],
  },
  whyChooseUsSection: {
    title: "Your Success is Our Priority",
    badge: "Why Choose Flair Technologies",
    features: [
      {
        icon: User,
        title: "Expert Mentors from MNCs",
        description:
          "Learn from industry professionals working in top companies like Google, Microsoft, Amazon",
      },
      {
        icon: Award,
        title: "100% Placement Assistance",
        description:
          "Guaranteed job placement support with our extensive network of hiring partners",
      },
      {
        icon: BookOpen,
        title: "Real-World Projects",
        description:
          "Work on live projects and build a portfolio that showcases your skills to employers",
      },
      {
        icon: Users,
        title: "Small Batch Sizes",
        description:
          "Personalized attention with maximum 15 students per batch for better learning",
      },
      {
        icon: Monitor,
        title: "Flexible Learning",
        description:
          "Choose between online, offline, or hybrid modes based on your convenience",
      },
      {
        icon: MapPin,
        title: "Prime Locations",
        description:
          "Conveniently located centers in Bangalore and Hyderabad with modern facilities",
      },
    ],
  },
  ctaSection: {
    title: "Ready to Transform Your Career?",
    description:
      "Join thousands of successful professionals who started their tech journey with Flair Technologies. Your dream job is just one course away!",
  },
  featuredCoursesSection: {
    title: "Master High-Demand Skills",
    description:
      "Choose from our industry-aligned courses designed by experts and delivered by professionals from top MNCs",
    featuredCourses: [
      {
        id: "python-fullstack",
        title: "Python Full-Stack Development",
        description: "Master Django, React, and modern web development",
        duration: "6 months",
        mode: "Online/Offline",
        price: "₹45,000",
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240415204701/How-to-Become-a-Python-Full-Stack-Developer.png",
      },
      {
        id: "power-bi",
        title: "Power BI & Data Analytics",
        description: "Transform data into actionable business insights",
        duration: "3 months",
        mode: "Online/Offline",
        price: "₹25,000",
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240726121444/Data-Analytics-Training-now.webp",
      },
      {
        id: "azure-devops",
        title: "Azure DevOps",
        description: "Master cloud deployment and CI/CD pipelines",
        duration: "4 months",
        mode: "Online/Offline",
        price: "₹35,000",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Mpx-7k0FvYWzb8n8snbXGKMKM-YWg0Vlsg&s",
      },
    ],
  },
};

// About page constants
export const aboutPage = {
  heroSection: {
    badge: "🏢 About Flair Technologies",
    title: "Empowering <span className=\"text-cyan-200\">Careers</span> Through Innovation",
    description:
      "Since 2018, we've been transforming lives by bridging the gap between academic learning and industry requirements. Our mission is to create skilled professionals ready for the digital future.",
    stats: [
      { value: "15000+", label: "Students Trained" },
      { value: "6", label: "Years of Excellence" },
    ],
    image: "https://www.deazy.com/hubfs/remote%20team%20meeting.png",
    imageAlt: "Flair Technologies",
  },
  missionVisionSection: {
    mission: {
      title: "Our Mission",
      icon: Target,
      description:
        "To empower individuals with cutting-edge technical skills and industry knowledge, enabling them to build successful careers in the rapidly evolving technology landscape. We are committed to providing world-class training, mentorship, and placement support to bridge the gap between academic learning and industry requirements.",
    },
    vision: {
      title: "Our Vision",
      icon: BookOpen,
      description:
        "To become India's leading IT training institute, recognized for excellence in education, innovation in teaching methodologies, and outstanding placement records. We envision a future where every student who walks through our doors emerges as a confident, skilled professional ready to make a meaningful impact in the tech industry.",
    },
  },
  uniqueFeaturesSection: {
    title: "Our <span className=\"text-cyan-600\">Distinctive</span> Approach",
    badge: "What Makes Us Unique",
    description:
      "Discover the key pillars that set Flair Technologies apart in the competitive training landscape",
    features: [
      {
        icon: Lightbulb,
        title: "INVENTIVE AND LEADERSHIP",
        description:
          "Flair Technologies is a leading training organization that caters to the latest technology and innovation. We are also pioneers in providing training in diverse Software fields like Python, Azure Admin, Azure DevOps, DevOps & AWS, Microsoft Power BI, Azure Data Factory, Alteryx, Microsoft Excel (VBA), Power Apps & Automate, Tableau, Testing Tools, C & Network Protocol, Web Development etc… We believe, in offering the finest standards of quality and processes that are constantly updated and adapted to the changing global scenario.",
        highlight:
          "We are dedicated to guiding industry professionals and students to competently compete and confirm international standards of quality employee efficiency and productivity.",
      },
      {
        icon: GraduationCap,
        title: "TRAINING METHODOLOGY",
        description:
          "Flair Technologies' unique training methodology is designed to provide the complete spectrum skills in a very interactive and easy to learn manner. Training is delivered by highly core and certified professionals. Our faculty is always with their high spirit to deliver their best. Our training methodology seeks to deal with the whole gamut of new skills and techniques the IT industry requires.",
        highlight:
          "Our training methodology is unique and diverse and focuses on every area towards overall development of an individual.",
      },
      {
        icon: Heart,
        title: "SMOOTH APPROACH TOWARDS CUSTOMER",
        description:
          "Most people find themselves at crossroads in their careers. They are having self-seeking goals, values, hard work, and waiting and yet they feel that the matter of career is confusing. Job hopping is another demerit or comes up from intense insecurity. With fluctuating job market, the skills present in an individual need to be further enhanced.",
        highlight:
          "We understand the environment fluctuating the job market. Our counselor evaluates the current positive finding in an individual and suggests areas of improvement. Our counselor gives the best remedy to an individual.",
      },
      {
        icon: Star,
        title: "OUR UNIQUENESS",
        description:
          "Our uniqueness replicates in many tangible and nontangible facets, just like our eminent workplace, staff & training methodology. We at Flair Technologies believe in meticulous practices & integrated solution based approach. Altogether this gives our clients a supreme advantage. We have honed our processes through experience and the incorporation of best practices in the training fraternity.",
        highlight:
          "Flair Technologies is an incredibly well-equipped training and development organization. We are dedicated to pursuing solutions to problems. Our distinctiveness lies in unmatched courseware, training techniques, and International affiliation with global giants.",
      },
    ],
  },
  valuesSection: {
    title: "What <span className=\"text-sky-600\">Drives</span> Us",
    badge: "Our Values",
    description:
      "Our core values guide everything we do, from curriculum design to student support",
    values: [
      {
        icon: Target,
        title: "Excellence in Education",
        description:
          "We strive to deliver the highest quality training with industry-relevant curriculum and hands-on experience.",
      },
      {
        icon: Users,
        title: "Student-Centric Approach",
        description:
          "Every decision we make is focused on student success, from course design to placement assistance.",
      },
      {
        icon: Award,
        title: "Industry Relevance",
        description:
          "Our courses are constantly updated to match current industry demands and emerging technologies.",
      },
      {
        icon: TrendingUp,
        title: "Continuous Innovation",
        description:
          "We embrace new teaching methodologies and technologies to enhance the learning experience.",
      },
    ],
  },
  milestonesSection: {
    title: "<span className=\"text-sky-600\">Milestones</span> That Define Us",
    badge: "Our Journey",
    milestones: [
      {
        year: "2018",
        event: "Founded Flair Technologies",
        description: "Started with a vision to bridge the skill gap in IT industry",
      },
      {
        year: "2019",
        event: "First 100 Students Placed",
        description: "Achieved 100% placement rate in our first year",
      },
      {
        year: "2020",
        event: "Expanded to Hyderabad",
        description: "Opened our second training center to serve more students",
      },
      {
        year: "2021",
        event: "Launched Online Programs",
        description: "Adapted to digital learning during pandemic",
      },
      {
        year: "2022",
        event: "2000+ Students Trained",
        description: "Crossed the milestone of training 2000+ professionals",
      },
      {
        year: "2023",
        event: "Industry Partnerships",
        description: "Partnered with 50+ companies for direct placements",
      },
      {
        year: "2024",
        event: "5000+ Success Stories",
        description: "Celebrating 5000+ successful career transformations",
      },
    ],
  },
  leadershipSection: {
    title: "Meet Our <span className=\"text-cyan-600\">Leaders</span>",
    badge: "Leadership Team",
    description:
      "Experienced professionals leading the way in technology education and career development",
    team: [
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
    ],
  },
  flairTechnologiesSection: {
    title: "We're The Best",
    description:
      "Since 2018, Flair Technologies has become the largest independent IT training institute in Bangalore. Flair Technologies offer most advanced technologies than any other training company. Businesses and individuals can choose from the course offerings, delivered by certified experts. We believe that Flair Technologies offers excellence at every level, in terms of technical training, project implementation, consultancy, or applying our experience working and research into successful techniques.",
    image:
      "https://img.freepik.com/premium-photo/happy-young-african-woman-casually-dressed-standing-isolated-taking-notes-notepad_171337-70180.jpg",
    imageAlt: "Flair Technologies",
    button: {
      text: "View Service",
      href: "/services",
    },
  },
  ctaSection: {
    title: "Ready to Join Our Success Story?",
    description:
      "Become part of the Flair Technologies family and transform your career with industry-leading training and guaranteed placement support.",
    buttons: [
      {
        text: "Explore Courses",
        href: "/courses",
        className: "bg-white text-sky-600 hover:bg-gray-100 text-lg px-8",
        icon: ArrowRight,
      },
      {
        text: "Contact Us",
        href: "/contact",
        className: "border-white text-white hover:bg-white hover:text-sky-600 text-lg px-8 bg-transparent",
        variant: "outline",
      },
    ],
  },
};

// Freshers page constants
export const freshersPage = { 
  heroSection: {
    badge: "🎓 Freshers Special Program",
    title: "Launch Your <span className=\"text-cyan-200\">Tech Career</span> Today",
    description:
      "From college graduate to industry professional in just 4-6 months. Join 2000+ freshers who transformed their careers with us.",
    stats: [
      { value: "₹4.5 LPA", label: "Average Package" },
      { value: "96%", label: "Placement Rate" },
    ],
    image: "https://pkrinstitute.in/lp/wp-content/uploads/2024/02/Untitled-design-1.jpg",
    imageAlt: "Freshers Success",
    buttons: [
      {
        text: "Apply Now",
        className: "bg-white text-sky-600 hover:bg-gray-100 text-lg px-8",
        icon: ArrowRight,
      },
      {
        text: "Download Brochure",
        className: "border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 bg-transparent",
        variant: "outline",
      },
    ],
  },
  statsSection: [
    { icon: Users, label: "Freshers Placed", value: "2000+" },
    { icon: Award, label: "Average Package", value: "₹4.5 LPA" },
    { icon: TrendingUp, label: "Salary Hike", value: "300%" },
    { icon: GraduationCap, label: "Success Rate", value: "96%" },
  ],
  programsSection: {
    badge: "Freshers Programs",
    title: "Choose Your <span className=\"text-sky-600\">Career Path</span>",
    description:
      "Specially designed programs for fresh graduates with zero experience. Start from basics and become job-ready in months.",
    programs: [
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
    ],
  },
  testimonialsSection: {
    badge: "Success Stories",
    title: "From <span className=\"text-sky-600\">Freshers</span> to Professionals",
    description:
      "Hear from our successful graduates who transformed their careers with our programs",
    testimonials: [
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
    ],
  },
  applicationFormSection: {
    badge: "🚀 Limited Seats Available",
    title: "Ready to Start Your Tech Journey?",
    description:
      "Apply now for our next batch starting this month. Don't miss this opportunity to transform your career!",
    features: [
      "Free career counseling session",
      "Flexible payment options available",
      "100% placement assistance guarantee",
    ],
    form: {
      title: "Apply for Freshers Program",
      description: "Fill out the form below and we'll get back to you within 24 hours",
      fields: [
        { type: "text", placeholder: "First Name", grid: "col-span-1" },
        { type: "text", placeholder: "Last Name", grid: "col-span-1" },
        { type: "email", placeholder: "Email Address" },
        { type: "tel", placeholder: "Phone Number" },
        {
          type: "select",
          placeholder: "Select Program",
          options: [
            { value: "fullstack", label: "Full-Stack Development Track" },
            { value: "analytics", label: "Data Analytics Track" },
            { value: "cloud", label: "Cloud & DevOps Track" },
          ],
        },
        {
          type: "select",
          placeholder: "Preferred Location",
          options: [
            { value: "bangalore", label: "Bangalore" },
            { value: "hyderabad", label: "Hyderabad" },
            { value: "online", label: "Online" },
          ],
        },
        { type: "textarea", placeholder: "Tell us about your background and career goals..." },
      ],
      submitButton: {
        text: "Submit Application",
        className: "w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-lg py-6",
        icon: ArrowRight,
      },
      disclaimer: "By submitting this form, you agree to our Terms of Service and Privacy Policy",
    },
  },
};

// Batches page constants
export const batchesPage = {
  heroSection: {
    badge: "🎓 Register Now",
    title: "Register Now - <span className=\"text-cyan-200\">Upcoming Batches</span>",
    description:
      "Join our expert-led training programs and kickstart your career in technology. Choose from our comprehensive range of courses designed for professionals and freshers.",
  },
  statsSection: [
    { icon: User, label: "Expert Trainers", value: "50+", emoji: "👨‍🏫" },
    { icon: GraduationCap, label: "Students Trained", value: "5000+", emoji: "🎓" },
    { icon: Award, label: "Placement Support", value: "100%", emoji: "💼" },
    { icon: BookOpen, label: "Upcoming Batches", value: "6", emoji: "📚" },
  ],
  batchesSection: {
    badge: "🚀 Start Learning",
    title: "Choose Your <span className=\"text-sky-600\">Learning Path</span>",
    description:
      "Select from our carefully curated courses and join the next batch to accelerate your career growth",
    batches: [
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
        category: "Data Analytics",
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
        category: "Business Intelligence",
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
        category: "Full-Stack Development",
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
        category: "Data Processing",
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
        category: "DevOps",
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
        category: "Cloud DevOps",
      },
    ],
    categories: ["All", "Data Analytics", "Business Intelligence", "Full-Stack Development", "Data Processing", "DevOps", "Cloud DevOps"],
  },
  whyChooseUsSection: {
    badge: "✨ Why Choose Us",
    title: "What Makes Us <span className=\"text-sky-600\">Different</span>",
    features: [
      {
        emoji: "👨‍💼",
        title: "Industry Expert Trainers",
        description: "Learn from professionals with 10+ years of real-world experience in their respective domains.",
      },
      {
        emoji: "🏢",
        title: "100% Placement Support",
        description: "Dedicated placement team with connections to 50+ hiring partners across various industries.",
      },
      {
        emoji: "📚",
        title: "Updated Curriculum",
        description: "Course content regularly updated to match current industry standards and requirements.",
      },
      {
        emoji: "🤝",
        title: "Hands-on Projects",
        description: "Work on real-world projects that you can showcase in your portfolio to potential employers.",
      },
      {
        emoji: "💻",
        title: "Flexible Learning",
        description: "Choose between classroom and online modes based on your convenience and schedule.",
      },
      {
        emoji: "🎯",
        title: "Small Batch Size",
        description: "Limited students per batch ensures personalized attention and better learning outcomes.",
      },
    ],
  },
  ctaSection: {
    title: "Ready to Transform Your <span className=\"text-cyan-200\">Career?</span>",
    description:
      "Don't miss out on these upcoming batches. Limited seats available. Enroll now and secure your future in technology.",
    buttons: [
      {
        text: "Contact Admissions Team",
        className: "bg-white text-sky-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold",
      },
      {
        text: "Download Brochure",
        className: "bg-white text-sky-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold",
      },
    ],
  },
};