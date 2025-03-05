"use client";

import { PageLayout } from "../components/layout/page-layout";
import { Timeline } from "../components/ui/timeline";
import { TeamGrid } from "./team-grid";

export default function AboutPage() {
  const data = [
    {
      title: "Introduction",
      content: (
        <div>
          <p>
            The ultimate smart assistant for farmers in Sri Lanka&apos;s Western
            and Southern provinces who grow Long beans, Snake gourd, Brinjal,
            Ladies fingers, Bitter gourd, Papaya, Pineapple, and TOM EJC.
          </p>
        </div>
      ),
    },
    {
      title: "Our Mission",
      content: (
        <div>
          <p>
            Combining cutting-edge technologies with easy tools to empower the
            farming community for modernized farming activities. From disease
            identification to predicting market prices to weather forecasting, 
            personalized fertilizer reminders, financial tracking and connecting
            with sellers and Agricultural instructors. 
          </p>
        </div>
      ),
    },
    {
      title: "Our Goals",
      content: (
        <div>
          <p>
            One-stop solution to maximize the harvest, increase profits and
            embrace the most sustainable farming practices.
          </p>
        </div>
      ),
    },
  ];
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center mt-5 mb-30">
        <h1 className="text-6xl font-bold mb-10">About Us</h1>
        <div className="flex flex-col items-center justify-center w-1/2">
          <p className="text-center text-gray-500 text-2xl">
            We are a team of undergraduate software engineering students from
            the University of Westminster.
          </p>
        </div>
      </div>

      <Timeline data={data} />

      <div className="flex flex-col items-center justify-center">
        {/* <h1 className="text-4xl font-bold">Our Team</h1> */}
        <div className="flex flex-col items-center justify-center">
          <TeamGrid />
        </div>
      </div>
    </PageLayout>
  );
}
