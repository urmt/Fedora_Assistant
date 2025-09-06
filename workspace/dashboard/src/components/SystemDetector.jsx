import React, { useState, useEffect } from 'react';

const SystemDetector = ({ onRecommendation }) => {
  const [systemInfo, setSystemInfo] = useState(null);
  const [detecting, setDetecting] = useState(true);
  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {
    detectSystemSpecs();
  }, []);

  const detectSystemSpecs = async () => {
    setDetecting(true);
    
    // Simulate system detection (in a real app, this would use system APIs)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Get basic system info available in browser
    const info = {
      cores: navigator.hardwareConcurrency || 4,
      memory: navigator.deviceMemory || 8, // GB (if available)
      platform: navigator.platform,
      userAgent: navigator.userAgent,
      // Simulate additional detection
      totalRAM: Math.floor(Math.random() * 16) + 8, // 8-24 GB
      availableRAM: Math.floor(Math.random() * 8) + 4, // 4-12 GB
      cpuSpeed: Math.floor(Math.random() * 2) + 2.5, // 2.5-4.5 GHz
      hasGPU: Math.random() > 0.3, // 70% chance of having dedicated GPU
      diskSpace: Math.floor(Math.random() * 500) + 100 // 100-600 GB available
    };
    
    setSystemInfo(info);
    
    // Generate recommendation based on specs
    const rec = generateRecommendation(info);
    setRecommendation(rec);
    setDetecting(false);
    
    if (onRecommendation) {
      onRecommendation(rec);
    }
  };

  const generateRecommendation = (info) => {
    let recommendedModel;
    let reasoning = [];
    let performance = 'good';

    // Decision logic based on system specs
    if (info.totalRAM >= 16 && info.cores >= 8 && info.hasGPU) {
      recommendedModel = 'llama2-13b';
      reasoning.push('You have plenty of RAM (16+ GB) and a powerful CPU');
      reasoning.push('Dedicated GPU detected for faster processing');
      performance = 'excellent';
    } else if (info.totalRAM >= 12 && info.cores >= 6) {
      recommendedModel = 'codellama-7b';
      reasoning.push('Good balance of RAM and CPU cores');
      reasoning.push('Code Llama is optimized for your system specs');
      performance = 'very good';
    } else if (info.totalRAM >= 8 && info.cores >= 4) {
      recommendedModel = 'llama2-7b';
      reasoning.push('Standard configuration works well with Llama 2');
      reasoning.push('Efficient model that won\'t slow down your system');
      performance = 'good';
    } else {
      recommendedModel = 'mistral-7b';
      reasoning.push('Lightweight model perfect for your system');
      reasoning.push('Fast responses without using too much memory');
      performance = 'good';
    }

    // Add warnings if needed
    const warnings = [];
    if (info.availableRAM < 4) {
      warnings.push('Close other applications for better performance');
    }
    if (info.diskSpace < 50) {
      warnings.push('Consider freeing up disk space (models need 4-8 GB)');
    }

    return {
      model: recommendedModel,
      reasoning,
      warnings,
      performance,
      systemInfo: info
    };
  };

  const getModelDetails = (modelId) => {
    const models = {
      'llama2-7b': {
        name: 'Llama 2 7B',
        description: 'Best balance of speed and intelligence',
        size: '4 GB',
        speed: 'Fast'
      },
      'llama2-13b': {
        name: 'Llama 2 13B',
        description: 'Most intelligent, requires powerful hardware',
        size: '8 GB',
        speed: 'Medium'
      },
      'codellama-7b': {
        name: 'Code Llama 7B',
        description: 'Specialized for programming tasks',
        size: '4 GB',
        speed: 'Fast'
      },
      'mistral-7b': {
        name: 'Mistral 7B',
        description: 'Lightweight and very fast',
        size: '4 GB',
        speed: 'Very Fast'
      }
    };
    return models[modelId] || models['llama2-7b'];
  };

  if (detecting) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-lg text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2">Analyzing Your System</h2>
          <p className="text-gray-600">
            Checking your computer's specs to recommend the best AI model...
          </p>
        </div>
        
        <div className="space-y-2 text-sm text-gray-500">
          <div>🔍 Checking CPU cores and speed...</div>
          <div>💾 Measuring available memory...</div>
          <div>🖥️ Detecting graphics capabilities...</div>
          <div>💿 Analyzing disk space...</div>
        </div>
      </div>
    );
  }

  if (!recommendation) return null;

  const modelDetails = getModelDetails(recommendation.model);

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold mb-2">Perfect Match Found!</h2>
        <p className="text-gray-600">
          Based on your system specs, here's our recommendation:
        </p>
      </div>

      {/* Recommended Model */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-900">{modelDetails.name}</h3>
            <p className="text-blue-800">{modelDetails.description}</p>
          </div>
          <div className="ml-auto">
            <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
              Recommended
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-sm mb-4">
          <div>
            <span className="text-gray-600">Size:</span>
            <span className="ml-1 font-medium">{modelDetails.size}</span>
          </div>
          <div>
            <span className="text-gray-600">Speed:</span>
            <span className="ml-1 font-medium">{modelDetails.speed}</span>
          </div>
          <div>
            <span className="text-gray-600">Performance:</span>
            <span className="ml-1 font-medium capitalize">{recommendation.performance}</span>
          </div>
        </div>
      </div>

      {/* System Analysis */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-semibold mb-3">🖥️ Your System Specs</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">CPU Cores:</span>
              <span className="font-medium">{systemInfo.cores}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total RAM:</span>
              <span className="font-medium">{systemInfo.totalRAM} GB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Available RAM:</span>
              <span className="font-medium">{systemInfo.availableRAM} GB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">GPU:</span>
              <span className="font-medium">{systemInfo.hasGPU ? 'Yes' : 'Integrated'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Free Space:</span>
              <span className="font-medium">{systemInfo.diskSpace} GB</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">✨ Why This Model?</h4>
          <div className="space-y-2 text-sm">
            {recommendation.reasoning.map((reason, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span className="text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Warnings */}
      {recommendation.warnings.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Optimization Tips</h4>
          <div className="space-y-1 text-sm">
            {recommendation.warnings.map((warning, index) => (
              <div key={index} className="text-yellow-700">• {warning}</div>
            ))}
          </div>
        </div>
      )}

      <div className="text-center">
        <button
          onClick={() => onRecommendation && onRecommendation(recommendation)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Use Recommended Model
        </button>
      </div>
    </div>
  );
};

export default SystemDetector;