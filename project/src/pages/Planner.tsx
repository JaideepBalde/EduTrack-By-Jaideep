import React, { useState } from 'react';
import { Calendar, Clock, Target, Plus, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export const Planner: React.FC = () => {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', subject: '', duration: 60, priority: 'medium' });

  // Mock data for study plans and tasks
  const studyPlans = [
    {
      id: '1',
      title: 'UPSC Prelims 2024',
      targetDate: '2024-06-16',
      progress: 65,
      dailyTarget: 6,
      completedToday: 4
    },
    {
      id: '2',
      title: 'SSC CGL Preparation',
      targetDate: '2024-08-15',
      progress: 45,
      dailyTarget: 4,
      completedToday: 2
    }
  ];

  const todayTasks = [
    {
      id: '1',
      title: 'Ancient History - Mauryan Empire',
      subject: 'History',
      duration: 90,
      completed: true,
      priority: 'high'
    },
    {
      id: '2',
      title: 'Quantitative Aptitude Practice',
      subject: 'Mathematics',
      duration: 60,
      completed: true,
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Current Affairs Reading',
      subject: 'General Studies',
      duration: 45,
      completed: false,
      priority: 'medium'
    },
    {
      id: '4',
      title: 'Mock Test - Geography',
      subject: 'Geography',
      duration: 120,
      completed: false,
      priority: 'high'
    }
  ];

  const weeklyProgress = [
    { day: 'Mon', planned: 6, actual: 5 },
    { day: 'Tue', planned: 6, actual: 6 },
    { day: 'Wed', planned: 6, actual: 4 },
    { day: 'Thu', planned: 6, actual: 7 },
    { day: 'Fri', planned: 6, actual: 5 },
    { day: 'Sat', planned: 8, actual: 6 },
    { day: 'Sun', planned: 4, actual: 0 }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const handleAddTask = () => {
    // Add task logic here
    setShowAddTask(false);
    setNewTask({ title: '', subject: '', duration: 60, priority: 'medium' });
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Please sign in to access your study planner</h2>
          <p className="text-gray-600 dark:text-gray-400">Create personalized study plans and track your progress</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Study Planner</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Plan your study schedule and track your daily progress
          </p>
        </div>

        {/* Study Plans Overview */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {studyPlans.map((plan) => (
            <div key={plan.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{plan.title}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Target: {new Date(plan.targetDate).toLocaleDateString()}
                </span>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Overall Progress</span>
                  <span className="font-medium text-gray-900 dark:text-white">{plan.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full" 
                    style={{ width: `${plan.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-primary-600" />
                  <span className="text-gray-600 dark:text-gray-400">Today: {plan.completedToday}/{plan.dailyTarget}h</span>
                </div>
                <div className="flex items-center space-x-1">
                  {plan.completedToday >= plan.dailyTarget ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-yellow-500" />
                  )}
                  <span className={plan.completedToday >= plan.dailyTarget ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}>
                    {plan.completedToday >= plan.dailyTarget ? 'On Track' : 'Behind'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Today's Schedule */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Today's Schedule</h2>
                  <button
                    onClick={() => setShowAddTask(true)}
                    className="inline-flex items-center px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Task
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {todayTasks.map((task) => (
                    <div key={task.id} className={`p-4 rounded-lg border-2 transition-all ${
                      task.completed 
                        ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20' 
                        : 'border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={task.completed}
                            className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                            readOnly
                          />
                          <div>
                            <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-white'}`}>
                              {task.title}
                            </h3>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="text-sm text-gray-600 dark:text-gray-400">{task.subject}</span>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3 text-gray-400" />
                                <span className="text-sm text-gray-600 dark:text-gray-400">{task.duration} min</span>
                              </div>
                              <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                                {task.priority}
                              </span>
                            </div>
                          </div>
                        </div>
                        {task.completed && (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Calendar */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Calendar
              </h3>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Weekly Progress */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weekly Progress</h3>
              <div className="space-y-3">
                {weeklyProgress.map((day) => (
                  <div key={day.day} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{day.day}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${day.actual >= day.planned ? 'bg-green-500' : 'bg-yellow-500'}`}
                          style={{ width: `${Math.min((day.actual / day.planned) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{day.actual}/{day.planned}h</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">This Week</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Total Hours</span>
                  <span className="font-semibold text-gray-900 dark:text-white">33h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Tasks Completed</span>
                  <span className="font-semibold text-gray-900 dark:text-white">24/28</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Streak</span>
                  <span className="font-semibold text-gray-900 dark:text-white">12 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Efficiency</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">86%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Task Modal */}
        {showAddTask && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Add New Task</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Task Title
                  </label>
                  <input
                    type="text"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter task title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={newTask.subject}
                    onChange={(e) => setNewTask({ ...newTask, subject: e.target.value })}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Duration (minutes)
                  </label>
                  <input
                    type="number"
                    value={newTask.duration}
                    onChange={(e) => setNewTask({ ...newTask, duration: parseInt(e.target.value) })}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    min="15"
                    step="15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Priority
                  </label>
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowAddTask(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTask}
                  className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};