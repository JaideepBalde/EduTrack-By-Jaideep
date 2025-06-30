import React, { useState } from 'react';
import { Search, Filter, BookOpen, Users, Calendar } from 'lucide-react';
import { ExamCard } from '../components/ExamCard';
import { governmentExams } from '../data/examData';

export const Government: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const departments = [...new Set(governmentExams.map(exam => exam.department))];
  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

  const filteredExams = governmentExams.filter(exam => {
    const matchesSearch = exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exam.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exam.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDepartment = !selectedDepartment || exam.department === selectedDepartment;
    const matchesDifficulty = !selectedDifficulty || exam.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesDepartment && matchesDifficulty;
  });

  const stats = [
    { label: 'Total Exams', value: governmentExams.length, icon: BookOpen },
    { label: 'Total Posts', value: governmentExams.reduce((sum, exam) => sum + exam.posts, 0).toLocaleString(), icon: Users },
    { label: 'Upcoming Exams', value: governmentExams.filter(exam => exam.importantDates.some(date => date.status === 'upcoming')).length, icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Government Exams
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive preparation for Central and State Government job examinations. 
              Master your civil services, banking, railway, and other competitive exams with expert guidance.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-lg mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search exams, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">All Levels</option>
                {difficulties.map(diff => (
                  <option key={diff} value={diff}>{diff}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredExams.length > 0 ? (
          <>
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                Showing {filteredExams.length} exam{filteredExams.length !== 1 ? 's' : ''}
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredExams.map((exam) => (
                <ExamCard key={exam.id} exam={exam} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <Filter className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No exams found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedDepartment('');
                setSelectedDifficulty('');
              }}
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};