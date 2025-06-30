import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Users, DollarSign, Clock, BookOpen, Award, ChevronDown, ChevronRight, Play, FileText, ExternalLink } from 'lucide-react';
import { getExamById } from '../data/examData';
import { QuestionCard } from '../components/QuestionCard';
import { sampleQuestions } from '../data/questionBank';

export const ExamDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const exam = id ? getExamById(id) : null;
  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'practice' | 'materials'>('overview');
  const [expandedSubjects, setExpandedSubjects] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  if (!exam) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Exam not found</h2>
          <Link to="/government" className="text-primary-600 hover:text-primary-700">
            Back to Exams
          </Link>
        </div>
      </div>
    );
  }

  const toggleSubject = (subjectId: string) => {
    setExpandedSubjects(prev => 
      prev.includes(subjectId) 
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const examQuestions = sampleQuestions.filter(q => 
    exam.syllabus.some(subject => 
      subject.name.toLowerCase().includes(q.subject.toLowerCase()) ||
      q.subject.toLowerCase().includes(subject.name.toLowerCase())
    )
  );

  const handleAnswerQuestion = (questionId: string, selectedAnswer: number, isCorrect: boolean) => {
    // Handle answer logic here
    console.log({ questionId, selectedAnswer, isCorrect });
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BookOpen },
    { id: 'syllabus', name: 'Syllabus', icon: FileText },
    { id: 'practice', name: 'Practice', icon: Play },
    { id: 'materials', name: 'Study Materials', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{exam.title}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{exam.department}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4 text-primary-600" />
                  <span>{exam.examFrequency}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-primary-600" />
                  <span>{exam.posts.toLocaleString()} posts</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4 text-primary-600" />
                  <span>{exam.applicationFee}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-primary-600" />
                  <span>{exam.preparationTime}</span>
                </div>
              </div>
            </div>
            <div className="mt-6 lg:mt-0">
              <Link
                to={exam.officialWebsite}
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Official Website
                <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About This Exam</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exam.description}</p>
              </div>

              {/* Exam Pattern */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Exam Pattern</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Questions</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{exam.pattern.totalQuestions}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Marks</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{exam.pattern.totalMarks}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{exam.pattern.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Negative Marking</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{exam.pattern.negativeMarking}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Sections</h3>
                  {exam.pattern.sections.map((section, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="font-medium text-gray-900 dark:text-white">{section.name}</span>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {section.questions} questions • {section.marks} marks
                        {section.duration && ` • ${section.duration}`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selection Process */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Selection Process</h2>
                <div className="space-y-3">
                  {exam.selectionProcess.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-900 dark:text-white">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Important Dates */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Important Dates</h3>
                <div className="space-y-3">
                  {exam.importantDates.map((date, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">{date.event}</span>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{date.date}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          date.status === 'upcoming' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                          date.status === 'ongoing' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                          'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                        }`}>
                          {date.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Salary Range</span>
                    <span className="font-medium text-gray-900 dark:text-white">{exam.salary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Age Limit</span>
                    <span className="font-medium text-gray-900 dark:text-white">{exam.ageLimit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Attempts</span>
                    <span className="font-medium text-gray-900 dark:text-white">{exam.attempts}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Frequency</span>
                    <span className="font-medium text-gray-900 dark:text-white">{exam.examFrequency}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'syllabus' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Complete Syllabus</h2>
              <div className="space-y-4">
                {exam.syllabus.map((subject) => (
                  <div key={subject.id} className="border border-gray-200 dark:border-gray-600 rounded-lg">
                    <button
                      onClick={() => toggleSubject(subject.id)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          {expandedSubjects.includes(subject.id) ? (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-gray-500" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{subject.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Weightage: {subject.weightage}% • {subject.topics.length} topics
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-primary-500 h-2 rounded-full" 
                            style={{ width: `${subject.topics.filter(t => t.completed).length / subject.topics.length * 100}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {subject.topics.filter(t => t.completed).length}/{subject.topics.length} completed
                        </p>
                      </div>
                    </button>
                    
                    {expandedSubjects.includes(subject.id) && (
                      <div className="px-6 pb-4">
                        <div className="space-y-3">
                          {subject.topics.map((topic) => (
                            <div key={topic.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900 dark:text-white">{topic.name}</h4>
                                <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
                                  <span>Est. {topic.estimatedHours}h</span>
                                  <span className={`px-2 py-1 rounded-full text-xs ${
                                    topic.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                                    topic.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                                  }`}>
                                    {topic.difficulty}
                                  </span>
                                </div>
                                <div className="mt-2">
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Subtopics:</p>
                                  <div className="flex flex-wrap gap-1">
                                    {topic.subtopics.slice(0, 5).map((subtopic, idx) => (
                                      <span key={idx} className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                                        {subtopic}
                                      </span>
                                    ))}
                                    {topic.subtopics.length > 5 && (
                                      <span className="text-xs text-gray-500 dark:text-gray-400">
                                        +{topic.subtopics.length - 5} more
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                {topic.completed ? (
                                  <span className="text-green-600 dark:text-green-400 text-sm">✓ Completed</span>
                                ) : (
                                  <button className="px-3 py-1 bg-primary-600 text-white text-sm rounded hover:bg-primary-700 transition-colors">
                                    Start
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'practice' && (
          <div className="space-y-6">
            {examQuestions.length > 0 ? (
              <>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Practice Questions</h2>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Question {currentQuestionIndex + 1} of {examQuestions.length}
                      </span>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                          disabled={currentQuestionIndex === 0}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Previous
                        </button>
                        <button
                          onClick={() => setCurrentQuestionIndex(Math.min(examQuestions.length - 1, currentQuestionIndex + 1))}
                          disabled={currentQuestionIndex === examQuestions.length - 1}
                          className="px-3 py-1 bg-primary-600 text-white rounded hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                  <QuestionCard 
                    question={examQuestions[currentQuestionIndex]} 
                    onAnswer={handleAnswerQuestion}
                  />
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-12 text-center shadow-sm border border-gray-200 dark:border-gray-700">
                <BookOpen className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Practice Questions Coming Soon</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We're preparing comprehensive practice questions for this exam. Check back soon!
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'materials' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Study Materials</h2>
              {exam.syllabus.some(subject => subject.studyMaterial.length > 0) ? (
                <div className="space-y-6">
                  {exam.syllabus.map((subject) => (
                    subject.studyMaterial.length > 0 && (
                      <div key={subject.id} className="border-l-4 border-primary-500 pl-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{subject.name}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {subject.studyMaterial.map((material) => (
                            <div key={material.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                              <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0">
                                  {material.type === 'notes' && <FileText className="w-5 h-5 text-blue-500" />}
                                  {material.type === 'video' && <Play className="w-5 h-5 text-red-500" />}
                                  {material.type === 'practice' && <Award className="w-5 h-5 text-green-500" />}
                                  {material.type === 'reference' && <BookOpen className="w-5 h-5 text-purple-500" />}
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-medium text-gray-900 dark:text-white">{material.title}</h4>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-3">
                                    {material.content}
                                  </p>
                                  {material.duration && (
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                      Duration: {material.duration}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <BookOpen className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Study Materials Coming Soon</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We're curating comprehensive study materials for this exam. Check back soon!
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};