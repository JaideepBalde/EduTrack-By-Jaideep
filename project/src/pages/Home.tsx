import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, TrendingUp, ArrowRight, CheckCircle, Star, Clock } from 'lucide-react';
import { allExams } from '../data/examData';

export const Home: React.FC = () => {
  const stats = [
    { label: 'Total Exams', value: '100+', icon: BookOpen },
    { label: 'Active Learners', value: '50K+', icon: Users },
    { label: 'Success Rate', value: '85%', icon: Award },
    { label: 'Study Hours', value: '1M+', icon: Clock },
  ];

  const features = [
    {
      title: 'Comprehensive Exam Coverage',
      description: 'Complete syllabi and study materials for 100+ government and private sector exams',
      icon: BookOpen
    },
    {
      title: 'Interactive Learning',
      description: 'Practice with real exam questions and get instant feedback with detailed explanations',
      icon: TrendingUp
    },
    {
      title: 'Smart Study Planner',
      description: 'AI-powered study plans tailored to your target exam and available time',
      icon: Award
    },
    {
      title: 'Progress Tracking',
      description: 'Detailed analytics to track your preparation progress and identify weak areas',
      icon: Star
    }
  ];

  const topExams = allExams.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Master Your <span className="text-yellow-400">Exam Journey</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto animate-slide-up">
              Comprehensive preparation platform for Government and Private sector exams with expert-curated content and smart analytics
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
              <Link
                to="/government"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Government Exams
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/private"
                className="inline-flex items-center px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-400 transition-colors shadow-lg border-2 border-primary-400"
              >
                Private Jobs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-lg mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose EduCrack?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform is designed by experts to provide you with everything you need to succeed in your exam preparation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Exams Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Exams
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Start your preparation with our most sought-after exam courses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topExams.map((exam, index) => (
              <Link
                key={exam.id}
                to={`/exam/${exam.id}`}
                className="group bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 border border-gray-200 dark:border-gray-600 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {exam.title}
                  </h3>
                  <span className="text-xs bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 px-2 py-1 rounded-full">
                    {exam.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {exam.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{exam.posts.toLocaleString()} posts</span>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Complete Syllabus</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/government"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
            >
              View All Exams
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of successful candidates who achieved their dreams with EduCrack
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Learning Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/planner"
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-400 transition-colors shadow-lg border-2 border-primary-400"
            >
              Create Study Plan
              <BookOpen className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};