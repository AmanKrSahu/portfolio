"use client";

import { motion } from "framer-motion";

interface NewspaperHeaderProps {
  pageTitle: string;
  pageNumber: string;
}

export function NewspaperHeader({ pageTitle, pageNumber }: NewspaperHeaderProps) {
  return (
    <header className="bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Top Info Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
          <div className="whitespace-nowrap">
            NEW YORK, NY •{" "}
            {new Date().toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
          <div className="whitespace-nowrap">VOL NO. 1 • {pageNumber}</div>
        </div>

        {/* Main Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif tracking-tight mb-1 sm:mb-2 text-primary">
            THE PORTFOLIO
          </h1>
          <div className="text-xs xs:text-sm sm:text-base md:text-lg tracking-wider sm:tracking-widest text-gray-600 border-t border-b border-gray-300 py-1 sm:py-2 px-2">
            {pageTitle}
          </div>
        </motion.div>

        {/* Bottom Info Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 text-[10px] xs:text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">
          <div className="whitespace-nowrap">WEATHER: Partly Cloudy, 45°F</div>
          <div className="text-right xs:block">
            <span className="inline sm:hidden">PAGES: A2-A4</span>
            <span className="hidden sm:inline">
              INSIDE: Experience A2 • Education A3 • Portfolio A4
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
