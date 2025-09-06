import React, { useState } from 'react';
import ProgressIndicator from './ProgressIndicator';
import SystemDetector from './SystemDetector';

const ModelSetupWizard = ({ onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0); // 0: detect, 1: choose, 2: download, 3: complete
  const [loading, setLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState('');
  const [recommendation, setRecommendation] = useState(null);
  const [setupComplete, setSetupComplete] = useState(false);

  const models = [
    {
      id: 'llama2-7b',
      name: 'Llama 2 7B (Recommended)',
      description: 'Best balance of speed and intelligence. Good for most tasks.',
      size: '4 GB',
      speed: 'Fast',
      difficulty: 'Beginner Friendly'
    },
    {
      id: 'llama2-13b',
      name: 'Llama 2 13B (Advanced)',
      description: 'Most intelligent model. Requires powerful hardware.',
      size: '8 GB',
      speed: 'Medium',
      difficulty: 'Powerful Hardware'
    },
    {
      id: 'codellama-7b',
      name: 'Code Llama 7B',
      description: 'Specialized for coding tasks. Perfect for programming help.',
      size: '4 GB',
      speed: 'Fast',
      difficulty: 'Beginner Friendly'
    },
    {
      id: 'mistral-7b',
      name: 'Mistral 7B',
      description: 'Very fast and efficient. Great for quick questions.',
      size: '4 GB',
      speed: 'Very Fast',
      difficulty: 'Beginner Friendly'
    }
  ];

  const handleRecommendation = (rec) => {
    setRecommendation(rec);
    setSelectedModel(rec.model);
    setCurrentStep(1);
  };

  const handleModelSelect = (modelId) => {
    setSelectedModel(modelId);
  };

  const handleSkipDetection = () => {
    setCurrentStep(1);
  };

  const handleDownloadStart = async () => {
    setLoading(true);
    setCurrentStep(2);
    
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 3000));
    setCurrentStep(3);
    
    // Simulate setup process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSetupComplete(true);
    setLoading(false);
  };

  const handleComplete = () => {
    onComplete();
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Welcome
        </button>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Set Up Your AI Assistant
        </h1>
        <p className="text-gray-600">
          We'll analyze your system and recommend the perfect AI model for you.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className={`flex items-center gap-2 ${currentStep >= 0 ? 'text-blue-600' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            currentStep >= 0 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
          }`}>
            1
          </div>
          <span className="font-medium">Analyze System</span>
        </div>
        
        <div className="w-12 h-px bg-gray-300"></div>
        
        <div className={`flex items-center gap-2 ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
          }`}>
            2
          </div>
          <span className="font-medium">Choose Model</span>
        </div>
        
        <div className="w-12 h-px bg-gray-300"></div>
        
        <div className={`flex items-center gap-2 ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
          }`}>
            3
          </div>
          <span className="font-medium">Download</span>
        </div>
        
        <div className="w-12 h-px bg-gray-300"></div>
        
        <div className={`flex items-center gap-2 ${currentStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
          }`}>
            4
          </div>
          <span className="font-medium">Ready!</span>
        </div>
      </div>

      {/* Step 0: System Detection */}
      {currentStep === 0 && (
        <div>
          <SystemDetector onRecommendation={handleRecommendation} />
          <div className="text-center mt-4">
            <button
              onClick={handleSkipDetection}
              className="text-gray-500 hover:text-gray-700 text-sm underline"
            >
              Skip analysis and choose manually
            </button>
          </div>
        </div>
      )}

      {/* Step 1: Choose Model */}
      {currentStep === 1 && (
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Choose Your AI Model</h2>
            {recommendation && (
              <span className="text-sm text-green-600 font-medium">
                ✨ {models.find(m => m.id === recommendation.model)?.name} is recommended for your system
              </span>
            )}
          </div>
          
          <p className="text-gray-600 mb-6">
            {recommendation 
              ? "Based on your system analysis, we've pre-selected the best model. You can choose a different one if you prefer."
              : "Pick the AI model that best fits your needs. Don't worry - you can change this later!"
            }
          </p>
          
          <div className="grid gap-4 mb-8">
            {models.map((model) => {
              const isRecommended = recommendation && model.id === recommendation.model;
              return (
                <div
                  key={model.id}
                  onClick={() => handleModelSelect(model.id)}
                  className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                    selectedModel === model.id
                      ? 'border-blue-500 bg-blue-50'
                      : isRecommended
                      ? 'border-green-300 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{model.name}</h3>
                        {isRecommended && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Perfect Match
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{model.description}</p>
                      <div className="flex gap-6 text-sm">
                        <div>
                          <span className="text-gray-500">Size:</span>
                          <span className="ml-1 font-medium">{model.size}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Speed:</span>
                          <span className="ml-1 font-medium">{model.speed}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Level:</span>
                          <span className="ml-1 font-medium">{model.difficulty}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedModel === model.id
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedModel === model.id && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setCurrentStep(0)}
              className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Re-analyze System
            </button>
            <button
              onClick={handleDownloadStart}
              disabled={!selectedModel}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                selectedModel
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Download and Set Up Model
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Download Progress */}
      {currentStep === 2 && (
        <div className="bg-white rounded-xl p-8 shadow-lg text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Downloading Your AI Model</h2>
            <p className="text-gray-600">
              {models.find(m => m.id === selectedModel)?.name} is being downloaded and configured...
            </p>
          </div>
          
          <ProgressIndicator progress={65} />
          
          <p className="text-sm text-gray-500 mt-4">
            💡 The model is being downloaded to your computer so it can work offline!
          </p>
        </div>
      )}

      {/* Step 3: Setup Complete */}
      {currentStep === 3 && (
        <div className="bg-white rounded-xl p-8 shadow-lg text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Your AI Assistant is Ready!</h2>
            <p className="text-gray-600 mb-6">
              {models.find(m => m.id === selectedModel)?.name} is now running on your system and ready to help.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-green-800 mb-2">What happens next?</h3>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Your AI runs privately on your computer</li>
              <li>• No internet required for most tasks</li>
              <li>• Your conversations stay on your device</li>
              <li>• You can ask questions in plain English</li>
            </ul>
          </div>

          <button
            onClick={handleComplete}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
          >
            Start Using Your Assistant
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ModelSetupWizard;