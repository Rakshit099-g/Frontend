import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUp, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TypingAnimation } from '../TypingAnimation';
import { InteractiveHoverButton } from '../InteractiveHoverButton';
const NFTShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const nftData = [
    {
      id: 1,
      image: "https://tse4.mm.bing.net/th/id/OIP.A_vtM9VmnBiWq8q9y9ElhQHaEK?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "AI Research Companion",
      description: "An intelligent assistant designed to simplify the way you explore, analyze, and summarize information. Powered by advanced algorithms, it helps you discover knowledge faster and make informed decisions.",
      traits: "Context-Aware Insights."
    },
    {
       id: 2,
    image: "https://tse3.mm.bing.net/th/id/OIP._xbOFF7Y1wzYnwslBISPdAHaEp?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Smarter Research with AI",
    description: "Turn complex research tasks into effortless explorations. Our AI tool scours multiple sources, extracts the most relevant information, and presents it in an easy-to-understand format—all within moments.",
    traits: "Data You Can Trust"
    },
    {
      id: 3,
      image: "https://www.brandignity.com/wp-content/uploads/2011/04/Understanding-Google-Search-Engine-Ranking.png",
      
      title: "Explore Ideas. Discover Knowledge.",
      description: "Unlock the potential of intelligent research. This AI-driven platform helps you dive deep into subjects, analyze content, and generate insights, empowering you to expand your understanding effortlessly.",
      traits: "Innovative Solutions"
    },
    {
      id: 4,
      image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/spaces/DataPrism/Research-Assistant.png",
      title: "Your Personal Research Assistant.",
      description: "Ask questions, explore topics, and find answers—all with the help of AI. Whether you’re a student, researcher, or enthusiast, this tool helps you learn more while saving time and effort.",
      traits: "Knowledge at Your Fingertips, these Weirdos are known for their creative problem-solving abilities and innovative approaches to decentralized finance."
    }
  ];

  const handleButtonClick = () => {
    navigate("/login")
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === nftData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? nftData.length - 1 : prevIndex - 1
    );
  };

  const currentNFT = nftData[currentIndex];

  return (
    <div>
    <div className="min-h-screen bg-gray-900 relative">
      {/* Navbar */}
      <nav className="relative z-50  bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <h2 className="text-2xl font-bold text-white">
                AI Research
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  Agent
                </span>
              </h2>
            </div>

            {/* Desktop Navigation */}


            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <button 
                onClick={handleButtonClick}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Sign In
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-300"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/95 backdrop-blur-sm rounded-lg mt-2">
                <a href="#" className="text-white hover:text-purple-400 block px-3 py-2 text-base font-medium transition-colors duration-300">
                  Home
                </a>
                <a href="#" className="text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium transition-colors duration-300">
                  Collection
                </a>
                <a href="#" className="text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium transition-colors duration-300">
                  Roadmap
                </a>
                <a href="#" className="text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium transition-colors duration-300">
                  Team
                </a>
                <a href="#" className="text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium transition-colors duration-300">
                  FAQ
                </a>
                <button 
                  onClick={handleButtonClick}
                  className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center p-4 relative min-h-[calc(100vh-64px)]">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
        
          <div className="absolute inset-0 bg-black"></div>

        </div>
        
        <div className="max-w-6xl w-full flex items-center justify-between gap-12 relative z-10">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110 z-20"
            aria-label="Previous NFT"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* NFT Card Container */}
          <div className="flex-1 max-w-md mx-auto">
            <div className="relative">
              {/* Card Stack Effect */}
              <div className="absolute inset-0 bg-gray-300 rounded-3xl transform rotate-3 scale-95 opacity-30"></div>
              <div className="absolute inset-0 bg-gray-200 rounded-3xl transform rotate-1 scale-98 opacity-50"></div>
              
              {/* Main Card */}
              <div className="relative bg-gray-100 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105">
                <div className="text-center">
                  {/* NFT Image */}
                  <div className="relative mb-6 group">
  <div className="w-full h-full rounded-2xl shadow-lg overflow-hidden">
    <img 
      src={currentNFT.image}
      alt={`Weirdo NFT ${currentNFT.id}`}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
</div>

                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110 z-20"
            aria-label="Next NFT"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Content Section */}
          <div className="flex-1 text-white max-w-lg">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight transition-all duration-500">
                <TypingAnimation>{currentNFT.title}</TypingAnimation>
              </h1>
              
              <p className="text-gray-300 text-lg leading-relaxed transition-all duration-500">
                {currentNFT.description}
              </p>
              
              <p className="text-gray-400 text-base leading-relaxed transition-all duration-500">
                {currentNFT.traits}
              </p>
              
              <InteractiveHoverButton  onClick={handleButtonClick}  
                className="bg-white text-black hover:shadow-md"
              >Sign In</InteractiveHoverButton>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        
      </div>
    </div>

    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-6 py-10">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
      {/* About Section */}
      <div>
        <h3 className="text-white font-semibold mb-4">ABOUT US</h3>
        <p>
          Discover, explore, and stay updated with the latest research tools and trends. Join a community of passionate minds driving innovation.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Collection</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
          <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h3 className="text-white font-semibold mb-4">SUPPORT</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Contact Us */}
      <div>
        <h3 className="text-white font-semibold mb-4">CONTACT</h3>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </div>

    <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs">
      © 2025 AI Research Agent. All rights reserved.
    </div>
  </div>
</footer>

      </div>

  );
};

export default NFTShowcase;