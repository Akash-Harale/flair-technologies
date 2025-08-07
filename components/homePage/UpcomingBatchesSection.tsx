"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { homePage } from "@/app/constant";
import { EnrollDialog } from "../EnrollDialog";

export default function UpcomingBatchesSection() {
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
              {homePage.upcomingBatchesSection.batches.map((batch, index) => (
                <tr
                  key={batch.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="px-4 py-3">{batch.id}</td>
                  <td className="px-4 py-3 font-medium">{batch.name}</td>
                  <td className="px-4 py-3">{batch.mode}</td>
                  <td className="px-4 py-3">{`${batch.date} ${batch.time}`}</td>
                  <td className="px-4 py-3">{batch.duration}</td>
                  <td className="px-4 py-3 text-sky-600 font-semibold underline cursor-pointer">
                    View
                  </td>
                  <td className="px-4 py-2">
                    <EnrollDialog
                      formHeading="Enroll in Course"
                      buttonText="Enroll Now"
                      className="bg-sky-600 border border-sky-600 text-white hover:bg-sky-700 hover:text-white  font-medium px-4 "
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
