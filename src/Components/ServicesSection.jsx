import React from 'react';
import ServiceCard from './ServiceCard';
import softwareIcon from '../assets/Software.svg';
import hardwareIcon from '../assets/Hardware.svg';
import cloudIcon from '../assets/Cloud.svg';
import consultingIcon from '../assets/Consultation.svg';
import internetIcon from '../assets/Internet.svg';
import itIcon from '../assets/IT.svg';
import mediaIcon from '../assets/Media.svg';

const ServicesSection = () => {
  const services = [
    {
      iconSrc: softwareIcon,
      title: "Software Development",
      description: "All you need is an idea. We will help you review, plan and design your ideas to innovative products.",
      buttonText: "Design your product",
      buttonLink: "#design",
      delay: 0
    },
    {
      iconSrc: hardwareIcon,
      title: "Hardware Manufacturing",
      description: "After your product design, we will help you develop and launch your web and mobile products. No stress.",
      buttonText: "Build your apps",
      buttonLink: "#build",
      delay: 0.2
    },
    {
      iconSrc: internetIcon,
      title: "Internet Services",
      description: "We help you to focus on your business and marketing. We make sure your infrastructure is running smoothly",
      buttonText: "Manage your services",
      buttonLink: "#manage",
      delay: 0.4
    },
    {
      iconSrc: cloudIcon,
      title: "Cloud Computing",
      description: "We help you to focus on your business and marketing. We make sure your infrastructure is running smoothly",
      buttonText: "Manage your services",
      buttonLink: "#manage",
      delay: 0.6
    },
    {
      iconSrc: itIcon,
      title: "IT Services",
      description: "We help you to focus on your business and marketing. We make sure your infrastructure is running smoothly",
      buttonText: "Manage your services",
      buttonLink: "#manage",
      delay: 0.8
    },
    {
      iconSrc: consultingIcon,
      title: "Consultation",
      description: "We help you to focus on your business and marketing. We make sure your infrastructure is running smoothly",
      buttonText: "Manage your services",
      buttonLink: "#manage",
      delay: 1.0
    },
    {
      iconSrc: mediaIcon,
      title: "Social Media Management",
      description: "We help you to focus on your business and marketing. We make sure your infrastructure is running smoothly",
      buttonText: "Manage your services",
      buttonLink: "#manage",
      delay: 1.2
    }
  ];

  return (
    <section className="py-16 px-4 md:px-32 bg-gray-50 text-left">
      <h2 className="text-3xl font-bold text-purple-500  mb-4">
        We help you transform your ideas to products that people use.
      </h2>
      <p className="mb-12 text-lg text-gray-700">
        We have a track record of building high-quality software with proven results.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;