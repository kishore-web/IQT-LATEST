import React from "react";
import {
  FaRegCalendarAlt,
  FaGlobe,
  FaUserGraduate,
  FaChartLine,
  FaChalkboardTeacher,
  FaCertificate,
} from "react-icons/fa";

const WhyUs = () => {
  const features = [
    {
      icon: <FaRegCalendarAlt className="text-green-500 w-10 h-10 mb-2" />,
      title: "Built for Novices",
      description:
        "Just starting? No need to worry. Let's take the first step together.",
    },
    {
      icon: <FaChartLine className="text-blue-500 w-10 h-10 mb-2" />,
      title: "Create a habit",
      description: "Pick up a new skill and learn why practice makes perfect.",
    },
    {
      icon: <FaUserGraduate className="text-orange-500 w-10 h-10 mb-2" />,
      title: "Learn with the best",
      description:
        "Stuck on something? Discuss it with your peers in your virtual classroom.",
    },
    {
      icon: <FaGlobe className="text-blue-500 w-10 h-10 mb-2" />,
      title: "Discover your niche",
      description:
        "Learn what makes you tick and how you can use it to your benefit.",
    },
    {
      icon: <FaChalkboardTeacher className="text-green-500 w-10 h-10 mb-2" />,
      title: "Learn from experts",
      description:
        "Get access to guest lectures and mentorship by industry leaders.",
    },
    {
      icon: <FaCertificate className="text-blue-500 w-10 h-10 mb-2" />,
      title: "Get certified",
      description:
        "Receive official certification on LinkedIn once you finish this course.",
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-heading">
          Why is this the academy for you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border rounded-lg bg-gray-100">
              <div className="flex mb-4">{feature.icon}</div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
