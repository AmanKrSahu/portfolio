"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { NewspaperHeader } from "@/components/newspaper-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import experienceData from "@/data/experience.json";

export default function ExperiencePage() {
  return (
    <main>
      {/* Newspaper Header */}
      <NewspaperHeader
        pageTitle={experienceData.header.title}
        pageNumber={experienceData.header.pageNumber}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Header */}
        <ScrollReveal>
          <h2 className="text-5xl font-bold font-serif leading-tight mb-6 border-b-2 border-black pb-4">
            {experienceData.mainHeadline.title}
          </h2>
        </ScrollReveal>

        {/* Internship Experience */}
        <ScrollReveal direction="left">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <h3 className="text-3xl font-bold font-serif mb-4">
                  {experienceData.internship.title}
                </h3>
                <div className="text-lg font-serif text-gray-700 mb-4">
                  {experienceData.internship.company} • {experienceData.internship.duration}
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <ScrollReveal delay={0.3}>
                  <div>
                    <Image
                      src={`/images/experience/${experienceData.internship.image1.src}`}
                      alt={experienceData.internship.image1.alt}
                      width={400}
                      height={250}
                      className="w-full mb-3"
                      priority
                    />
                    <p className="text-sm italic text-gray-600 font-serif">
                      {experienceData.internship.image1.caption}
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <div className="space-y-4">
                    {experienceData.internship.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="font-serif text-gray-800 leading-relaxed text-justify"
                      >
                        {index === 0 ? <span className="newspaper-dropcap">A</span> : null}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: index === 0 ? paragraph.substring(1) : paragraph,
                          }}
                        />
                      </p>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.5}>
                <div className="bg-gray-100 p-6 border-l-4 border-black">
                  <h4 className="text-xl font-bold font-serif mb-3">
                    {experienceData.internship.achievements.title}
                  </h4>
                  <ul className="space-y-2 font-serif text-gray-800">
                    {experienceData.internship.achievements.items.map((item, index) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: `• ${item}` }} />
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={0.6}>
              <div className="space-y-6">
                <Image
                  src={`/images/experience/${experienceData.internship.image2.src}`}
                  alt={experienceData.internship.image2.alt}
                  width={250}
                  height={300}
                  className="w-full border-2 border-black"
                />
                <p className="text-sm italic text-gray-600 font-serif">
                  {experienceData.internship.image2.caption}
                </p>

                <div className="border-2 border-black p-4">
                  <h4 className="text-lg font-bold font-serif mb-3">
                    {experienceData.internship.technologies.title}
                  </h4>
                  <div className="text-sm font-serif space-y-1">
                    {experienceData.internship.technologies.items.map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* Leadership Section */}
        <ScrollReveal direction="right">
          <div className="border-t-2 border-gray-400 pt-8">
            <ScrollReveal delay={0.2}>
              <h3 className="text-3xl font-bold font-serif mb-6">
                {experienceData.leadership.title}
              </h3>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                {experienceData.leadership.roles.map((role, index) => (
                  <ScrollReveal key={index} delay={0.3 + index * 0.1}>
                    <div className={index > 0 ? "mt-8" : ""}>
                      <h4 className="text-xl font-bold font-serif mb-2">{role.title}</h4>
                      <div className="text-lg font-serif text-gray-700 mb-3">{role.duration}</div>
                      <p
                        className="font-serif text-gray-800 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: role.description }}
                      />
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal direction="up" delay={0.6}>
                <div className="space-y-6">
                  <Image
                    src={`/images/experience/${experienceData.leadership.image.src}`}
                    alt={experienceData.leadership.image.alt}
                    width={400}
                    height={250}
                    className="w-full border-2 border-black"
                  />
                  <p className="text-sm italic text-gray-600 font-serif">
                    {experienceData.leadership.image.caption}
                  </p>

                  <div className="border-2 border-black p-4">
                    <h4 className="text-lg font-bold font-serif mb-2">
                      {experienceData.leadership.skills.title}
                    </h4>
                    <ul className="text-sm font-serif space-y-1">
                      {experienceData.leadership.skills.items.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t-2 border-black mt-12 pt-6 flex justify-between items-center"
        >
          <Link href="/" className="text-lg font-bold font-serif text-black hover:underline">
            ← BACK: HOME
          </Link>
          <div className="text-sm font-serif text-gray-600">
            PAGE A2 • THE PORTFOLIO •{" "}
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <Link
            href="/education"
            className="text-lg font-bold font-serif text-black hover:underline"
          >
            NEXT: EDUCATION →
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
