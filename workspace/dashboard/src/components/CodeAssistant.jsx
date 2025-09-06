import React, { useState } from 'react';

const CodeAssistant = () => {
  const [selectedTask, setSelectedTask] = useState('');

  const codingTasks = [
    {
      id: 'debug',
      title: 'Fix My Code',
      description: 'Paste your code and I\'ll help find and fix errors',
      icon: '🐛',
      example: 'Paste your Python, JavaScript, or any code here'
    },
    {
      id: 'explain',
      title: 'Explain Code',
      description: 'I\'ll explain what any code does in simple terms',
      icon: '📖',
      example: 'Paste code you want to understand'
    },
    {
      id: 'write',
      title: 'Write New Code',
      description: 'Tell me what you want to build and I\'ll write it',
      icon: '✍️',
      example: 'e.g., "Write a function to calculate the area of a circle"'
    },
    {
      id: 'improve',
      title: 'Improve Code',
      description: 'Make your code faster, cleaner, or more readable',
      icon: '⚡',
      example: 'Paste code you want to improve'
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">What kind of coding help do you need?</h2>
        <p className="text-gray-600">Choose a task below, or just start typing your question!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {codingTasks.map((task) => (
          <button
            key={task.id}
            onClick={() => setSelectedTask(task.id)}
            className={`text-left p-4 rounded-lg border-2 transition-all ${
              selectedTask === task.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{task.icon}</span>
              <div>
                <h3 className="font-semibold mb-1">{task.title}</h3>
                <p className="text-sm text-gray-600">{task.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {selectedTask ? `${codingTasks.find(t => t.id === selectedTask)?.title}:` : 'Your Question or Code:'}
          </label>
          <textarea
            placeholder={
              selectedTask 
                ? codingTasks.find(t => t.id === selectedTask)?.example
                : "Ask me anything about coding! For example:\n• How do I create a web server in Python?\n• Fix this error in my JavaScript\n• Explain what this function does"
            }
            className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        <div className="flex gap-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
            Get Help
          </button>
          <button 
            onClick={() => setSelectedTask('')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Quick Examples */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-3">💡 Quick Examples:</h3>
        <div className="grid md:grid-cols-2 gap-2 text-sm">
          <div className="text-gray-600">• "Write a Python script to organize my files"</div>
          <div className="text-gray-600">• "Why is my website not loading?"</div>
          <div className="text-gray-600">• "How do I connect to a database?"</div>
          <div className="text-gray-600">• "Make this code run faster"</div>
        </div>
      </div>
    </div>
  );
};

export default CodeAssistant;