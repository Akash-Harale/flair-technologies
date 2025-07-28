import { BookOpen, MapPin, Users, User, Award, Monitor } from "lucide-react";

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
      "Since 2014, Flair Technologies has grown to become the largest independent IT training institute in Bangalore. We offer cutting-edge technology training, certified instructors, real-world implementation, and consultancy. Whether you’re a multinational or a small business, we bring the right skills, research, and execution strategies. From simple static sites to complex enterprise systems, we help you deliver your message effectively.",
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