import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Clock, Award } from 'lucide-react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (questionId: string, selectedAnswer: number, isCorrect: boolean) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    const isCorrect = answerIndex === question.correctAnswer;
    onAnswer(question.id, answerIndex, isCorrect);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Hard':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getOptionStyle = (index: number) => {
    if (selectedAnswer === null) {
      return 'border-gray-300 hover:border-primary-500 hover:bg-primary-50 dark:border-gray-600 dark:hover:border-primary-400 dark:hover:bg-primary-900/20';
    }
    if (index === question.correctAnswer) {
      return 'border-green-500 bg-green-50 dark:border-green-400 dark:bg-green-900/20';
    }
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return 'border-red-500 bg-red-50 dark:border-red-400 dark:bg-red-900/20';
    }
    return 'border-gray-300 dark:border-gray-600 opacity-50';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center space-x-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)}`}>
            {question.difficulty}
          </span>
          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
            <Award className="w-4 h-4" />
            <span className="text-sm">{question.marks} marks</span>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
          <Clock className="w-4 h-4" />
          <span className="text-sm">
            {Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Subject and Topic */}
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
          {question.subject}
        </span>
        <span className="text-gray-400">•</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {question.topic}
        </span>
      </div>

      {/* Question Text */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 leading-relaxed">
          {question.question}
        </h3>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={selectedAnswer !== null}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${getOptionStyle(index)}`}
          >
            <div className="flex items-center space-x-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-sm font-medium">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-gray-900 dark:text-white">{option}</span>
              {selectedAnswer !== null && index === question.correctAnswer && (
                <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
              )}
              {selectedAnswer === index && index !== question.correctAnswer && (
                <XCircle className="w-5 h-5 text-red-500 ml-auto" />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="flex items-start space-x-2">
            <div className="flex-shrink-0">
              {selectedAnswer === question.correctAnswer ? (
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
              )}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect'}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {question.explanation}
              </p>
              {question.previouslyAsked && question.previouslyAsked.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Previously asked in: {question.previouslyAsked.join(', ')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
