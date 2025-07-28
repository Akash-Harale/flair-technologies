import { BookOpen, MapPin, Users } from "lucide-react";

// Home page constants
export const homePage = {
  heroSection: {
    title: "Master In-Demand Tech Skills",
    description:
      "Join India's leading IT training institute with 100% placement  assistance. Learn from industry experts and land your dream job in tech.",
  },
  statsSection: [
    { icon: Users, label: "Students Taken Course", value: "15000+" },
    { icon: Users, label: "Students Placed", value: "13500+" },
    { icon: BookOpen, label: "Expert Trainers", value: "30+" },
    { icon: MapPin, label: "Hiring partners", value: "100" },
  ],
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
