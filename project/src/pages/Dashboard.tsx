import React from 'react';
import { Trophy, Target, Clock, TrendingUp, BookOpen, Award, Calendar, Star } from 'lucide-react';
import { ProgressChart } from '../components/ProgressChart';
import { useAuth } from '../hooks/useAuth';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock data for charts and progress
  const weeklyProgressData = [
    { name: 'Mon', value: 45 },
    { name: 'Tue', value: 62 },
    { name: 'Wed', value: 38 },
    { name: 'Thu', value: 75 },
    { name: 'Fri', value: 58 },
    { name: 'Sat', value: 82 },
    { name: 'Sun', value: 34 }
  ];

  const subjectPerformanceData = [
    { name: 'History', value: 85 },
    { name: 'Geography', value: 72 },
    { name: 'Polity', value: 68 },
    { name: 'Economics', value: 91 },
    { name: 'Science', value: 79 }
  ];

  const gradeDistributionData = [
    { name: 'A+', value: 15 },
    { name: 'A', value: 25 },
    { name: 'B+', value: 35 },
    { name: 'B', value: 18 },
    { name: 'C', value: 7 }
  ];

  const stats = [
    { 
      label: 'Study Streak', 
      value: '12 days', 
      icon: Trophy, 
      color: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-400',
      change: '+2 from last week'
    },
    { 
      label: 'Tests Completed', 
      value: '47', 
      icon: Target, 
      color: 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-400',
      change: '+5 this week'
    },
    { 
      label: 'Study Hours', 
      value: '184h', 
      icon: Clock, 
      color: 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-400',
      change: '+12h this week'
    },
    { 
      label: 'Average Score', 
      value: '78%', 
      icon: TrendingUp, 
      color: 'text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-400',
      change: '+5% improvement'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'test',
      title: 'UPSC Prelims Mock Test 15',
      score: '82%',
      grade: 'A',
      time: '2 hours ago',
      icon: Award
    },
    {
      id: 2,
      type: 'study',
      title: 'Modern History - Freedom Struggle',
      progress: '100%',
      time: '5 hours ago',
      icon: BookOpen
    },
    {
      id: 3,
      type: 'achievement',
      title: 'Completed 50 Practice Questions',
      badge: 'Question Master',
      time: '1 day ago',
      icon: Star
    },
    {
      id: 4,
      type: 'plan',
      title: 'Weekly Study Plan Updated',
      status: 'On Track',
      time: '2 days ago',
      icon: Calendar
    }
  ];

  const weakAreas = [
    { subject: 'Geography', topic: 'Physical Geography', score: 45, total: 100 },
    { subject: 'Polity', topic: 'Constitutional Bodies', score: 58, total: 100 },
    { subject: 'Economics', topic: 'International Trade', score: 62, total: 100 }
  ];

  const strongAreas = [
    { subject: 'History', topic: 'Modern History', score: 92, total: 100 },
    { subject: 'Science', topic: 'Physics', score: 88, total: 100 },
    { subject: 'Economics', topic: 'Microeconomics', score: 85, total: 100 }
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Please sign in to view your dashboard</h2>
          <p className="text-gray-600 dark:text-gray-400">Track your progress and continue your learning journey</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Here's your learning progress and performance overview
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">{stat.change}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <ProgressChart 
            type="bar" 
            data={weeklyProgressData} 
            title="Weekly Study Progress (Minutes)" 
          />
          <ProgressChart 
            type="bar" 
            data={subjectPerformanceData} 
            title="Subject Performance (%)" 
          />
        </div>

        {/* Performance Analysis Row */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <ProgressChart 
            type="pie" 
            data={gradeDistributionData} 
            title="Grade Distribution" 
          />
          
          {/* Strong Areas */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
              Strong Areas
            </h3>
            <div className="space-y-4">
              {strongAreas.map((area, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">{area.topic}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{area.subject}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${(area.score / area.total) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">{area.score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weak Areas */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-red-500 mr-2" />
              Needs Improvement
            </h3>
            <div className="space-y-4">
              {weakAreas.map((area, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">{area.topic}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{area.subject}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-red-500 h-2 rounded-full" 
                        style={{ width: `${(area.score / area.total) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-red-600 dark:text-red-400">{area.score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <activity.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">{activity.title}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    {activity.score && (
                      <span className="text-sm text-green-600 dark:text-green-400">Score: {activity.score}</span>
                    )}
                    {activity.progress && (
                      <span className="text-sm text-blue-600 dark:text-blue-400">Progress: {activity.progress}</span>
                    )}
                    {activity.badge && (
                      <span className="text-sm text-yellow-600 dark:text-yellow-400">Badge: {activity.badge}</span>
                    )}
                    {activity.status && (
                      <span className="text-sm text-green-600 dark:text-green-400">Status: {activity.status}</span>
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};