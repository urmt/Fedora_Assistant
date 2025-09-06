import React, { useState } from 'react';
import CodeAssistant from './CodeAssistant';
import SystemMaintenance from './SystemMaintenance';

const MainDashboard = ({ modelLoaded, onBackToSetup }) => {
  const [activeTab, setActiveTab] = useState('chat');
  const [conversation, setConversation] = useState([
    {
      type: 'assistant',
      message: "Hi! I'm your Fedora Assistant. I'm here to help you with coding questions and system maintenance. What would you like to know?",
      timestamp: new Date()
    }
  ]);

  const tabs = [
    {
      id: 'chat',
      name: 'Ask Questions',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      description: 'Chat with your AI assistant'
    },
    {
      id: 'code',
      name: 'Coding Help',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      description: 'Get help with programming'
    },
    {
      id: 'system',
      name: 'System Care',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Maintain your Fedora system'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Your Fedora Assistant is Ready! 🎉
            </h1>
            <p className="text-gray-600">
              Ask me anything about coding, system maintenance, or general computer questions.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-green-600">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">AI Model Active</span>
            </div>
            
            <button
              onClick={onBackToSetup}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Change Model
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-lg mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  {tab.icon}
                  <span>{tab.name}</span>
                </div>
              </button>
            ))}
          </nav>
        </div>
        
        <div className="p-6">
          <div className="text-center text-gray-600 mb-4">
            {tabs.find(tab => tab.id === activeTab)?.description}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-lg">
        {activeTab === 'chat' && (
          <div className="p-6">
            <div className="h-96 border rounded-lg p-4 bg-gray-50 mb-4 overflow-y-auto">
              {conversation.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    msg.type === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white border shadow-sm'
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask me anything... (e.g., 'How do I update my system?' or 'Help me write a Python function')"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Send
              </button>
            </div>
          </div>
        )}

        {activeTab === 'code' && <CodeAssistant />}
        {activeTab === 'system' && <SystemMaintenance />}
      </div>
    </div>
  );
};

export default MainDashboard;