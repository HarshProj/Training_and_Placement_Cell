'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Import images based on available assets
import logo from '../Assets/logo.png';
import knit from '../Assets/knit.jpeg';
import knit2 from '../Assets/knit2.jpeg';
import workshop from '../Assets/workshop.jpeg';
import dt from '../Assets/dt.jpeg';
import aca from '../Assets/AcademorSelect.jpeg';


// Placement Visit Photos
import pv1 from '../Assets/pv1.jpeg';
import pv2 from '../Assets/pv2.jpeg';
import pv3 from '../Assets/pv3.jpeg';
import pv4 from '../Assets/pv4.jpeg';

// Pre-Placement Talk Photos
import ppt1 from '../Assets/ppt1.jpeg';
import ppt2 from '../Assets/ppt2.jpeg';
import ppt3 from '../Assets/ppt3.jpeg';
import ppt4 from '../Assets/ppt4.jpeg';
import ppt5 from '../Assets/ppt5.jpeg';

// Selection Photos
import tcsSelect from '../Assets/tcsSelect.jpeg';
import tcsSelect2 from '../Assets/tcsSelect2.jpeg';
import tataCommunicationDrive from '../Assets/tataCommunicationDrive.jpeg';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

interface GalleryImage {
  src: any;
  alt: string;
  caption: string;
}

interface GallerySection {
  title: string;
  description: string;
  images: GalleryImage[];
}

const PhotoGallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded after a small delay to ensure animations work properly
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const gallerySections: GallerySection[] = [
    {
      title: "Companies Visited by our Training and Placement Officer",
      description: "Traning and Placement Officer visiting various companies for placements",
      images: [
        { src: pv1, alt: "Company Visit 1", caption: "Meet at HCL Office" },
        { src: pv2, alt: "Company Visit 2", caption: "Meet at TCIL Office" },
        { src: pv3, alt: "Company Visit 3", caption: "Meet at Alt Digital Office" },
        { src: pv4, alt: "Company Visit 4", caption: "Meet at TCS Office" },
      ]
    },
    {
      title: "Pre-Placement Talks",
      description: "Informative sessions conducted by companies before placement drives",
      images: [
        { src: ppt1, alt: "Pre-Placement Talk 1", caption: "Pre-Placement Talk of TCS" },
        { src: ppt2, alt: "Pre-Placement Talk 2", caption: "Pre-Placement Talk of Prolift" },
        { src: ppt3, alt: "Pre-Placement Talk 3", caption: "Pre-Placement Talk of CEDCOSS" },
        { src: ppt5, alt: "Pre-Placement Talk 5", caption: "Career Guidance Session" },
      ]
    },
    {
      title: "Selection Success",
      description: "Celebrating our students who got selected in various companies",
      images: [
        { src: tcsSelect, alt: "TCS Selections", caption: "TCS Selected Candidates(2025)" },
        { src: tcsSelect2, alt: "TCS Selections 2", caption: "TCS Selected Candidates(2024)" },
        { src: tataCommunicationDrive, alt: "Tata Communications", caption: "Tata Communications Selections" },
        { src: aca, alt: "Academor", caption: "Academor Selections" },
      ]
    },
    {
      title: "Workshops & Activities",
      description: "Various skill development workshops and activities organized by the CDC",
      images: [
        { src: workshop, alt: "Workshop", caption: "Technical Workshop Session" },
        { src: dt, alt: "Design Thinking", caption: "Design Thinking Workshop" },
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with KNIT Logo */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src={knit} 
            alt="KNIT Sultanpur" 
            fill 
            className="object-cover opacity-70"
            priority 
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center"
          >
            <Link href="/">
              <Image 
                src={logo} 
                alt="KNIT Logo" 
                width={80} 
                height={80} 
                className="rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold ml-4">
              CDC Photo Gallery
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white text-lg md:text-xl mt-4 text-center px-4"
          >
            Capturing the journey of placements and career development at KNIT Sultanpur
          </motion.p>
        </div>
      </div>

      {/* Category Selector */}
      <div className="container mx-auto py-8 px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8"
        >
          <button 
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
              activeCategory === 'all' 
                ? 'bg-blue-600 text-white shadow-lg scale-105' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          {gallerySections.map((section, index) => (
            <button 
              key={index}
              onClick={() => setActiveCategory(section.title)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === section.title 
                  ? 'bg-blue-600 text-white shadow-lg scale-105' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {section.title}
            </button>
          ))}
        </motion.div>

        {/* Gallery Sections */}
        <motion.div 
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {gallerySections
            .filter(section => activeCategory === 'all' || activeCategory === section.title)
            .map((section, sectionIndex) => (
              <motion.div 
                key={sectionIndex}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{section.title}</h2>
                  <p className="mt-2 text-gray-600">{section.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
                  {section.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      variants={itemVariants}
                      whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                      className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-3">
                        <p className="text-sm text-gray-700 font-medium">{image.caption}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PhotoGallery;