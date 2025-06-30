import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, DollarSign, Clock, BookOpen, Star } from 'lucide-react';
import { Exam } from '../types';

interface ExamCardProps {
  exam: Exam;
}

export const ExamCard: React.FC<ExamCardProps> = ({ exam }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const upcomingDate = exam.importantDates.find(date => date.status === 'upcoming');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group hover:scale-[1.02]">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {exam.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exam.department}</p>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(exam.difficulty)}`}>
              {exam.difficulty}
            </span>
          </div>
          <div className="flex items-center space-x-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">4.5</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {exam.description}
        </p>

        {/* Key Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="w-4 h-4 text-primary-600" />
            <span className="text-gray-600 dark:text-gray-300">
              {upcomingDate ? upcomingDate.event : 'Check dates'}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Users className="w-4 h-4 text-primary-600" />
            <span className="text-gray-600 dark:text-gray-300">{exam.posts.toLocaleString()} posts</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <DollarSign className="w-4 h-4 text-primary-600" />
            <span className="text-gray-600 dark:text-gray-300">{exam.applicationFee}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Clock className="w-4 h-4 text-primary-600" />
            <span className="text-gray-600 dark:text-gray-300">{exam.preparationTime}</span>
          </div>
        </div>

        {/* Syllabus Preview */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <BookOpen className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Key Subjects</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {exam.syllabus.slice(0, 3).map((subject) => (
              <span
                key={subject.id}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              >
                {subject.name}
              </span>
            ))}
            {exam.syllabus.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                +{exam.syllabus.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {exam.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <Link
          to={`/exam/${exam.id}`}
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
        >
          View Details & Start Preparation
        </Link>
      </div>
    </div>
  );
};