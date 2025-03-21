import React from "react";
import { motion } from "framer-motion";

export const TracingBeam = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        className="absolute left-8 top-0 w-[1px] bg-gradient-to-b from-white/40 to-transparent"
      />
      <div className="ml-16">
        <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
        {[
          {
            title: "New Release: Cyber Nexus 2077",
            description: "Experience the future of gaming with our latest cyberpunk adventure...",
            date: "March 15, 2024"
          },
          {
            title: "Weekend Sale: 50% Off",
            description: "Get amazing discounts on selected titles this weekend...",
            date: "March 14, 2024"
          },
          {
            title: "Coming Soon: Dragon's Legacy DLC",
            description: "Prepare for new adventures with upcoming downloadable content...",
            date: "March 13, 2024"
          }
        ].map((update, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="mb-8 bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors relative group"
          >
            <div className="absolute -left-[3.2rem] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform" />
            <h3 className="text-xl font-semibold mb-2">{update.title}</h3>
            <p className="text-gray-400 mb-2">{update.description}</p>
            <span className="text-sm text-gray-500">{update.date}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};