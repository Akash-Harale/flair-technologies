"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { homePage } from "@/app/constant";
import { EnrollDialog } from "../EnrollDialog";

export default function UpcomingBatchesSection() {
  // State to manage the selected background color
  const [selectedColor, setSelectedColor] = useState("#d1fae5"); // Default to teal-100 equivalent

  // Handle color change from the color picker with typed event
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            {homePage.upcomingBatchesSection.title}
          </h2>
        </motion.div>

        {/* Color Picker */}
        <div className="mb-6 flex justify-center">
          <label className="flex items-center gap-3">
            <span className="text-gray-700 font-medium">Select Table Color:</span>
            <input
              type="color"
              value={selectedColor}
              onChange={handleColorChange}
              className="w-10 h-10 rounded-md border-2 border-gray-300 cursor-pointer hover:border-gray-900 transition-all duration-200"
            />
          </label>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="background text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">#</th>
                <th className="px-4 py-3 font-semibold">Course Name</th>
                <th className="px-4 py-3 font-semibold">Mode</th>
                <th className="px-4 py-3 font-semibold">Date & Time</th>
                <th className="px-4 py-3 font-semibold">Duration</th>
                <th className="px-4 py-3 font-semibold">Course</th>
                <th className="px-4 py-3 font-semibold">Enroll</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {homePage.upcomingBatchesSection.batches.map((batch) => (
                <tr key={batch.id} style={{ backgroundColor: selectedColor }}>
                  <td className="px-4 py-3">{batch.id}</td>
                  <td className="px-4 py-3 font-medium">{batch.name}</td>
                  <td className="px-4 py-3">{batch.mode}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col sm:flex-row sm:gap-2">
                      <span className="whitespace-nowrap">{batch.date}</span>
                      <span className="whitespace-nowrap text-xs sm:text-sm text-gray-600">{batch.time}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">{batch.duration}</td>
                  <td className="px-4 py-3 text-sky-600 font-semibold underline cursor-pointer">
                    View
                  </td>
                  <td className="px-4 py-2">
                    <EnrollDialog
                      formHeading="Enroll in Course"
                      buttonText="Enroll Now"
                      className="bg-sky-600 border border-sky-600 text-white hover:bg-sky-700 hover:text-white font-medium px-4"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}