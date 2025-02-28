"use client";

import Image from "next/image";
import { PageLayout } from "./components/layout/page-layout";
import { TextEffect } from "./components/ui/text-effect";
import { motion } from "framer-motion";
import { useState } from "react";
import { FeaturePopUp } from "./components/feature-pop-up";
import { FAQ } from "./components/faq";

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
        "Use a Machine Learning model built to predict the price of the crops monthly for next few months.\nCrops being tracked\nLong Beans\n\nBitter Gourd\n\nSnake Gourd\n\nBrinjals\n\nLady Finger Okra\n\nPapaya\n\nPineapple",
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
        "Use a Machine Learning models and identify any disease.\nSimply take a picture of the diseased area and upload it we will identify and provide you with quick solutions while helping you contact your Agricultural Instructor for further assistance. \nCrops being tracked \n\nBanana\n\nBrinjals\n\nMango\n\nLady Finger Okra\n\nPapaya\n\nSnake Gourd",
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

      <div className="bg-white min-h-screen w-full relative overflow-hidden">
        <main className="relative">
          {/* Hero Section */}
          <div className="container mx-auto px-4 border-10 border-solid border-red">
            <div className="flex flex-col items-center justify-center h-screen">
              <h1 className="text-5xl md:text-6xl font-bold mb-16 text-center">
                <TextEffect
                  per="word"
                  preset="fade"
                  className="text-black"
                  imageLoad={true}
                >
                  {"Aswenna \nSmart Farming Assistant"}
                </TextEffect>
              </h1>
            </div>
          </div>

          {/* Features */}
          <div
            className="container mx-auto mb-4 px-4 py-24 border-10 border-solid border-red"
            id="features"
          >
            <h2>
              <div className="text-4xl md:text-5xl font-bold text-center mb-16">
                <TextEffect
                  per="char"
                  preset="fade"
                  className="inline-flex bg-clip-text text-black"
                  reverseScroll={true}
                >
                  {"Features We Provide"}
                </TextEffect>
              </div>
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  className="bg-[#2d2d2d] backdrop-blur-lg rounded-xl p-8 hover:bg-[#333] transition-all duration-300 border border-white/10 cursor-pointer shadow-lg hover:shadow-xl hover:shadow-black/20 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    opacity: selectedFeature?.title === feature.title ? 0 : 1,
                    scale: selectedFeature?.title === feature.title ? 0.8 : 1,
                  }}
                  onClick={() => setSelectedFeature(feature)}
                >
                  <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#e1e1e1]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.shortDescription}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div id="faq">
            <FAQ />
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
