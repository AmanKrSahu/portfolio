"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { NewspaperHeader } from "@/components/newspaper-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import educationData from "@/data/education.json";

export default function EducationPage() {
  return (
    <main>
      {/* Newspaper Header Section */}
      <NewspaperHeader
        pageTitle={educationData.header.pageTitle}
        pageNumber={educationData.header.pageNumber}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Header */}
        <ScrollReveal>
          <h2 className="text-5xl font-bold font-serif leading-tight mb-6 border-b-2 border-black pb-4">
            {educationData.mainHeadline.title}
          </h2>
        </ScrollReveal>

        {/* Bachelor's Degree Section */}
        <ScrollReveal direction="left">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <h3 className="text-3xl font-bold font-serif mb-4">
                  {educationData.bachelors.title}
                </h3>
                <div className="text-lg font-serif text-gray-700 mb-4">
                  {educationData.bachelors.institution}
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <ScrollReveal delay={0.3}>
                  <div>
                    <Image
                      src="/images/education/image1.jpg"
                      alt="College campus"
                      width={400}
                      height={280}
                      className="w-full mb-3"
                      priority
                    />
                    <p className="text-sm italic text-gray-600 font-serif">
                      {educationData.bachelors.imageCaption}
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <div className="space-y-4">
                    {educationData.bachelors.description.map((paragraph, index) => (
                      <p
                        key={index}
                        className="font-serif text-gray-800 leading-relaxed text-justify"
                      >
                        {index === 0 && <span className="newspaper-dropcap">A</span>}
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.5}>
                <div className="p-6 border-l-4 border-black bg-gray-100">
                  <h4 className="text-xl font-bold font-serif mb-3">
                    {educationData.bachelors.achievements.title}
                  </h4>
                  <ul className="space-y-2 font-serif text-gray-800">
                    {educationData.bachelors.achievements.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={0.6}>
              <div className="space-y-6">
                <Image
                  src="/images/education/image2.jpg"
                  alt="Exam stress"
                  width={250}
                  height={320}
                  className="w-full border-2 border-black"
                />
                <p className="text-sm italic text-gray-600 font-serif">
                  {educationData.bachelors.examImageCaption}
                </p>

                <div className="border-2 border-black p-4">
                  <h4 className="text-lg font-bold font-serif mb-3">
                    {educationData.bachelors.coursework.title}
                  </h4>
                  <div className="text-sm font-serif space-y-1">
                    {educationData.bachelors.coursework.items.map((item, index) => (
                      <div key={index}>• {item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* Certifications Section */}
        <ScrollReveal direction="right">
          <div className="border-t-2 border-gray-400 pt-8 mb-12">
            <ScrollReveal delay={0.2}>
              <h3 className="text-3xl font-bold font-serif mb-6">
                {educationData.certifications.title}
              </h3>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                {educationData.certifications.items.map((cert, index) => (
                  <ScrollReveal key={index} delay={0.3 + index * 0.1}>
                    <div className="border-l-4 border-black pl-4">
                      <h4 className="text-xl font-bold font-serif mb-2">{cert.title}</h4>
                      <p className="text-sm font-serif text-gray-700">{cert.issuer}</p>
                      <p className="font-serif text-gray-800 mt-2">{cert.description}</p>
                    </div>
                  </ScrollReveal>
                ))}

                <ScrollReveal delay={0.6}>
                  <div className="text-sm font-serif mt-4">
                    <a
                      href={educationData.certifications.viewMoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-black"
                    >
                      <strong>VIEW MORE →</strong>
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.7}>
                  <div className="p-4 border border-black">
                    <h4 className="text-lg font-bold font-serif mb-2">
                      {educationData.certifications.skills.title}
                    </h4>
                    <ul className="text-sm font-serif text-gray-800 space-y-1">
                      {educationData.certifications.skills.items.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal direction="up" delay={0.8}>
                <div className="space-y-6">
                  <Image
                    src="/images/education/image3.jpg"
                    alt="Online course"
                    width={400}
                    height={200}
                    className="w-full border-2 border-black"
                  />
                  <p className="text-sm italic text-gray-600 font-serif">
                    {educationData.certifications.courseImageCaption}
                  </p>
                </div>
              </ScrollReveal>
            </div>
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
            href="/experience"
            className="text-lg font-bold font-serif text-black hover:underline"
          >
            ← BACK: EXPERIENCE
          </Link>
          <div className="text-sm font-serif text-gray-600">
            PAGE A3 • THE PORTFOLIO •{" "}
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <Link
            href="/projects"
            className="text-lg font-bold font-serif text-black hover:underline"
          >
            NEXT: PROJECTS →
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
