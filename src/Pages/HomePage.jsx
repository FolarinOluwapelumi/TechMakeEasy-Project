import React from 'react';
import Header from '../Components/Header';
import ServicesSection from '../Components/ServicesSection';
import ProjectsSection from '../Components/ProjectsSection';
import IndustrySection from '../Components/IndustrySection';
import BlogSection from '../Components/BlogSection';
import TestimonialsSection from '../Components/TestimonialSection';
import Footer from '../Components/Footer';
import CTA from '../Components/CTA';

const HomePage = () => {
  return (
    <div className="min-h-screen text-white ">
      <Header />
      
      {/* Hero Section */}
      <main className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-700 h-[80vh] md:h-screen px-4 md:px-8">
        <h2 className="sm:text-5xl text-4xl font-bold text-center mb-6">
         Success Made Easy With <br /> TechMakeEasy.
        </h2>
        <p className="text-center font-medium text-lg text-gray-200 sm:text-white max-w-lg">
          Transform your business with a well-designed website and innovative ideas that drive growth and engagement.
        </p>
      </main>

      <ServicesSection />
      <ProjectsSection />
      <IndustrySection />
      <BlogSection />
      <TestimonialsSection />
      <CTA />
      <Footer />
      
    </div>
  );
};

export default HomePage;



// import {Link} from "react-router-dom";

// export default  function HomePage(){
//     return(
//         <>
//         <header className="flex bg-blue-200 justify-between px-2 h-[10vh] items-center">
//             <div className="logo">Logo</div>
//                 <ul className=" sm:flex hidden gap-4">
//                     <li className="cursor-pointer"><Link to = "/">Home</Link></li>
//                     <li className="cursor-pointer"><Link to = "/About">About</Link></li>
//                     <li className="cursor-pointer"><Link to = "/SignUp">Tips</Link></li>
//                 </ul>

//                 <span className="sm:hidden block">&#9776;</span>
//         </header>
//         </>
//     )
// }
