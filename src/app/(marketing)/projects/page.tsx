"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { NewspaperHeader } from "@/components/newspaper-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import projectsData from "@/data/projects.json";

export default function PortfolioPage() {
  return (
    <main>
      {/* Newspaper Header Section */}
      <NewspaperHeader
        pageTitle={projectsData.header.pageTitle}
        pageNumber={projectsData.header.pageNumber}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Header Section */}
        <ScrollReveal>
          <h2 className="text-5xl font-bold font-serif leading-tight mb-6 border-b-2 border-black pb-4">
            {projectsData.mainHeadline.title}
          </h2>
        </ScrollReveal>

        {/* Projects List Section */}
        {projectsData.projects.map((project, index) => (
          <ScrollReveal key={project.title} direction={index % 2 === 0 ? "left" : "right"}>
            <div className={index > 0 ? "border-t-2 border-gray-400 pt-8 mb-12" : "mb-12"}>
              {/* Project Header */}
              <ScrollReveal delay={0.2}>
                <h3 className="text-3xl font-bold font-serif mb-4">{project.title}</h3>
                <div className="text-lg font-serif text-gray-700 mb-6">{project.subtitle}</div>
              </ScrollReveal>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Project Image 1 */}
                    <ScrollReveal delay={0.3}>
                      <div>
                        <Image
                          src={`/images/projects/image${index * 2 + 1}.jpg`}
                          alt={project.image1.alt}
                          width={450}
                          height={300}
                          className="w-full mb-3"
                          priority={index === 0}
                        />
                        <p className="text-sm italic text-gray-600 font-serif">
                          {project.image1.caption}
                        </p>
                      </div>
                    </ScrollReveal>

                    {/* Project Description */}
                    <ScrollReveal delay={0.4}>
                      <div className="space-y-4">
                        {project.description.map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="font-serif text-gray-800 leading-relaxed text-justify"
                          >
                            {pIndex === 0 && <span className="newspaper-dropcap">A</span>}
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Project Features */}
                  <ScrollReveal delay={0.5}>
                    <div className="p-6 border-l-4 border-black bg-gray-100">
                      <h4 className="text-xl font-bold font-serif mb-3">
                        {project.features.title}
                      </h4>
                      <ul className="space-y-2 font-serif text-gray-800">
                        {project.features.items.map((item, fIndex) => (
                          <li key={fIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Project Sidebar */}
                <ScrollReveal direction="up" delay={0.6}>
                  <div className="space-y-6">
                    <Image
                      src={`/images/projects/image${index * 2 + 2}.jpg`}
                      alt={project.image2.alt}
                      width={250}
                      height={index === 0 ? 250 : 320}
                      className="w-full border-2 border-black"
                    />
                    <p className="text-sm italic text-gray-600 font-serif">
                      {project.image2.caption}
                    </p>

                    <div className="border-2 border-black p-4">
                      <h4 className="text-lg font-bold font-serif mb-3">
                        {project.techStack.title}
                      </h4>
                      <div className="text-sm font-serif space-y-1">
                        {project.techStack.items.map((item, tIndex) => (
                          <div key={tIndex}>• {item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        ))}

        {/* View More Projects Section */}
        <ScrollReveal direction="up">
          <div className="pt-2">
            <ScrollReveal delay={0.6}>
              <div className="text-center">
                <a
                  href={projectsData.viewMore.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border-2 border-black font-serif font-bold hover:bg-black hover:text-white transition-colors"
                >
                  {projectsData.viewMore.text}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* Navigation Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t-2 border-black mt-12 pt-6 flex justify-between items-center"
        >
          <Link
            href="/education"
            className="text-lg font-bold font-serif text-black hover:underline"
          >
            ← BACK: EDUCATION
          </Link>
          <div className="text-sm font-serif text-gray-600">
            PAGE A4 • THE PORTFOLIO •{" "}
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <Link href="/" className="text-lg font-bold font-serif text-black hover:underline">
            BACK TO HOME →
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
