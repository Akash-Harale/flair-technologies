"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const courses = [
    { name: "Python Full-Stack", href: "/courses/python-fullstack" },
    { name: "Power BI", href: "/courses/power-bi" },
    { name: "Azure DevOps", href: "/courses/azure-devops" },
    { name: "Data Analytics", href: "/courses/data-analytics" },
    { name: "Tableau", href: "/courses/tableau" },
    { name: "Network Protocol", href: "/courses/network-protocol" },
  ];
  const services = [
    { name: "IT Training", href: "/services/it-training" },
    { name: "IT Consulting", href: "/services/it-consulting" },
    { name: "IT Outsourcing", href: "/services/it-outsourcing" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 icon-button-color rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Flair Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-gray-700 hover:text-sky-600 transition-colors ${
                pathname === "/" ? "text-sky-600 font-semibold" : ""
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-gray-700 hover:text-sky-600 transition-colors ${
                pathname === "/about" ? "text-sky-600 font-semibold" : ""
              }`}
            >
              About
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center text-gray-700 hover:text-sky-600 transition-colors ${
                  services.some((service) => pathname === service.href)
                    ? "text-sky-600 font-semibold"
                    : ""
                }`}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link
                      href={service.href}
                      className={`w-full ${
                        pathname === service.href
                          ? "text-sky-600 font-semibold"
                          : "text-gray-700 hover:text-sky-600"
                      }`}
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center text-gray-700 hover:text-sky-600 transition-colors ${
                  courses.some((course) => pathname === course.href)
                    ? "text-sky-600 font-semibold"
                    : ""
                }`}
              >
                Courses <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {courses.map((course) => (
                  <DropdownMenuItem key={course.href} asChild>
                    <Link
                      href={course.href}
                      className={`w-full ${
                        pathname === course.href
                          ? "text-sky-600 font-semibold"
                          : "text-gray-700 hover:text-sky-600"
                      }`}
                    >
                      {course.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <Link
                    href="/courses"
                    className={`w-full font-semibold ${
                      pathname === "/courses" ? "text-sky-600" : "text-gray-700 hover:text-sky-600"
                    }`}
                  >
                    View All Courses
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/freshers"
              className={`text-gray-700 hover:text-sky-600 transition-colors ${
                pathname === "/freshers" ? "text-sky-600 font-semibold" : ""
              }`}
            >
              Freshers Program
            </Link>
            <Link
              href="/batches"
              className={`text-gray-700 hover:text-sky-600 transition-colors ${
                pathname === "/batches" ? "text-sky-600 font-semibold" : ""
              }`}
            >
              Batches
            </Link>
            <Link
              href="/contact"
              className={`text-gray-700 hover:text-sky-600 transition-colors ${
                pathname === "/contact" ? "text-sky-600 font-semibold" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white bg-transparent"
            >
              Book Demo
            </Button>
            <Button className="icon-button-color hover:from-sky-600 hover:to-blue-700">
              Enroll Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 py-4"
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-gray-700 hover:text-sky-600 transition-colors ${
                  pathname === "/" ? "text-sky-600 font-semibold" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-gray-700 hover:text-sky-600 transition-colors ${
                  pathname === "/about" ? "text-sky-600 font-semibold" : ""
                }`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`text-gray-700 hover:text-sky-600 transition-colors ${
                  services.some((service) => pathname === service.href)
                    ? "text-sky-600 font-semibold"
                    : ""
                }`}
              >
                Services
              </Link>
              <Link
                href="/courses"
                className={`text-gray-700 hover:text-sky-600 transition-colors ${
                  courses.some((course) => pathname === course.href) || pathname === "/courses"
                    ? "text-sky-600 font-semibold"
                    : ""
                }`}
              >
                Courses
              </Link>
              <Link
                href="/freshers"
                className={`text-gray-700 hover:text-sky-600 transition-colors ${
                  pathname === "/freshers" ? "text-sky-600 font-semibold" : ""
                }`}
              >
                Freshers Program
              </Link>
              <Link
                href="/batches"
                className={`text-gray-700 hover:text-sky-600 transition-colors ${
                  pathname === "/batches" ? "text-sky-600 font-semibold" : ""
                }`}
              >
                Batches
              </Link>
              <Link
                href="/contact"
                className={`text-gray-700 hover:text-sky-600 transition-colors ${
                  pathname === "/contact" ? "text-sky-600 font-semibold" : ""
                }`}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  className="border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white bg-transparent"
                >
                  Book Demo
                </Button>
                <Button className="icon-button-color hover:from-sky-600 hover:to-blue-700">
                  Enroll Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}