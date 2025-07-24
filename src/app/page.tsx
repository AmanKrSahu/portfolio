"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { NewspaperHeader } from "@/components/newspaper-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import homeData from "@/data/home.json";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Newspaper Header */}
      <NewspaperHeader pageTitle={homeData.header.title} pageNumber={homeData.header.pageNumber} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Headlines Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Main Story */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="left">
              <h2 className="text-6xl font-bold font-serif leading-none mb-4">
                {homeData.mainHeadline.title}
              </h2>
              <p className="text-xl font-serif text-gray-700 mb-6 leading-relaxed">
                {homeData.mainHeadline.subtitle}
              </p>
            </ScrollReveal>

            {/* Creative Grid Layout */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <ScrollReveal direction="up" delay={0.2}>
                <Image
                  src={`/images/home/${homeData.mainContent.image1.src}`}
                  alt={homeData.mainContent.image1.alt}
                  width={600}
                  height={400}
                  className="w-full"
                />
                <p className="text-sm italic text-gray-600 mt-2 font-serif">
                  {homeData.mainContent.image1.caption}
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.4}>
                <div className="space-y-4">
                  <p className="font-serif text-gray-800 leading-relaxed text-justify">
                    <span className="newspaper-dropcap">I</span>
                    {homeData.mainContent.paragraph1.substring(1)}
                  </p>
                  <p className="font-serif text-gray-800 leading-relaxed text-justify">
                    {homeData.mainContent.paragraph2}
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={0.6}>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <p className="font-serif text-gray-800 leading-relaxed text-justify">
                    {homeData.mainContent.paragraph3}
                  </p>
                  <p className="font-serif text-gray-800 leading-relaxed text-justify">
                    {homeData.mainContent.paragraph4}
                  </p>
                  <p className="font-serif text-gray-800 leading-relaxed text-justify">
                    {homeData.mainContent.paragraph5}
                  </p>
                </div>

                <div>
                  <Image
                    src={`/images/home/${homeData.mainContent.image2.src}`}
                    alt={homeData.mainContent.image2.alt}
                    width={250}
                    height={300}
                    className="w-full"
                  />
                  <p className="text-sm italic text-gray-600 font-serif">
                    {homeData.mainContent.image2.caption}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <ScrollReveal direction="right" delay={0.3}>
              <div className="border-2 border-black p-4">
                <h3 className="text-2xl font-bold font-serif mb-4 border-b-2 border-black pb-2">
                  {homeData.sidebar.officialTranscript.title}
                </h3>
                <div className="space-y-3 text-sm font-serif">
                  {homeData.sidebar.officialTranscript.items.map((item, index) => (
                    <div key={index}>
                      <strong>{item.label}:</strong> {item.value}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.5}>
              <h4 className="text-xl font-bold font-serif mb-3 border-b border-black pb-1">
                {homeData.sidebar.achievements.title}
              </h4>
              <div className="space-y-4">
                {homeData.sidebar.achievements.items.map((item, index) => (
                  <div key={index}>
                    <Image
                      src={`/images/home/${item.image}`}
                      alt={item.alt}
                      width={200}
                      height={index === 0 ? 120 : 100}
                      className="w-full border-2 border-black mb-2"
                    />
                    <p
                      className="text-sm font-serif text-gray-800"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.7}>
              <div className="border-2 border-black p-3">
                <h4 className="text-lg font-bold font-serif mb-2">
                  {homeData.sidebar.contact.title}
                </h4>
                <div className="text-sm font-serif space-y-1">
                  {homeData.sidebar.contact.items.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Secondary Stories */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="border-t-4 border-black pt-8">
            <div className="grid md:grid-cols-3 gap-8">
              {homeData.secondaryStories.map((story, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold font-serif mb-3">{story.title}</h3>
                  <Image
                    src={`/images/home/${story.image}`}
                    alt={story.alt}
                    width={300}
                    height={index === 1 ? 200 : index === 2 ? 160 : 180}
                    className="w-full border-2 border-black mb-3"
                  />
                  <p className="font-serif text-gray-800 text-sm leading-relaxed text-justify">
                    {story.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="border-t-2 border-black mt-8 sm:mt-12 pt-4 sm:pt-6 flex flex-col-reverse md:flex-row justify-between items-center gap-4 xs:gap-0"
        >
          {/* Date and Page Info */}
          <div className="text-xs sm:text-sm font-serif text-gray-600 text-center xs:text-left">
            PAGE A1 • THE PORTFOLIO •{" "}
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          {/* Navigation Link */}
          <Link
            href="/experience"
            className="text-base sm:text-lg font-bold font-serif text-black hover:underline whitespace-nowrap"
          >
            NEXT: EXPERIENCE →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
