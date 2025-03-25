"use client";

import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "./components/layout/page-layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { FeaturePopUp } from "./components/feature-pop-up";
import { FAQ } from "./components/faq";
import { FadeText } from "./components/ui/fade-text";
import { GridBackground } from "./components/ui/glowing-card";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  shortDescription: string;
}

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const features: Feature[] = [
    {
      title: "Price Prediction",
      description:
        "Use a Machine Learning model built to predict the price of the crops monthly for next few months.\nCrops being tracked\n\nLong Beans\nBitter Gourd\nSnake Gourd\nBrinjals\nLady Finger Okra\nPapaya\nPineapple",
      icon: (
        <div className="relative w-16 h-16">
          <Image
            src="/icons/chart-histogram.png"
            alt="call"
            fill
            className="object-contain invert brightness-0"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      ),
      shortDescription:
        "Predict the price of your crops in the next upcoming months",
    },
    {
      title: "Disease Identification",
      description:
        "Use a Machine Learning models and identify any disease.\nSimply take a picture of the diseased area and upload it we will identify and provide you with quick solutions while helping you contact your Agricultural Instructor for further assistance. \n\nCrops being tracked \nBanana\nBrinjals\nMango\nLady Finger Okra\nPapaya\nSnake Gourd",
      icon: (
        <div className="relative w-16 h-16">
          <Image
            src="/icons/disease.png"
            alt="call"
            fill
            className="object-contain invert brightness-0"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      ),
      shortDescription: "Identify any disease simply by uploading an image",
    },
    {
      title: "Weather Alerts",
      description:
        "Get the latest weather updates of your area and weather predictions simply by and alert or our emulated calls.",
      icon: (
        <div className="relative w-16 h-16">
          <Image
            src="/icons/cloud-sun.png"
            alt="call"
            fill
            className="object-contain invert brightness-0"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      ),
      shortDescription: "Get the latest weather updates.",
    },
    {
      title: "Emulated Calls",
      description:
        "Get alerts you won't just brush off.\nCustomize your own alert message or simply enable our other features that support calls. Make sure you never miss anything important.",
      icon: (
        <div className="relative w-16 h-16">
          <Image
            src="/icons/phone-call.png"
            alt="call"
            fill
            className="object-contain invert brightness-0"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      ),
      shortDescription: "Get alerts you won't miss!",
    },
    {
      title: "Suppliers",
      description:
        "Get connected and stay updated about products and stocks of suppliers near you by simply browsing the products we share.",
      icon: (
        <div className="relative w-16 h-16">
          <Image
            src="/icons/supplier-alt.png"
            alt="call"
            fill
            className="object-contain invert brightness-0"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      ),
      shortDescription: "Get connect and be updated about product stocks.",
    },
    {
      title: "Financial Tracker",
      description:
        "Manage your own financial transactions and track your income and expenses no more wasting your income on paper for managing your farm.",
      icon: (
        <div className="relative w-16 h-16">
          <Image
            src="/icons/file-invoice-dollar.png"
            alt="call"
            fill
            className="object-contain invert brightness-0"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      ),
      shortDescription: "Be your own accountant. Never miss a transaction",
    },
  ];
  return (
    <PageLayout>
      <FeaturePopUp
        isOpen={selectedFeature !== null}
        onClose={() => setSelectedFeature(null)}
        title={selectedFeature?.title || ""}
        description={selectedFeature?.description || ""}
        icon={selectedFeature?.icon}
      />

      <div className="min-h-screen w-full relative overflow-hidden">
        <main className="relative">
          {/* Hero Section */}
          <div className="bg-[url('/images/main-background-img.jpg')] container mx-auto px-4 bg-cover bg-center">
            <div className="flex flex-col items-center justify-center h-screen">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="w-30 h-30"
              />
              <h1 className="text-5xl md:text-6xl font-bold mb-16 text-center flex flex-col gap-4">
                <FadeText
                  direction="left"
                  className="text-white"
                  framerProps={{
                    hidden: { opacity: 0, x: -100 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        duration: 1,
                        delay: 0.2,
                      },
                    },
                  }}
                  text="Aswenna"
                />
                <FadeText
                  direction="right"
                  className="text-white"
                  framerProps={{
                    hidden: { opacity: 0, x: 100 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        duration: 1,
                        delay: 0.4,
                      },
                    },
                  }}
                  text="Empowering smarter farming decisions for a thriving tomorrow"
                />
              </h1>

              <Link href="/dashboard">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#1bc643] via-[#016e43] to-[#473a31] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all mb-8 cursor-pointer"
                >
                  Try Aswenna →
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="container mx-auto mb-4 px-4 py-24" id="features">
            <h2>
              <div className="text-4xl md:text-5xl font-bold text-center mb-16">
                <FadeText
                  direction="up"
                  className="text-white"
                  framerProps={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        duration: 1,
                        delay: 0.2,
                      },
                    },
                  }}
                  text="Features We Provide"
                />
              </div>
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {features.map((feature) => (
                <GridBackground
                  key={feature.title}
                  title={feature.title}
                  description={feature.shortDescription}
                  icon={feature.icon}
                  onClick={() => setSelectedFeature(feature)}
                  className={
                    selectedFeature?.title === feature.title
                      ? "opacity-0 scale-95"
                      : ""
                  }
                />
              ))}
            </motion.div>
          </div>
          <div id="faq">
            <FAQ />
          </div>
          {/* Team Section */}
          <div className="container mx-auto px-4 py-4 mb-6">
            <h2>
              <div className="text-4xl md:text-5xl font-bold text-center mb-16">
                <FadeText
                  direction="up"
                  className="text-white"
                  framerProps={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        duration: 1,
                        delay: 0.2,
                      },
                    },
                  }}
                  text="Meet Our Team"
                />
              </div>
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center w-full"
            >
              <AnimatedTooltip
                items={[
                  {
                    id: 1,
                    name: "Ravindi Welagedara",
                    designation: "Team Leader | Full Stack Developer",
                    image: "/images/team/ravindi.jpeg",
                  },
                  {
                    id: 2,
                    name: "Lavindya Rathnayake",
                    designation: "Full Stack Developer | UI/UX Designer",
                    image: "/images/team/lavindya.jpeg",
                  },
                  {
                    id: 3,
                    name: "Ruhcira De Silva",
                    designation:
                      "Full Stack Developer | Web Developer | ML Engineer",
                    image: "/images/team/ruchira.jpg",
                  },
                  {
                    id: 4,
                    name: "Tharuka Jayawardena",
                    designation: "ML Engineer | Full Stack Developer",
                    image: "/images/team/tharuka.jpeg",
                  },
                  {
                    id: 5,
                    name: "Oshada Wijayarathne",
                    designation: "Full Stack Developer",
                    image: "/images/team/oshada.jpeg",
                  },
                  {
                    id: 6,
                    name: "Akila De Silva",
                    designation: "Full Stack Developer | Social Media Manager",
                    image: "/images/team/akila.jpeg",
                  },
                ]}
              />
            </motion.div>
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
