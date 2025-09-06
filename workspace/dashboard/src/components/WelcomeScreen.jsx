import React from 'react';

const WelcomeScreen = ({ onNext }) => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Fedora Assistant
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your friendly AI helper for coding and maintaining your Fedora system. 
          No technical knowledge required - we'll guide you through everything!
        </p>
      </div>

      {/* What You Can Do */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Get Coding Help</h3>
          <p className="text-gray-600">
            Ask questions about programming, get code examples, and fix errors - all in simple language.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Maintain Your System</h3>
          <p className="text-gray-600">
            Keep your Fedora system running smoothly with easy-to-follow maintenance tasks.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Learn as You Go</h3>
          <p className="text-gray-600">
            Every answer comes with explanations so you understand what's happening.
          </p>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          First, we need to set up your AI assistant. Don't worry - we'll walk you through each step!
        </p>
        
        <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
            <span>Load AI Model</span>
          </div>
          <div className="w-8 h-px bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-xs font-bold">2</div>
            <span>Start Using Assistant</span>
          </div>
        </div>

        <button
          onClick={onNext}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2"
        >
          Let's Set Up Your Assistant
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>

      {/* Simple Requirements */}
      <div className="text-sm text-gray-500">
        <p>💡 <strong>What you need:</strong> Just a computer running Fedora Linux. That's it!</p>
      </div>
    </div>
  );
};

export default WelcomeScreen;