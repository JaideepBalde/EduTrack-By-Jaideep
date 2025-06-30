import { Question } from '../types';

export const sampleQuestions: Question[] = [
  // UPSC History Questions
  {
    id: 'upsc-hist-1',
    question: 'Which of the following statements about the Indus Valley Civilization is/are correct?\n1. The Indus Valley people worshipped Mother Goddess\n2. They had knowledge of iron\n3. They had a well-planned drainage system\n\nSelect the correct answer:',
    options: [
      '1 and 3 only',
      '2 and 3 only', 
      '1, 2 and 3',
      '3 only'
    ],
    correctAnswer: 0,
    explanation: 'The Indus Valley Civilization people did worship Mother Goddess (evidenced by numerous female figurines found) and had an excellent drainage system. However, they did not have knowledge of iron - they were in the Bronze Age. Iron technology came much later in Indian history.',
    difficulty: 'Medium',
    subject: 'History',
    topic: 'Ancient History',
    marks: 2,
    previouslyAsked: ['UPSC Prelims 2019', 'UPSC Prelims 2021']
  },
  {
    id: 'upsc-hist-2',
    question: 'The term "Satyagraha" was coined by Mahatma Gandhi during which movement?',
    options: [
      'Khilafat Movement',
      'Non-Cooperation Movement',
      'South Africa Movement',
      'Quit India Movement'
    ],
    correctAnswer: 2,
    explanation: 'Gandhi coined the term "Satyagraha" during his struggle in South Africa (1906-1915). The word means "insistence on truth" and became the foundation of his non-violent resistance philosophy.',
    difficulty: 'Easy',
    subject: 'History',
    topic: 'Modern History',
    marks: 2,
    previouslyAsked: ['UPSC Prelims 2018']
  },
  // SSC Quantitative Aptitude Questions
  {
    id: 'ssc-quant-1',
    question: 'If the cost price of 20 articles is equal to the selling price of 16 articles, find the profit percentage.',
    options: [
      '20%',
      '25%',
      '30%',
      '35%'
    ],
    correctAnswer: 1,
    explanation: 'Let CP of each article = Re 1\nCP of 20 articles = Rs 20\nSP of 16 articles = Rs 20\nSP of each article = 20/16 = Rs 1.25\nProfit per article = 1.25 - 1 = Rs 0.25\nProfit % = (0.25/1) × 100 = 25%',
    difficulty: 'Medium',
    subject: 'Quantitative Aptitude',
    topic: 'Profit and Loss',
    marks: 2,
    previouslyAsked: ['SSC CGL 2019', 'SSC CGL 2020']
  },
  {
    id: 'ssc-quant-2',
    question: 'A train 125 meters long is running at a speed of 45 km/hr. In how much time will it cross a platform 175 meters long?',
    options: [
      '24 seconds',
      '20 seconds',
      '18 seconds',
      '22 seconds'
    ],
    correctAnswer: 0,
    explanation: 'Distance to be covered = Length of train + Length of platform = 125 + 175 = 300 meters\nSpeed = 45 km/hr = 45 × (5/18) = 12.5 m/s\nTime = Distance/Speed = 300/12.5 = 24 seconds',
    difficulty: 'Medium',
    subject: 'Quantitative Aptitude',
    topic: 'Time and Distance',
    marks: 2,
    previouslyAsked: ['SSC CGL 2021']
  },
  // Banking Questions
  {
    id: 'bank-1',
    question: 'What is the full form of NEFT?',
    options: [
      'National Electronic Fund Transfer',
      'National Electronic Financial Transaction',
      'National Electronic Funds Transfer',
      'National Electronic Financial Transfer'
    ],
    correctAnswer: 2,
    explanation: 'NEFT stands for National Electronic Funds Transfer. It is an electronic payment system maintained by the Reserve Bank of India (RBI) that facilitates one-to-one funds transfer.',
    difficulty: 'Easy',
    subject: 'Banking Awareness',
    topic: 'Banking Fundamentals',
    marks: 1,
    previouslyAsked: ['IBPS PO 2020', 'IBPS Clerk 2021']
  },
  // TCS Programming Questions
  {
    id: 'tcs-prog-1',
    question: 'What will be the output of the following C program?\n\n```c\n#include <stdio.h>\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    printf("%d", *(arr + 3));\n    return 0;\n}\n```',
    options: [
      '3',
      '4',
      '5',
      'Compilation Error'
    ],
    correctAnswer: 1,
    explanation: '*(arr + 3) means the value at the 4th position (0-indexed) of the array. Since arr[] = {1, 2, 3, 4, 5}, the element at index 3 is 4.',
    difficulty: 'Easy',
    subject: 'Programming',
    topic: 'C Programming',
    marks: 1,
    previouslyAsked: ['TCS NQT 2022']
  }
];

export const getQuestionsBySubject = (subject: string): Question[] => {
  return sampleQuestions.filter(q => q.subject === subject);
};

export const getQuestionsByTopic = (topic: string): Question[] => {
  return sampleQuestions.filter(q => q.topic === topic);
};

export const getQuestionsByDifficulty = (difficulty: string): Question[] => {
  return sampleQuestions.filter(q => q.difficulty === difficulty);
};