"use client";

import { useState } from "react";
import { PageLayout } from "../components/layout/page-layout";
import { socialLinks } from "./socials";
import Link from "next/link";

export default function ContactUsPage() {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!feedback.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!feedback.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(feedback.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!feedback.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!feedback.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus({ success: false, message: "" });

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("/api/handle-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedback),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "Message sent successfully!",
        });
        setFeedback({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          success: false,
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen w-full relative overflow-hidden">
        <div className="container mt-10 mx-auto px-4 py-2">
          <div className="max-w-7xl mx-auto ">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold">Contact Us</h1>
            </div>

            <div className="mt-10 flex flex-col items-center">
              <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto w-full">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300 
                    backdrop-blur-md bg-white/10 border border-white/20 shadow-lg
                    hover:bg-white/20 hover:border-white/30 hover:scale-105 ${
                      social.name.toLowerCase() === "email" ? "col-span-2" : ""
                    }`}
                  >
                    {social.icon}
                    <span className="text-sm font-medium">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="mt-10 flex flex-col items-center mb-10">
              <form
                onSubmit={handleSubmission}
                id="contact-form"
                className="max-w-md w-full border border-white/20 rounded-lg p-8"
              >
                <h1 className="text-2xl font-bold">
                  Have any questions?
                  <br />
                  We&apos;d love to hear from you!
                </h1>
                <p className="text-gray-500 text-base">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>

                {submitStatus.message && (
                  <div
                    className={`mb-4 p-3 rounded-lg ${
                      submitStatus.success
                        ? "bg-green-500/20 text-green-200"
                        : "bg-red-500/20 text-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                {/* Name Field */}
                <div className="mb-5 mt-7">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={feedback.name}
                    onChange={(e) =>
                      setFeedback({ ...feedback, name: e.target.value })
                    }
                    className={`w-full p-2 rounded-md border hover:border-blue-500/50 mt-2 ${
                      errors.name ? "border-red-500" : "border-white/20"
                    } focus:outline-none focus:border-blue-500 transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="mb-5">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={feedback.email}
                    onChange={(e) =>
                      setFeedback({ ...feedback, email: e.target.value })
                    }
                    className={`w-full p-2 rounded-md border hover:border-blue-500/50 mt-2 ${
                      errors.email ? "border-red-500" : "border-white/20"
                    } focus:outline-none focus:border-blue-500 transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="mb-5">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={feedback.subject}
                    onChange={(e) =>
                      setFeedback({ ...feedback, subject: e.target.value })
                    }
                    className={`w-full p-2 rounded-md border hover:border-blue-500/50 mt-2 ${
                      errors.subject ? "border-red-500" : "border-white/20"
                    } focus:outline-none focus:border-blue-500 transition-colors`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Description Field */}
                <div className="mb-9">
                  <label htmlFor="message" className="text-sm font-medium">
                    Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={feedback.message}
                    onChange={(e) =>
                      setFeedback({ ...feedback, message: e.target.value })
                    }
                    className={`w-full p-2 rounded-md border hover:border-blue-500/50 mt-2 ${
                      errors.message ? "border-red-500" : "border-white/20"
                    } focus:outline-none focus:border-blue-500 transition-colors`}
                    rows={4}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-green-400 text-black font-bold p-2 rounded-md mb-2 w-4/5 cursor-pointer hover:bg-green-500 transition-colors border-3 border-white/20"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
