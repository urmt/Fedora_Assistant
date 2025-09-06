import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import ModelSetupWizard from './components/ModelSetupWizard';
import MainDashboard from './components/MainDashboard';
import HelpPanel from './components/HelpPanel';

function App() {
  const [currentStep, setCurrentStep] = useState('welcome'); // welcome, setup, dashboard
  const [modelLoaded, setModelLoaded] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const handleModelLoaded = () => {
    setModelLoaded(true);
    setCurrentStep('dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Help Button - Always Visible */}
      <button
        onClick={() => setShowHelp(!showHelp)}
        className="fixed top-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-colors flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Need Help?
      </button>

      {/* Help Panel */}
      {showHelp && (
        <HelpPanel 
          currentStep={currentStep} 
          onClose={() => setShowHelp(false)} 
        />
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {currentStep === 'welcome' && (
          <WelcomeScreen onNext={() => handleStepChange('setup')} />
        )}
        
        {currentStep === 'setup' && (
          <ModelSetupWizard 
            onComplete={handleModelLoaded}
            onBack={() => handleStepChange('welcome')}
          />
        )}
        
        {currentStep === 'dashboard' && (
          <MainDashboard 
            modelLoaded={modelLoaded}
            onBackToSetup={() => handleStepChange('setup')}
          />
        )}
      </div>
    </div>
  );
}

export default App;