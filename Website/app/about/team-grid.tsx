"use client";

import { Linkedin } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ravindi Welagedara",
    role: "Leader",
    description:
      "A passionate learner who has a strong interest to explore the world of software development.",
    image: "/images/team/ravindi.jpeg",
    linkedin:
      "https://www.linkedin.com/in/ravindi-welagedara-a71047229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Lavindya Rathnayake",
    role: "UI/UX Designer",
    description:
      "I am the lead for Frontend development and made Aswenna shine by having a major part in UI/UX design.",
    image: "/images/team/lavindya.jpeg",
    linkedin: "https://www.linkedin.com/in/lavindya-rathnayake-44301530b/",
  },
  {
    name: "Ruchira De Silva",
    role: "Web Developer",
    description:
      "I am the lead and main developer of the market price forecasting feature. I also worked on the development of the website",
    image: "/images/team/ruchira.jpg",
    linkedin: "#",
  },
  {
    name: "Tharuka Jayawardena",
    role: "Machine Learning Engineer",
    description:
      "Passionate about learning, driven by innovation, and fueled by problem-solving.",
    image: "/images/team/tharuka.jpeg",
    linkedin:
      "https://www.linkedin.com/in/tharuka-jayawardena-9024732ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Akila De Silva",
    role: "Social Media Manager",
    description:
      "I am the lead development of the fertilizer sellers shop feature and set up and develop in Google map feature. I also lead and worked on the Social media platforms.",
    image: "/images/team/akila.jpeg",
    linkedin:
      "https://www.linkedin.com/in/akila-n-de-silva-a178122b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Oshada Wijayarathne",
    role: "Full Stack Developer",
    description:
      "I am the lead development of the fertilizer reminder and call scheduler.",
    image: "/images/team/oshada.jpeg",
    linkedin: "https://www.linkedin.com/in/oshada-eranga-wijerathna/",
  },
];

function TeamGrid() {
  return (
    <div className="bg-transparent min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Meet the brains
          </h2>
          <p className="text-gray-400">
            These people work on making our product best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden ring-2 ring-purple-500 ring-offset-4 ring-offset-[#0F1117]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-400 mb-3">{member.role}</p>
                <p className="text-gray-300 mb-4">{member.description}</p>

                <div className="flex gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="p-4 w-30 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors flex justify-center items-center"
                    >
                      <Linkedin className="w-5 h-7 text-gray-300" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { TeamGrid };
