'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from './ui/Button';
import { DASHBOARD_URL } from '../lib/utils/constants';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Track scroll position to add drop shadow after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full py-3 md:py-4 sticky top-0 bg-white/60 bg-soft-gradient backdrop-blur-md z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'} rounded-b-xl`}>
      <div className="container mx-auto px-3 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <span className="text-xl md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-primary-purple to-primary-pink group-hover:scale-[1.02] transition-transform">AI-Vertise Boost</span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink rounded-full opacity-90 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-gray-700 hover:text-primary-purple transition-colors font-medium relative group">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#pricing" className="text-gray-700 hover:text-primary-purple transition-colors font-medium relative group">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#how-it-works" className="text-gray-700 hover:text-primary-purple transition-colors font-medium relative group">
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#case-studies" className="text-gray-700 hover:text-primary-purple transition-colors font-medium relative group">
            Case Studies
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-primary-purple transition-colors font-medium relative group">
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-primary-purple transition-colors font-medium relative group">
            FAQ
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          {/* Login Button */}
          <Button 
            href={DASHBOARD_URL}
            variant="primary"
            size="sm"
            isExternal
            className="ml-4 hover:shadow-md hover:shadow-primary-purple/20 transition-shadow"
          >
            Log In
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Link 
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-3 py-1.5 bg-gradient-to-r from-primary-purple to-primary-pink text-white rounded-xl mr-3 shadow-sm hover:shadow-md transition-shadow"
          >
            Log In
          </Link>
          
          <button 
            className="text-gray-700 p-1.5 rounded-xl hover:bg-white/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-soft-gradient/80 backdrop-blur-md shadow-lg animate-fade-in-down rounded-b-xl mt-0.5">
          <div className="flex flex-col py-4 px-5 gap-2">
            <Link 
              href="#features" 
              className="text-gray-700 hover:text-primary-purple transition-colors py-2.5 font-medium border-b border-gray-200/30 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-4 h-4 mr-2 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Features
            </Link>
            <Link 
              href="#pricing" 
              className="text-gray-700 hover:text-primary-purple transition-colors py-2.5 font-medium border-b border-gray-200/30 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-4 h-4 mr-2 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Pricing
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-gray-700 hover:text-primary-purple transition-colors py-2.5 font-medium border-b border-gray-200/30 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-4 h-4 mr-2 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              How It Works
            </Link>
            <Link 
              href="#case-studies" 
              className="text-gray-700 hover:text-primary-purple transition-colors py-2.5 font-medium border-b border-gray-200/30 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-4 h-4 mr-2 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Case Studies
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-primary-purple transition-colors py-2.5 font-medium border-b border-gray-200/30 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-4 h-4 mr-2 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
              Blog
            </Link>
            <Link 
              href="/faq" 
              className="text-gray-700 hover:text-primary-purple transition-colors py-2.5 font-medium border-b border-gray-200/30 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-4 h-4 mr-2 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              FAQ
            </Link>
            <Link 
              href="/policy" 
              className="text-gray-700 hover:text-primary-purple transition-colors py-2.5 font-medium flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-4 h-4 mr-2 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Privacy Policy
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 