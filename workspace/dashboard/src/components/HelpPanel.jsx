import React from 'react';

const HelpPanel = ({ currentStep, onClose }) => {
  const getHelpContent = () => {
    switch (currentStep) {
      case 'welcome':
        return {
          title: 'Getting Started',
          content: [
            'Welcome to Fedora Assistant! This is your friendly AI helper.',
            'Click "Let\'s Set Up Your Assistant" to begin.',
            'The setup process is simple and guided - no technical knowledge needed.',
            'Your AI will run privately on your computer, keeping your data secure.'
          ]
        };
      case 'setup':
        return {
          title: 'Setting Up Your AI Model',
          content: [
            'We\'re analyzing your computer to recommend the best AI model.',
            'The recommended model will work great with your system specs.',
            'You can always choose a different model if you prefer.',
            'The download happens once - after that, everything works offline.'
          ]
        };
      case 'dashboard':
        return {
          title: 'Using Your Assistant',
          content: [
            'Ask Questions: Chat naturally - ask anything about coding or computers.',
            'Coding Help: Get help writing, fixing, or understanding code.',
            'System Care: Keep your Fedora system running smoothly.',
            'Just type in plain English - no need for technical commands!'
          ]
        };
      default:
        return {
          title: 'General Help',
          content: [
            'This assistant helps with coding and Fedora system maintenance.',
            'Everything runs on your computer - no internet required for most tasks.',
            'Your conversations and data stay private on your device.',
            'If something doesn\'t work, just ask for help!'
          ]
        };
    }
  };

  const helpContent = getHelpContent();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-96 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">{helpContent.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-3">
            {helpContent.content.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">💡 Quick Tips</h4>
            <div className="space-y-1 text-sm text-blue-800">
              <div>• Speak naturally - no need for technical language</div>
              <div>• Ask "How do I..." for step-by-step instructions</div>
              <div>• Say "Explain this" when you don't understand something</div>
              <div>• Use "Fix my code" when something isn't working</div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPanel;