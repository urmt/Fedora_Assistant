import React, { useState } from 'react';

const SystemMaintenance = () => {
  const [selectedTask, setSelectedTask] = useState('');

  const maintenanceTasks = [
    {
      id: 'update',
      title: 'Update My System',
      description: 'Keep Fedora up to date with latest security patches',
      icon: '🔄',
      difficulty: 'Easy',
      time: '5-15 minutes',
      command: 'sudo dnf update'
    },
    {
      id: 'cleanup',
      title: 'Clean Up Space',
      description: 'Remove old files and free up disk space',
      icon: '🧹',
      difficulty: 'Easy',
      time: '2-5 minutes',
      command: 'sudo dnf autoremove && sudo dnf clean all'
    },
    {
      id: 'performance',
      title: 'Check Performance',
      description: 'See what\'s using your computer\'s resources',
      icon: '📊',
      difficulty: 'Easy',
      time: '1 minute',
      command: 'htop'
    },
    {
      id: 'security',
      title: 'Security Check',
      description: 'Make sure your system is secure',
      icon: '🔒',
      difficulty: 'Medium',
      time: '5-10 minutes',
      command: 'sudo rkhunter --check'
    },
    {
      id: 'backup',
      title: 'Backup Important Files',
      description: 'Create backups of your important documents',
      icon: '💾',
      difficulty: 'Medium',
      time: '10-30 minutes',
      command: 'rsync -av ~/Documents ~/Backup/'
    },
    {
      id: 'network',
      title: 'Fix Network Issues',
      description: 'Troubleshoot internet and WiFi problems',
      icon: '🌐',
      difficulty: 'Medium',
      time: '5-15 minutes',
      command: 'sudo systemctl restart NetworkManager'
    }
  ];

  const handleRunTask = (task) => {
    setSelectedTask(task.id);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Keep Your Fedora System Healthy</h2>
        <p className="text-gray-600">
          Choose a maintenance task below. I'll guide you through each step with clear instructions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {maintenanceTasks.map((task) => (
          <div
            key={task.id}
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl">{task.icon}</span>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{task.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                
                <div className="flex gap-2 text-xs mb-3">
                  <span className={`px-2 py-1 rounded-full ${
                    task.difficulty === 'Easy' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {task.difficulty}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {task.time}
                  </span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => handleRunTask(task)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
            >
              Get Instructions
            </button>
          </div>
        ))}
      </div>

      {/* Selected Task Instructions */}
      {selectedTask && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl">
              {maintenanceTasks.find(t => t.id === selectedTask)?.icon}
            </span>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {maintenanceTasks.find(t => t.id === selectedTask)?.title}
              </h3>
              <p className="text-blue-800 mb-4">
                Here's how to {maintenanceTasks.find(t => t.id === selectedTask)?.title.toLowerCase()}:
              </p>
            </div>
          </div>

          <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-4 font-mono text-sm">
            <div className="text-gray-400 mb-1"># Copy and paste this command:</div>
            <div>{maintenanceTasks.find(t => t.id === selectedTask)?.command}</div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">1.</span>
              <span>Open Terminal (press Ctrl+Alt+T)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">2.</span>
              <span>Copy the command above and paste it in Terminal</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">3.</span>
              <span>Press Enter and follow any prompts</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">4.</span>
              <span>Wait for the process to complete</span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <div className="font-medium text-yellow-800">Need Help?</div>
                <div className="text-yellow-700 text-sm">
                  If you get stuck or see error messages, just ask me! I can help troubleshoot any issues.
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setSelectedTask('')}
            className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            ← Back to tasks
          </button>
        </div>
      )}

      {/* Quick Tips */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-3">💡 Pro Tips:</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div>• Run system updates weekly to stay secure</div>
          <div>• Clean up disk space monthly to keep things running smoothly</div>
          <div>• Back up important files regularly</div>
          <div>• Ask me if you're unsure about any command!</div>
        </div>
      </div>
    </div>
  );
};

export default SystemMaintenance;